import styles from "./Dog.module.scss";
import SpeechBubble from "./SpeechBubble";

const Dog = () => {
  return (
    <figure className={styles.dog} aria-hidden="true">
      <div className={styles.wrap}>
        <div className={styles.body}>
          <div className={styles.head}>
            <div className={styles.ear} />
            <div className={`${styles.ear} ${styles.earBack}`} />
            <div className={styles.snout}>
              <div className={styles.eye} />
              <div className={styles.nose} />
              <div className={styles.mouth} />
            </div>
            <div className={styles.collar}>
              <div className={styles.tag} />
            </div>
          </div>

          <div className={`${styles.legs} ${styles.legsFront}`}>
            <div className={`${styles.leg} ${styles.legPrimary}`} />
            <div className={`${styles.leg} ${styles.legSecondary}`} />
          </div>

          <div className={`${styles.legs} ${styles.legsBack}`}>
            <div className={`${styles.leg} ${styles.legPrimary}`} />
            <div className={`${styles.leg} ${styles.legSecondary}`} />
          </div>

          <div className={styles.tail} />
        </div>

        <div className={styles.shadow} />
      </div>

      <SpeechBubble />

      <div className={styles.hearts} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className={styles.butterfly}>
        <div className={styles.butterflyWing} />
        <div className={styles.butterflyBody} />
      </div>
    </figure>
  );
};

export default Dog;
