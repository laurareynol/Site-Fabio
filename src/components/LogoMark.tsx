import { useEffect, useId, useRef } from "react";

/**
 * Traçado da logo do Fabio Camolesi recriado como linha contínua
 * (aproximação desenhada a partir da referência enviada, não é o vetor
 * original — trocar por um path exato assim que houver um .ai/.svg fonte).
 */

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/** Arco aberto de p0 a p1, com uma "barriga" perpendicular à linha reta entre os pontos. */
function archPath(p0: [number, number], p1: [number, number], bulge: number, n = 32) {
  const [x0, y0] = p0;
  const [x1, y1] = p1;
  const dx = x1 - x0;
  const dy = y1 - y0;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;

  const points: string[] = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const off = Math.sin(Math.PI * t) * bulge;
    const x = lerp(x0, x1, t) + nx * off;
    const y = lerp(y0, y1, t) + ny * off;
    points.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return points.join(" ");
}

/** Curva em forma de "asa/folha" fechada: vai de p0 a p1 curvando de um lado, e volta curvando do outro. */
function lensPath(p0: [number, number], p1: [number, number], amp1: number, amp2: number, n = 26) {
  const [x0, y0] = p0;
  const [x1, y1] = p1;
  const dx = x1 - x0;
  const dy = y1 - y0;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;

  const points: [number, number][] = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const off = Math.sin(Math.PI * t) * amp1;
    points.push([lerp(x0, x1, t) + nx * off, lerp(y0, y1, t) + ny * off]);
  }
  for (let i = 1; i <= n; i++) {
    const t = i / n;
    const off = Math.sin(Math.PI * t) * amp2;
    points.push([lerp(x1, x0, t) + nx * off, lerp(y1, y0, t) + ny * off]);
  }
  return points.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(" ");
}

/** Espiral (cabeça), terminando num pequeno segmento reto até o pescoço. */
function spiralPath(cx: number, cy: number, turns: number, r0: number, r1: number, tailTo: [number, number], n = 64) {
  const points: string[] = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const angle = Math.PI * 0.15 + t * turns * Math.PI * 2;
    const r = lerp(r0, r1, t);
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    points.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`);
  }
  points.push(`L${tailTo[0]},${tailTo[1]}`);
  return points.join(" ");
}

// viewBox 0 0 260 220 — a logo original é mais larga do que alta.
const HEAD_D = spiralPath(140, 34, 1.45, 17, 3, [150, 58]);
const ARMS_D = [
  archPath([150, 58], [55, 108], 44),
  archPath([204, 106], [40, 82], -42),
].join(" ");
const LEGS_D = [
  "M140,96 L140,142",
  lensPath([124, 142], [208, 216], 26, -14),
  lensPath([156, 142], [68, 216], -26, 14),
].join(" ");

function DrawPath({
  d,
  delay = 0,
  duration = 900,
  animate = true,
  ...rest
}: {
  d: string;
  delay?: number;
  duration?: number;
  animate?: boolean;
} & React.SVGProps<SVGPathElement>) {
  const ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!animate) {
      el.style.strokeDasharray = "none";
      el.style.strokeDashoffset = "0";
      return;
    }
    const length = el.getTotalLength();
    el.style.transition = "none";
    el.style.strokeDasharray = `${length}`;
    el.style.strokeDashoffset = `${length}`;
    el.getBoundingClientRect();
    const timeout = window.setTimeout(() => {
      el.style.transition = `stroke-dashoffset ${duration}ms cubic-bezier(0.65, 0, 0.35, 1)`;
      el.style.strokeDashoffset = "0";
    }, delay);
    return () => window.clearTimeout(timeout);
  }, [d, delay, duration, animate]);

  return <path ref={ref} d={d} {...rest} />;
}

export default function LogoMark({
  className = "",
  animate = true,
}: {
  className?: string;
  animate?: boolean;
}) {
  const gradId = useId();

  return (
    <svg viewBox="0 0 260 220" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradId} gradientUnits="userSpaceOnUse" x1="140" y1="10" x2="140" y2="215">
          <stop offset="0%" stopColor="#9c77aa" />
          <stop offset="35%" stopColor="#5e61a5" />
          <stop offset="60%" stopColor="#336d98" />
          <stop offset="100%" stopColor="#35a43f" />
        </linearGradient>
      </defs>
      <DrawPath
        d={HEAD_D}
        stroke={`url(#${gradId})`}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={animate}
        delay={0}
        duration={600}
      />
      <DrawPath
        d={ARMS_D}
        stroke={`url(#${gradId})`}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={animate}
        delay={450}
        duration={1000}
      />
      <DrawPath
        d={LEGS_D}
        stroke={`url(#${gradId})`}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={animate}
        delay={1300}
        duration={950}
      />
    </svg>
  );
}
