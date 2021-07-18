import styles from "../styles/components/Profile.module.css"
import { useContext } from "react"
import { ChallengesContext } from "./../contexts/ChallengeContext"

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/stephanrossi.png" alt="Stephan Rossi" />
      <div>
        <strong>Stephan Rossi</strong>
        <p>
          <img src="icons/level.png" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
