import { useEffect, useState } from 'react';
import { Code2, Palette, BrainCircuit, Database, ShieldCheck, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import styles from './Academy.module.css';

const tracks = [
 {icon:Code2,title:'Web Development',level:'Beginner to intermediate',desc:'Learn the foundations of the web and build responsive websites and practical web projects.',skills:'HTML · CSS · JavaScript · React'},
 {icon:Palette,title:'UI/UX and Product Design',level:'Beginner friendly',desc:'Understand user-centred design, wireframing, prototyping and the process of designing useful digital products.',skills:'Design thinking · Wireframes · Prototypes'},
 {icon:BrainCircuit,title:'Artificial Intelligence and Productivity',level:'Beginner friendly',desc:'Explore practical AI concepts and responsible ways to use AI tools to support learning, research and work.',skills:'AI foundations · Prompting · AI tools'},
 {icon:Database,title:'Data Analytics',level:'Beginner to intermediate',desc:'Develop the ability to organise, interpret and communicate information for better decisions.',skills:'Spreadsheets · Data visualisation · Analysis'},
 {icon:ShieldCheck,title:'Cybersecurity Fundamentals',level:'Beginner friendly',desc:'Build awareness of digital safety, common online threats, account protection and responsible security practices.',skills:'Online safety · Security basics · Risk awareness'},
 {icon:Smartphone,title:'Digital Skills and Digital Marketing',level:'Beginner friendly',desc:'Build practical digital confidence and learn how online platforms support communication, content and business growth.',skills:'Digital tools · Content · Social media strategy'}
];

export default function Academy() {
 const {user}=useAuth();
 const [selected,setSelected]=useState(null);
 const [publishedCourses,setPublishedCourses]=useState([]);
 useEffect(()=>{api.get('/academy/courses').then(r=>setPublishedCourses(r.data.courses||[])).catch(()=>{});},[]);
 const displayedTracks=publishedCourses.length?publishedCourses.map(course=>{const known=tracks.find(track=>track.title===course.title);return {...(known||{icon:Code2,title:course.title,level:course.level||'Academy course',desc:course.description||'Explore this learning programme from SOAR Academy.',skills:course.duration||'Course details available'})};}):tracks;
 const [form,setForm]=useState({fullName:user?`${user.firstName||''} ${user.lastName||''}`.trim():'',phone:'',experience:'Beginner',goals:''});
 const [message,setMessage]=useState('');
 const [busy,setBusy]=useState(false);
 async function enroll(e){
  e.preventDefault(); if(!user){setMessage('Please sign in or create an account before submitting your enrolment.');return;}
  setBusy(true);setMessage('');
  try{await api.post('/academy/enrollments',{...form,courseTitle:selected.title});setMessage('Your enrolment interest has been received. The SOAR Academy team will contact you with the next steps.');setSelected(null);setForm(v=>({...v,phone:'',goals:''}));}
  catch(err){setMessage(err.response?.data?.message||'We could not submit your enrolment. Please try again.');}
  finally{setBusy(false);}
 }
 return <section className={styles.page}>
  <div className={styles.hero}><span className={styles.kicker}>LEARN · BUILD · CONTRIBUTE</span><h1>Grow your capacity at <em>SOAR Academy</em></h1><p>Practical and professional skills for productive engagement and meaningful contribution. Explore our technology learning tracks and express your interest in enrolling.</p><div className={styles.heroActions}><a href="#learning-tracks">Explore learning tracks <ArrowRight size={16}/></a>{user&&<Link to="/academy/learning">Open my classroom <ArrowRight size={16}/></Link>}<span>Accessible training · Subsidised rates · Scholarship opportunities where available</span></div></div>
  <section className={styles.intro}><span className={styles.kicker}>OUR APPROACH</span><h2>Skills that serve a purpose.</h2><p>SOAR Academy is Upper Room SOAR Company's skills-development initiative. Our aim is to make relevant learning accessible and help individuals grow in competence, character and capacity. Course schedules, fees, delivery format and available scholarships will be communicated by the Academy team for each cohort.</p></section>
  <section className={styles.tracks} id="learning-tracks"><div className={styles.sectionHead}><div><span className={styles.kicker}>TECHNOLOGY LEARNING PATHWAYS</span><h2>Choose a learning track</h2></div><p>Starter pathways that the Academy can schedule and deliver in cohorts.</p></div>
   <div className={styles.grid}>{displayedTracks.map(({icon:Icon,...track})=><article className={styles.card} key={track.title}><div className={styles.icon}><Icon size={25}/></div><span className={styles.level}>{track.level}</span><h3>{track.title}</h3><p>{track.desc}</p><small>{track.skills}</small><button onClick={()=>{setSelected(track);setMessage('');}}>Enquire / enrol <ArrowRight size={15}/></button></article>)}</div>
  </section>
  <section className={styles.bottom}><CheckCircle2/><div><h2>Not sure where to begin?</h2><p>Tell us about your interests and current experience. The Academy team can guide you towards a suitable learning pathway.</p></div><a href="mailto:hello@upperroomsoar.com">Contact the Academy</a></section>
  {selected&&<div className={styles.overlay} role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)setSelected(null);}}><form className={styles.modal} onSubmit={enroll}><button type="button" className={styles.close} onClick={()=>setSelected(null)} aria-label="Close">×</button><span className={styles.kicker}>SOAR ACADEMY ENROLMENT</span><h2>{selected.title}</h2><p>{selected.desc}</p>{!user&&<div className={styles.signin}>Please <Link to="/account">sign in or create an account</Link> before submitting your enrolment.</div>}<label>Full name<input required value={form.fullName} onChange={e=>setForm({...form,fullName:e.target.value})}/></label><label>Phone / WhatsApp<input required value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="e.g. 080..."/></label><label>Current experience<select value={form.experience} onChange={e=>setForm({...form,experience:e.target.value})}><option>Beginner</option><option>Some experience</option><option>Intermediate</option><option>Advanced</option></select></label><label>What would you like to achieve?<textarea value={form.goals} onChange={e=>setForm({...form,goals:e.target.value})} placeholder="Tell us briefly about your learning goals"/></label>{message&&<p className={styles.feedback}>{message}</p>}<button className={styles.submit} disabled={busy||!user}>{busy?'Submitting…':'Submit enrolment interest'}</button></form></div>}
  {message&&!selected&&<div className={styles.toast}>{message}</div>}
 </section>;
}
