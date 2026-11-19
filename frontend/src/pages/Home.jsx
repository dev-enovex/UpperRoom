import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, HeartHandshake, GraduationCap, Users, Globe2 } from 'lucide-react';
import styles from './Home.module.css';

const pillars = [
  ['Kingdom Advancement', 'Godly wisdom and values influencing every sphere of society.'],
  ['A Global Community', 'Believers united in fellowship, prayer, love and Kingdom purpose.'],
  ['Accessible Development', 'Affordable opportunities for learning, training and skills acquisition.'],
  ['Community Transformation', 'Practical expressions of God’s love through evangelism, care and empowerment.'],
  ['Leadership & Capacity', 'Character, competence and capacity for meaningful participation in society.'],
  ['Intercession & God’s Life', 'Standing for our systems and nations while embodying God’s love and wisdom.']
];
export default function Home() {
  return <div>
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <span className={styles.eyebrow}>UPPER ROOM SOAR COMPANY</span>
        <h1>Spiritually empowered.<br/><em>Practically responsible.</em></h1>
        <p className={styles.lead}>A Christ-centred discipleship and development platform raising spiritually empowered, biblically grounded and practically responsible believers to advance the cause of God’s Kingdom beyond the four walls of the Church.</p>
        <div className={styles.buttons}>
          <Link to="/about" className={styles.gold}>Discover Upper Room <ArrowUpRight size={17}/></Link>
          <Link to="/initiatives" className={styles.outline}>Explore our initiatives</Link>
        </div>
        <div className={styles.note}>WE TARRY IN THE UPPER ROOM. OUR INFLUENCE EXTENDS BEYOND IT.</div>
      </div>
      <div className={styles.heroLogo}><img src="/upperroom-soar-logo.png" alt="Upper Room SOAR Summit official emblem"/></div>
    </section>

    <section className={styles.intro}>
      <div><span className={styles.kicker}>WHO WE ARE</span><h2>Identity in Christ.<br/><em>Responsibility in the world.</em></h2></div>
      <div><p>Upper Room SOAR Company is committed to raising disciples who understand their identity in Christ, embrace their responsibility in the world and are equipped to contribute meaningfully to the transformation of society.</p><Link to="/about" className={styles.textLink}>Read our story <ArrowUpRight size={16}/></Link></div>
    </section>

    <section className={styles.mission}>
      <span className={styles.kicker}>OUR MISSION</span>
      <blockquote>“To cultivate a community of Kingdom ambassadors whose lives, leadership, craftsmanship, and influence bear witness to the reign of Christ, advancing His purposes across every sphere of society through discipleship, excellence, innovation, and transformational service.”</blockquote>
    </section>

    <section className={styles.pillars}>
      <div className={styles.sectionHead}><span className={styles.kicker}>THE PILLARS OF OUR VISION</span><h2>Kingdom influence in <em>every sphere.</em></h2><p>We envision a people who carry the life of God, influence the systems of the world and advance the interests of His Kingdom.</p></div>
      <div className={styles.pillarGrid}>{pillars.map(([title,desc],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{desc}</p></article>)}</div>
      <Link to="/vision" className={styles.textLink}>Explore our vision <ArrowUpRight size={16}/></Link>
    </section>

    <section className={styles.initiatives}>
      <div className={styles.sectionHead}><span className={styles.kicker}>HOW WE FULFIL OUR MANDATE</span><h2>Faith expressed through <em>purposeful action.</em></h2></div>
      <div className={styles.initiativeGrid}>
        <article><BookOpen/><h3>SOAR Summit</h3><p>Spiritual teachings, professional insights, interactive workshops, mentorship and collaborative Team Tasks.</p></article>
        <article><HeartHandshake/><h3>Community Outreach</h3><p>Evangelism, medical outreaches, skills acquisition and practical expressions of God’s love.</p></article>
        <article><GraduationCap/><h3>SOAR Academy</h3><p>Accessible skills-development and professional training, with subsidised rates and scholarship opportunities where possible.</p></article>
        <article><Users/><h3>Fellowship & Discipleship</h3><p>Prayer, God’s Word, spiritual growth, mutual edification and Christlike character.</p></article>
      </div>
      <Link to="/initiatives" className={styles.textLink}>See all our initiatives <ArrowUpRight size={16}/></Link>
    </section>

    <section className={styles.callout}>
      <Globe2 size={30}/><span className={styles.kicker}>THERE IS A PLACE FOR YOU AT UPPER ROOM</span>
      <h2>Grow in Christ.<br/><em>Take responsibility.</em></h2>
      <p>Join the fellowship, connect with a mentor, develop your professional capacity or contribute to community transformation.</p>
      <div className={styles.buttons}><Link to="/connect" className={styles.gold}>Get connected <ArrowUpRight size={17}/></Link><Link to="/partner" className={styles.outline}>Partner with us</Link></div>
    </section>
  </div>;
}
