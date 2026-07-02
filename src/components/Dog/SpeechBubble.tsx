import { useTypewriter } from "@/hooks";
import { TYPEWRITER_SENTENCES } from "@/constants";
import styles from "./Dog.module.scss";

const SpeechBubble = () => {
  const text = useTypewriter(TYPEWRITER_SENTENCES, { initialDelay: 5000 });

  return (
    <div className={styles.bubble}>
      {text}
      <span className={styles.bubbleCursor} />
    </div>
  );
};

export default SpeechBubble;
