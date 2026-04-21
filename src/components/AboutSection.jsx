import styles from './AboutSection.module.css'

const facts = [
  'Tutorly connects students, parents, and teachers in one smart learning space.',
  'Families can search and discover trusted tutors by subject, level, and availability.',
  'Teachers build a professional profile, share services, and receive quote requests directly.',
  'Students benefit from guided tutoring sessions, resource sharing, and smooth progress follow-up.',
  'Parents gain clear visibility on their child\'s learning pace and educational goals.',
  'Built-in scheduling, messaging, and session management keep everything organized in one place.',
  'Tutoring can happen online or in person — whatever works best for each family.',
  'Tutorly makes learning more structured, trusted, and stress-free for everyone involved.',
]

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <h2 className={styles.heading}>About Tutorly</h2>
      <div className={styles.grid}>
        {facts.map((fact, i) => (
          <p key={i} className={styles.fact}>{fact}</p>
        ))}
      </div>
    </section>
  )
}
