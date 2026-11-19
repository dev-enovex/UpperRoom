import { Link } from 'react-router-dom';
import { HandCoins, Package, Stethoscope, Wrench, Building2, HeartHandshake, ArrowUpRight } from 'lucide-react';
import styles from './Content.module.css';
const options=[
 [HandCoins,'Financial Support and Sponsorship','Support our outreaches financially by sponsoring medical supplies, relief materials, training sessions, logistics and other essential aspects of our community interventions.'],
 [Package,'Donate Relief Materials and Essential Supplies','Partner with us by providing food items, clothing, toiletries, educational materials, medical supplies and other necessities that can improve the living conditions of vulnerable communities.'],
 [Stethoscope,'Provide Medical Support','Licensed medical doctors, laboratory scientists, nurses, pharmacists and other healthcare professionals can volunteer their expertise, provide medical supplies or support healthcare services during outreaches.'],
 [Wrench,'Volunteer Your Skills and Expertise','We welcome skilled professionals, artisans, technology experts, trainers and entrepreneurs willing to teach practical skills that can help individuals become economically productive and self-sustaining.'],
 [Building2,'Corporate and Organisational Partnerships','Businesses, NGOs, institutions and other organisations can collaborate through sponsorships, resource provision, technical support, training partnerships and other forms of institutional collaboration.'],
 [HeartHandshake,'Volunteer During Our Outreaches','Contribute your time, energy and abilities to evangelism, community engagement, distribution of relief materials, skills training and other outreach activities.']
];
export default function Partner(){return <section className={styles.page}>
 <span className={styles.kicker}>PARTNER WITH US</span><h1>Help transform lives.<br/><em>Restore hope.</em></h1>
 <p className={styles.lead}>Be a part of transforming lives and restoring hope in underserved communities.</p>
 <div className={styles.prose}>
  <p>At Upper Room SOAR Company, we believe that the love of God must find expression in practical ways. This conviction informs our commitment to reaching underserved and vulnerable communities with the Gospel of Jesus Christ, essential relief materials, medical care and sustainable livelihood opportunities.</p>
  <h2>Community outreach in action</h2>
  <p>Our recent outreach to an internally displaced persons (IDP) camp in Benue State, Nigeria, is one expression of this commitment. In partnership with three licensed medical doctors, volunteer medical students and licensed laboratory scientists, we provided medical assistance to members of the community. We also preached the Gospel of Jesus Christ, distributed relief materials and organised skills-training sessions.</p>
  <p>Young people received training in technology, while other participants were taught practical skills such as pastry making, shoemaking and liquid soap production.</p>
  <p>Our approach is deliberate: the Gospel addresses the needs of the soul; medical care serves the body; relief materials address immediate physical needs; and skills empowerment creates opportunities for sustainable livelihood.</p>
  <p>We believe that empowering people with practical, marketable skills gives them an opportunity to rebuild their lives, regain economic independence and reintegrate into society without remaining perpetually dependent on charity.</p>
  <h2>How can you partner with us?</h2>
 </div>
 <div className={styles.partnerGrid}>{options.map(([Icon,title,body],i)=><article key={title}><span>0{i+1}</span><Icon/><h3>{title}</h3><p>{body}</p><a href={`mailto:hello@upperroomsoar.com?subject=${encodeURIComponent(title)}`}>Enquire about partnering <ArrowUpRight size={15}/></a></article>)}</div>
 <div className={styles.partnerClosing}><h2>Let's reach more communities together.</h2><p>Every partnership makes a difference. Whether you are able to contribute financially, provide resources, offer professional expertise, teach a skill or volunteer your time, there is an opportunity for you to be part of this work.</p><p>Together, we can take the love of God beyond the four walls of the Church, restore hope, empower lives and contribute to the transformation of communities.</p><Link to="/connect">Get connected with Upper Room <ArrowUpRight size={15}/></Link></div>
</section>}
