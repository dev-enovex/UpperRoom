
import styles from './Gallery.module.css';

const moments = [
  ['soar-summit-01.jpg', 'A speaker sharing during a SOAR Summit session'],
  ['soar-summit-02.jpg', 'A speaker teaching from the stage'],
  ['soar-summit-03.jpg', 'Summit participants and speakers gathered on stage'],
  ['soar-summit-04.jpg', 'A participant engaging during the programme'],
  ['soar-summit-05.jpg', 'A session participant sharing a contribution'],
  ['soar-summit-06.jpg', 'Participants listening and engaging'],
  ['soar-summit-07.jpg', 'Fellowship and connection among attendees'],
  ['soar-summit-08.jpg', 'A speaker addressing the gathering'],
  ['soar-summit-09.jpg', 'Participants sharing a moment together'],
  ['soar-summit-10.jpg', 'A teaching and worship moment'],
  ['soar-summit-11.jpg', 'A participant responding during a session'],
  ['soar-summit-12.jpg', 'A speaker ministering at the summit'],
  ['soar-summit-13.jpg', 'A summit attendee at the event venue'],
  ['soar-summit-14.jpg', 'A moment of worship and participation'],
  ['soar-summit-15.jpg', 'Participants lifting their hands in worship'],
  ['soar-summit-16.jpg', 'Attendees taking notes during a session'],
  ['soar-summit-17.jpg', 'The gathering during a summit session'],
  ['soar-summit-18.jpg', 'A group of attendees sharing fellowship'],
  ['soar-summit-19.jpg', 'A speaker sharing insights with attendees'],
  ['soar-summit-20.jpg', 'A collaborative moment during the programme']
];

export default function Gallery() {
  return (
    <section className={styles.page}>

      {/* TOP BANNER */}
      <div className={styles.heading}>
        <div className={styles.headingContent}>
          <h1>Moments that bring<br />us together</h1>
        </div>
      </div>

      {/* GALLERY BODY */}
      <div className={styles.galleryContent}>
        <p className={styles.intro}>
          Take a look back at moments of learning, fellowship, worship and
          shared purpose from last year's summit.
        </p>

        <div className={styles.grid}>
          {moments.map(([src, alt], index) => (
            <figure className={styles.photo} key={src}>
              <img
                src={`/gallery/${src}`}
                alt={alt}
                loading={index < 4 ? 'eager' : 'lazy'}
              />
              <figcaption>
                <span>UPPER ROOM SOAR</span>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className={styles.note}>
          A collection of moments from our previous gathering. More memories
          will be added as our journey continues.
        </p>
      </div>
    </section>
  );
}
