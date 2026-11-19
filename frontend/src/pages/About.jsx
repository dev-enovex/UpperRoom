import { Link } from 'react-router-dom';
import styles from './Content.module.css';
export default function About() {
  return <section className={styles.page}>
    <span className={styles.kicker}>ABOUT UPPER ROOM SOAR COMPANY</span>
    <h1>Who <em>We Are</em></h1>
    <p className={styles.lead}>A Christ-centred discipleship and development platform.</p>
    <div className={styles.prose}>
      <p>Upper Room SOAR Company is a Christ-centred discipleship and development platform committed to raising spiritually empowered, biblically grounded and practically responsible believers who will advance the cause of God's Kingdom beyond the four walls of the church.</p>
      <p>We believe that the mandate of the believer extends beyond the confines of religious gatherings into the different spheres of human influence. God's redemptive purpose in Christ is not limited to individuals or the activities of the Church; it encompasses all things, for the ultimate purpose of God is to gather together all things in Christ (Ephesians 1:10).</p>
      <p>We recognize the groaning of creation for the manifestation of the sons of God (Romans 8:19) and understand that believers have a responsibility to participate in God's redemptive agenda by bringing His wisdom, values and transformative influence into the systems and structures of our world.</p>
      <p>Consequently, our commitment is to raise disciples who understand their identity in Christ, embrace their responsibility in the world and are equipped to contribute meaningfully to the transformation of society.</p>
      <h2>Why Upper Room?</h2>
      <p>Our identity and philosophy are drawn from the instruction of Jesus to His disciples to tarry in Jerusalem until they were endued with power from on high (Luke 24:49; Acts 1:4–8).</p>
      <p>We understand that effective engagement with the world must proceed from intimacy with God. The Upper Room, therefore, represents our commitment to the place of waiting, prayer, fellowship and spiritual empowerment.</p>
      <p>We recognize the Holy Spirit as the Spirit of God, the revealer of divine wisdom and the One who was present and active in creation. We believe that the wisdom required to repair what is broken in our world must come from the very God who designed and established it in the beginning.</p>
      <p>Thus, we wait to be empowered, and we go forth to take responsibility. We tarry in the Upper Room, but our influence must extend beyond it.</p>
      <h2>Our Philosophy</h2>
      <p>At Upper Room, we are committed to the conviction that spiritual empowerment must translate into practical responsibility. We draw inspiration from the pattern of the apostolic Church in Scripture, where devotion to the apostles' teaching, fellowship, prayer and the expression of love and generosity formed the foundation of a thriving community of believers.</p>
      <p>We believe in the transformative power of discipleship, the necessity of prayer, the centrality of God's Word, the importance of love and community, and the responsibility of believers to become agents of positive change wherever God has positioned them.</p>
      <p>We also recognize that waiting upon the Lord is not an end in itself, but a pathway to renewed strength, spiritual capacity and effective service. As Scripture declares, those who wait upon the Lord shall renew their strength; they shall mount up with wings like eagles (Isaiah 40:31).</p>
      <h2>Our Conviction</h2>
      <p>We believe that the Church must be spiritually equipped and practically positioned to influence the world. We believe that the wisdom of God is relevant to every sphere of human existence, and that believers are called to demonstrate the reality of Christ not only within religious gatherings but also through their contributions to society.</p>
      <p>At Upper Room, we wait upon God for empowerment, grow through the Word, are strengthened through fellowship, and go forth to take responsibility.</p>
      <blockquote>We tarry in the Upper Room so that we can manifest the wisdom, power and influence of Christ beyond its walls.</blockquote>
      <p className={styles.inlineLinks}><Link to="/vision">Explore our vision</Link><Link to="/initiatives">How we fulfil our mandate</Link></p>
    </div>
  </section>;
}
