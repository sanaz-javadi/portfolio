import { useEffect, useRef, useState } from "react";

interface TypewriterOptions {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
  initialDelay?: number;
}

interface TypewriterState {
  sentenceIndex: number;
  charIndex: number;
  deleting: boolean;
}

export function useTypewriter(
  sentences: string[],
  {
    typingSpeed = 75,
    deletingSpeed = 40,
    pauseMs = 1800,
    initialDelay = 0,
  }: TypewriterOptions = {},
): string {
  const [text, setText] = useState("");
  const stateRef = useRef<TypewriterState>({ sentenceIndex: 0, charIndex: 0, deleting: false });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const s = stateRef.current;
      const chars = [...sentences[s.sentenceIndex]];

      if (!s.deleting) {
        s.charIndex += 1;
        setText(chars.slice(0, s.charIndex).join(""));

        if (s.charIndex === chars.length) {
          s.deleting = true;
          timeout = setTimeout(tick, pauseMs);
        } else {
          timeout = setTimeout(tick, typingSpeed);
        }
      } else {
        s.charIndex -= 1;
        setText(chars.slice(0, s.charIndex).join(""));

        if (s.charIndex === 0) {
          s.deleting = false;
          s.sentenceIndex = (s.sentenceIndex + 1) % sentences.length;
          timeout = setTimeout(tick, 350);
        } else {
          timeout = setTimeout(tick, deletingSpeed);
        }
      }
    }

    timeout = setTimeout(tick, initialDelay || typingSpeed);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally run once on mount — all options are read at init time

  return text;
}
