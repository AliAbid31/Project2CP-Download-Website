import styles from './TopSection.module.css'

const DownloadIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 16l-5-5h3V4h4v7h3l-5 5z"/>
    <rect x="4" y="18" width="16" height="2" rx="1"/>
  </svg>
)

export default function TopSection() {
  return (
    <section className={styles.top}>
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.identity}>
          <div className={styles.logoWrap}>
            <img
              className={styles.logo}
              src="/logo.png"
              alt="Tutorly logo"
            />
          </div>
          <div className={styles.appText}>
            <h1 className={styles.appName}>Tutorly</h1>
            <p className={styles.version}>Version 1.0.0 &bull; Android Stable</p>
          </div>
        </div>

        <a
          id="download-apk"
          className={styles.downloadBtn}
          href="/tutorly.apk"
          download
        >
          <DownloadIcon />
          Download App (Android or IOS)
        </a>
      </div>
    </section>
  )
}
