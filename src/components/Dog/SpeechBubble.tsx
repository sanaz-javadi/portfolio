import { useTypewriter } from "../../hooks";
import { TYPEWRITER_SENTENCES } from "../../constants";

const SpeechBubble = () => {
  const text = useTypewriter(TYPEWRITER_SENTENCES);

  return (
    <div className="dog__bubble">
      {text}
      <span className="dog__bubble-cursor" />
    </div>
  );
};

export default SpeechBubble;
