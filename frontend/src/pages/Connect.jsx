import { Link } from 'react-router-dom';
import { Users, BookOpen, GraduationCap, HeartHandshake, ArrowUpRight } from 'lucide-react';
import styles from './Content.module.css';
const ways=[
 [Users,'Join the Upper Room Fellowship',"Become part of our growing community of believers committed to spiritual growth, prayer, biblical discipleship, fellowship and advancing the interests of God's Kingdom."],
 [BookOpen,'Join Our Discipleship Community',"Connect with a discipleship structure where you can receive spiritual guidance, grow in your understanding of God's Word and develop in your walk with Christ."],
 [GraduationCap,'Connect With a Mentor','Connect with an Upper Room-affiliated professional or mentor for career guidance, professional development, mentorship and growth in your chosen field.'],
 [HeartHandshake,'Volunteer for Community Outreach',"Become part of our community outreach initiatives. Join us in taking the Gospel and practical expressions of God's love to communities through evangelism, medical outreaches, skills empowerment and other interventions."]
];
export default function Connect(){return <section className={styles.page}>
 <span className={styles.kicker}>GET CONNECTED WITH US</span><h1>There is a place for <em>you at Upper Room.</em></h1>
 <p className={styles.lead}>Whether you desire to grow in your walk with God, connect with a mentor, develop your professional capacity or contribute to community transformation, we invite you to become part of our growing community.</p>
 <div className={styles.connectGrid}>{ways.map(([Icon,title,body],i)=><article key={title}><span>0{i+1}</span><Icon/><h2>{title}</h2><p>{body}</p><a href={`mailto:hello@upperroomsoar.com?subject=${encodeURIComponent(title)}`}>Take the next step <ArrowUpRight size={15}/></a></article>)}</div>
 <div className={styles.prose}><h2>Choose how you would like to connect</h2><p>Choose the pathway that best reflects your next step, and let's help you take it.</p><p><Link to="/partner">Would you like to support the work instead? Explore partnership opportunities.</Link></p></div>
</section>}
