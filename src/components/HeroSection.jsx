import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* decorative corner circles */}
      <div className={styles.circleTL} aria-hidden="true" />
      <div className={styles.circleBR} aria-hidden="true" />

      <div className={styles.textSide}>
        <h2 className={styles.heading}>Tutorly</h2>
        <p className={styles.desc}>
          Multi-level tutoring and academic support<br />mobile application.
        </p>
      </div>

      <div className={styles.imageSide}>
        <div className={styles.blob} aria-hidden="true" />
        <img
          className={styles.phone}
          src="/home.png"
          alt="Tutorly app running on a smartphone"
        />
      </div>
    </section>
  )
}
