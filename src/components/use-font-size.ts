import { useCallback, useEffect, useState } from "react";

export function useFontSize() {
  const [level, setLevel] = useState(3); // 1 a 5 (3 é o padrão)

  useEffect(() => {
    const saved = localStorage.getItem("seminario-font-size");
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (parsed >= 1 && parsed <= 5) setLevel(parsed);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    // Tamanhos: 1=14px, 2=15px, 3=16px (padrão), 4=18px, 5=20px
    const sizes = {
      1: "14px",
      2: "15px",
      3: "16px",
      4: "18px",
      5: "20px"
    };
    root.style.fontSize = sizes[level as keyof typeof sizes];
    localStorage.setItem("seminario-font-size", level.toString());
  }, [level]);

  const cycleSize = useCallback(() => {
    setLevel((l) => (l >= 5 ? 1 : l + 1));
  }, []);

  return { level, cycleSize };
}
