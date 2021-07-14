import styles from "../styles/components/ChallengeBox.module.css"

export function ChallengeBox() {
  const hasActiveChallenge = true

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400xp</header>
          <main>
            <img src="icons/body.png" alt="" />
            <strong>Novo desafio</strong>
            <p>Levante da cama</p>
          </main>
          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceedButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber desafios</strong>
          <p>
            <img src="icons/level.png" alt="LevelUp" />
            Avance de nível completando desafios
          </p>
        </div>
      )}
    </div>
  )
}
