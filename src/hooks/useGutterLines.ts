import { useEffect, useState } from "react";

const LINE_SPACING = 18;

const calculate = (): number[] => {
  const count = Math.floor(window.innerHeight / LINE_SPACING);
  return Array.from({ length: count }, (_, i) => i + 1);
};

export const useGutterLines = (): number[] => {
  const [lines, setLines] = useState<number[]>(calculate);

  useEffect(() => {
    const onResize = () => setLines(calculate());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return lines;
};
