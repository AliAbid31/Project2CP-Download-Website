import styles from './StepsSection.module.css'

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 16l-5-5h3V4h4v7h3l-5 5z"/>
    <rect x="4" y="18" width="16" height="2" rx="1"/>
  </svg>
)

const BellIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6V11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
  </svg>
)

const InstallIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 14H7v-2h6v2zm0-4H7v-2h6v2zm5-4H6V4h12v4z"/>
  </svg>
)

const PencilIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
  </svg>
)

const steps = [
  {
    number: '1',
    Icon: DownloadIcon,
    text: <>Click <strong>Download</strong> and wait for the file to finish.</>,
  },
  {
    number: '2',
    Icon: BellIcon,
    text: <>Open your <strong>Notifications</strong> bar at the top.</>,
  },
  {
    number: '3',
    Icon: InstallIcon,
    text: <>Tap on the <strong>finished download</strong> to start installing.</>,
  },
]

export default function StepsSection() {
  return (
    <section className={styles.steps}>
      <h2 className={styles.heading}>
        <PencilIcon />
        Quick Installation Guide
      </h2>

      <div className={styles.grid}>
        {steps.map(({ number, Icon, text }) => (
          <article key={number} className={styles.card}>
            <span className={styles.badge}>{number}</span>
            <div className={styles.iconWrap}>
              <Icon />
            </div>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
