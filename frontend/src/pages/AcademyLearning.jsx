import {useEffect,useMemo,useState} from 'react';
import {BookOpen,CheckCircle2,PlayCircle,Download,GraduationCap,LockKeyhole} from 'lucide-react';
import {useAuth} from '../context/AuthContext';
import api from '../services/api';
import styles from './AcademyLearning.module.css';

export default function AcademyLearning(){
 const {user}=useAuth();
 const [learning,setLearning]=useState([]);
 const [selected,setSelected]=useState(null);
 const [message,setMessage]=useState('');
 const [loading,setLoading]=useState(true);
 const refresh=()=>api.get('/academy/my-learning').then(r=>{setLearning(r.data.learning||[]);setSelected(current=>current?((r.data.learning||[]).find(x=>x.course._id===current.course._id)||null):null);}).catch(()=>setMessage('We could not load your learning space. Please try again.')).finally(()=>setLoading(false));
 useEffect(()=>{refresh();},[]);
 const current=useMemo(()=>selected||learning[0]||null,[selected,learning]);
 async function markComplete(lesson){
  if(!current)return;
  try{await api.post(`/academy/courses/${current.course._id}/lessons/${lesson._id}/complete`);setMessage('Lesson progress saved.');await refresh();}
  catch(err){setMessage(err.response?.data?.message||'Unable to save progress.');}
 }
 function certificate(item){
  const win=window.open('','_blank','width=900,height=700');
  if(!win)return;
  win.document.write(`<html><head><title>SOAR Academy Certificate</title><style>body{font-family:Georgia,serif;background:#f4f0e5;padding:38px;color:#17213b}.paper{border:10px double #c4a24b;padding:65px;text-align:center;background:white;min-height:440px}h1{font-size:42px;color:#a17e2c}p{font-size:18px;line-height:1.8}.name{font-size:32px;font-weight:bold;margin:25px}small{letter-spacing:3px}</style></head><body><div class="paper"><small>UPPER ROOM SOAR COMPANY · SOAR ACADEMY</small><h1>Certificate of Completion</h1><p>This certificate is presented to</p><div class="name">${(user?.firstName||'Learner')} ${(user?.lastName||'')}</div><p>for completing the learning programme</p><h2>${item.course.title}</h2><p>Issued ${new Date(item.certificateIssuedAt||Date.now()).toLocaleDateString()}</p><small>GROW IN COMPETENCE · CHARACTER · CAPACITY</small></div><script>window.print()<\/script></body></html>`);
  win.document.close();
 }
 if(loading)return <section className={styles.page}>Loading your SOAR Academy classroom…</section>;
 return <section className={styles.page}>
  <header className={styles.header}><span>SOAR ACADEMY · STUDENT SPACE</span><h1>Welcome to your classroom, {user?.firstName||'Learner'}.</h1><p>Your learning journey continues one lesson at a time. Work through your course materials and track your progress here.</p></header>
  {message&&<p className={styles.message}>{message}</p>}
  {learning.length===0?<div className={styles.empty}><LockKeyhole size={32}/><h2>Your classroom is not active yet</h2><p>When the SOAR Academy team approves your enrolment and changes its status to Enrolled, your course materials will appear here.</p><a href="/academy">Explore learning tracks</a></div>:<div className={styles.layout}>
   <aside className={styles.courses}><h2>My courses</h2>{learning.map(item=><button key={item.course._id} className={current?.course._id===item.course._id?styles.activeCourse:''} onClick={()=>setSelected(item)}><BookOpen size={18}/><span>{item.course.title}<small>{item.progress}% complete</small></span></button>)}</aside>
   {current&&<main className={styles.content}><div className={styles.courseHead}><span>{current.course.level||'SOAR ACADEMY COURSE'}</span><h2>{current.course.title}</h2><p>{current.course.description}</p><div className={styles.progress}><i style={{width:`${current.progress}%`}}/></div><small>{current.completed} of {current.total} lessons completed · {current.progress}%</small></div>
    <h3>Course lessons</h3>{current.course.lessons.map((lesson,index)=>{const done=current.completedLessons?.some(id=>String(id)===String(lesson._id));return <article className={styles.lesson} key={lesson._id}><div className={styles.lessonIcon}>{done?<CheckCircle2/>:<PlayCircle/>}</div><div className={styles.lessonBody}><strong>{index+1}. {lesson.title}</strong>{lesson.description&&<p>{lesson.description}</p>}<div className={styles.resources}>{lesson.videoUrl&&<a href={lesson.videoUrl} target="_blank" rel="noreferrer">Open lesson video <PlayCircle size={14}/></a>}{lesson.resourceUrl&&<a href={lesson.resourceUrl} target="_blank" rel="noreferrer">Lesson resource <Download size={14}/></a>}</div></div><button disabled={done} onClick={()=>markComplete(lesson)}>{done?'Completed':'Mark complete'}</button></article>})}
    {current.total===0&&<div className={styles.empty}>The Academy team is preparing lessons for this course. Please check back soon.</div>}
    {current.progress===100&&<div className={styles.certificate}><GraduationCap size={28}/><div><strong>Congratulations! You completed this course.</strong><p>Your certificate is ready.</p></div><button onClick={()=>certificate(current)}>View / print certificate</button></div>}
   </main>}
  </div>}
 </section>;
}
