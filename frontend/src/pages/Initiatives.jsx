
import { Link } from 'react-router-dom';
import {
  BookOpen,
  HeartHandshake,
  GraduationCap,
  Users,
  ArrowUpRight
} from 'lucide-react';
import styles from './Content.module.css';

const items = [
  {
    icon: BookOpen,
    title: 'SOAR Summit',
    image: '/gallery/soar-summit-19.jpg',
    imageAlt: 'Speakers and participants gathered during the SOAR Summit',
    body: 'Our flagship gathering is designed to equip believers spiritually and professionally for effective engagement with the different spheres of human influence.',
    detail: 'It brings together spiritual teachings from seasoned ministers and practical professional insights from experienced practitioners. Interactive workshops help participants gain relevant knowledge, practical skills and perspectives. The Summit also creates opportunities for professional networking, mentorship and meaningful connections.',
    feature: 'Team Tasks are collaborative, problem-solving engagements that challenge participants to explore and develop practical approaches to addressing real societal problems within different sectors.'
  },
  {
    icon: HeartHandshake,
    title: 'Community Outreach',
    image: '/gallery/outreach.jpeg',
    imageAlt: 'A participant engaging during a community-focused programme',
    body: 'We take the Gospel beyond the walls of the church through evangelism and community-based interventions.',
    detail: 'These include medical outreaches, skill-acquisition initiatives and other practical expressions of God’s love that respond to the needs of the communities we serve. Our outreaches communicate the Gospel in both word and deed, demonstrating the love of Christ while contributing to community well-being and development.'
  },
  {
    icon: GraduationCap,
    title: 'SOAR Academy',
    image: '/gallery/OLA_3920.jpg',
    imageAlt: 'Participants taking notes during a learning session',
    body: 'SOAR Academy is our skills-development initiative committed to equipping individuals with practical and professional skills that enhance their capacity for productive engagement and economic contribution.',
    detail: 'Through accessible training programmes offered at subsidized rates and, where possible, scholarship opportunities, we create avenues for individuals to acquire relevant skills and develop their potential.'
  },
  {
    icon: Users,
    title: 'Fellowship and Discipleship',
    image: '/gallery/soar-summit-11.jpg',
    imageAlt: 'Participants sharing fellowship during a gathering',
    body: 'We cultivate a community of believers committed to prayer, the study of God’s Word, spiritual growth, mutual edification and the development of Christlike character.',
    detail: 'Through regular fellowship, prayer gatherings and Bible study, we encourage believers to grow in their knowledge of God, deepen their relationship with the Holy Spirit and develop the spiritual foundations necessary for a life of effective service.'
  }
];

export default function Initiatives() {
  return (
    <section className={styles.page}>
      <header className={styles.pageHero}>
        <span className={styles.kicker}>HOW WE FULFIL OUR MANDATE</span>
        <h1>Our <em>Initiatives</em></h1>
        <p className={styles.lead}>
          These are among the ways we currently express our mandate, with more
          initiatives and platforms emerging as the vision continues to grow.
        </p>
      </header>

      <div className={styles.initiativeList}>
        {items.map(({ icon: Icon, title, image, imageAlt, body, detail, feature }, i) => (
          <article key={title}>
            <figure className={styles.initiativePhoto}>
              <img src={image} alt={imageAlt} loading={i === 0 ? 'eager' : 'lazy'} />
              <figcaption>UPPER ROOM SOAR <span>0{i + 1}</span></figcaption>
            </figure>

            <div className={styles.initiativeContent}>
              <div className={styles.initiativeHeading}>
                <div className={styles.initiativeIcon}>
                  <Icon />
                </div>
                <span className={styles.number}>0{i + 1} / INITIATIVE</span>
              </div>

              <h2>{title}</h2>
              <p>{body}</p>
              <p>{detail}</p>

              {feature && <blockquote>{feature}</blockquote>}

              {i === 0 && (
                <Link to="/events" className={styles.inlineAction}>
                  Explore summit events <ArrowUpRight size={15} />
                </Link>
              )}

              {i === 2 && (
                <Link to="/academy" className={styles.inlineAction}>
                  Explore SOAR Academy <ArrowUpRight size={15} />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
