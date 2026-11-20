import styles from './Content.module.css';

export default function Leadership() {
  return (
    <section className={styles.page}>
      <span className={styles.kicker}>LEADERSHIP</span>
      <h1>Meet our <em>Lead Visionary</em></h1>
      <p className={styles.lead}>Ijoma, Chisom Jessica · Lead Visionary, Upper Room SOAR Company</p>

      <div className={styles.profileLayout}>
        <figure className={styles.profilePhoto}>
          <img
            src="/chisom-ijoma.jpeg"
            alt="Portrait of Ijoma, Chisom Jessica, Lead Visionary of Upper Room SOAR Company"
          />
          <figcaption>IJOMA, CHISOM JESSICA <span>LEAD VISIONARY</span></figcaption>
        </figure>

        <div className={styles.prose}>
          <h2>Ijoma, Chisom Jessica</h2>
          <p>Ijoma, Chisom Jessica is a Christian, entrepreneur, writer, author, Christian apologist and content creator with a deep passion for Jesus Christ and the advancement of His Kingdom.</p>
          <p>A graduate of Mass Communication from the University of Nigeria, Nsukka, she is currently pursuing a Master's degree at Rev. Fr. Moses Orshio Adasu University, Makurdi, formerly Benue State University, Benue State, Nigeria. She is also an alumnus of the Remnant Christian Network Theological Seminary, Adullam, where she obtained a Postgraduate Diploma in Theology and Ministry.</p>
          <p>Beyond her academic pursuits, Ijoma is an entrepreneur and the Chief Executive Officer of Beulah Consumer Products, a food and agro-processing enterprise committed to promoting organic and healthy feeding through food processing and related initiatives.</p>
          <p>As a Christian apologist and content creator, she is passionate about communicating and defending the Christian faith, helping people understand the foundations of their beliefs and encouraging a deeper appreciation of the person and work of Jesus Christ. She holds firmly to the conviction that Jesus Christ is the hope of the nations and that the broken systems of our world cannot be truly restored apart from Him.</p>
          <p>Her passion for discipleship, personal development and community is deeply rooted in her conviction that people grow better within healthy spiritual structures and relationships. Having benefited from mentorship and continuing to embrace mentorship, accountability and spiritual oversight, she is particularly passionate about mentoring younger people and creating environments where individuals can grow into the fullness of their God-given potential.</p>
          <p>She believes deeply in the power of love, service and community, and in what the Church of Jesus Christ can accomplish when believers become a unified force with Jesus at the centre of all things.</p>
          <p>As the Lead Visionary of Upper Room SOAR Company, Ijoma considers herself privileged to provide leadership to a vision that belongs to God and finds its expression in Jesus Christ. Her desire is to see believers become spiritually empowered, practically responsible and adequately equipped to contribute to the transformation of society.</p>
          <blockquote>Jesus is the hope of the nations, love is indispensable to the advancement of His Kingdom, and the Church is at its best when Christ remains the centre of all things.</blockquote>
          <p>Away from her work and ministry engagements, Ijoma enjoys writing, acting, cooking and spending quality time with loved ones.</p>
        </div>
      </div>
    </section>
  );
}
