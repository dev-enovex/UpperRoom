import styles from './Content.module.css';
const pillars = [
 ["Kingdom Advancement and Societal Influence","Advancing the interests of God’s Kingdom across every sector of society and seeing godly wisdom and values influence leadership, governance and societal structures."],
 ['A Global Community of Believers','Building a network of believers across nations who are united in fellowship, prayer, love and a shared commitment to advancing the Kingdom of God through individual and collective engagement.'],
 ["Accessible Learning and Development","Creating affordable learning platforms that provide opportunities for personal development, professional training and skills acquisition across different fields."],
 ['Community Transformation','Demonstrating the love of God through evangelism, medical assistance, skill empowerment and practical interventions that promote self-sufficiency and community development.'],
 ['Leadership and Capacity Building','Raising individuals with the character, competence and capacity to occupy influential positions, participate in decision-making and become voices of wisdom and reason in society.'],
 ['Intercession and the Expression of God’s Life','Raising consistent intercession for our systems, nations and the world while embodying the love, wisdom and character of God in our everyday engagements.']
];
export default function Vision() {
 return <section className={styles.page}>
  <header className={styles.pageHero}><span className={styles.kicker}>OUR VISION & MISSION</span><h1>Kingdom influence in <em>every sphere.</em></h1></header>
  <div className={styles.prose}>
   <h2>Our Vision</h2>
   <p>To see the Kingdom of God advance in practical ways across every sector of society; to see the Church of Jesus Christ become highly esteemed through its contribution to the good of mankind; and to see the government, wisdom and values of God's Kingdom influence the decisions, leadership and structures of the governments of our world.</p>
   <p>We envision a global network of believers united by fellowship, love and a shared commitment to the interests of God's Kingdom. Through this community, we seek to build a people who can collectively and individually stand against the works of darkness, advance the purposes of God and bring His influence to bear on the world around them.</p>
   <p>We envision accessible learning and development platforms that create opportunities for people across different spheres of interest to acquire relevant knowledge, develop practical skills and grow in their capacities at affordable rates.</p>
   <p>We envision communities transformed by the practical expression of God's love. Through evangelism, skill empowerment, medical assistance and other relevant interventions, we seek to reach underserved communities, address pressing needs and empower individuals towards self-sufficiency and sustainable development.</p>
   <p>We envision a people committed to continuous personal and collective growth, developing the competence, character and capacity necessary to occupy influential positions and participate meaningfully in the decisions that shape our societies. Ultimately, we envision a people who consistently stand in the place of intercession for their systems, nations and the world, while becoming living expressions of the love, wisdom and life of God in everything they do.</p>
   <h2>The Pillars of Our Vision</h2>
  </div>
  <div className={styles.pillarList}>{pillars.map(([title,body],i)=><article key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
  <div className={styles.prose}><h2>Our Mission</h2><blockquote>To cultivate a community of Kingdom ambassadors whose lives, leadership, craftsmanship, and influence bear witness to the reign of Christ, advancing His purposes across every sphere of society through discipleship, excellence, innovation, and transformational service.</blockquote></div>
 </section>;
}
