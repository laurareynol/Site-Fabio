import { useEffect, useId, useRef } from "react";

/**
 * Traçado real e exato da logo do Fabio Camolesi (vetor fornecido por ele).
 * É uma forma preenchida (o contorno da "fita" do traço, com a espessura já
 * embutida no path), não uma linha central com stroke; por isso a animação
 * de "desenhar" é feita revelando o preenchimento através de uma máscara que
 * segue o mesmo trajeto do desenho original, em vez do stroke-dashoffset puro.
 *
 * O path é composto por 8 sub-traçados independentes (cada trecho de caneta
 * vira seu próprio contorno fechado ao converter stroke em fill). Como
 * stroke-dasharray/dashoffset reinicia a cada sub-traçado, cada um é
 * animado separadamente e em sequência, na ordem em que aparecem no path.
 */
const LOGO_D =
  "M335.08,139.32c-.12,1.11-.04,1.98.5,2.99,1.39,2.62,9.4,11.17,11.99,14.01,3.64,4,27.12,28.16,29.77,29.23,4.95,2.01,18.61-.49,25.28-.29,11.2.34,25.63,2.52,36.46,5.54,21.62,6.04,41.32,19.5,60.69,30.34,14-12.32,27.5-25.29,43.39-35.26,11.57-7.26,23.45-13.13,36.89-16.11,3.18-.71,18.27-3.95,19.9-1.34.61.99.31,4.64-.8,5.43-1.44,1.03-6.97.23-9.44.55-26.09,3.47-52.7,20.71-71.63,38.37-2.17,2.02-11.63,10.56-10.92,12.88,42.96,28.62,84.34,59.82,122.95,94.12,16.91,15.02,47.95,42.34,58.81,61.19,8.53,14.79,5.22,24.38-12.81,17.81-19.78-7.21-46.65-23.7-65.69-34.31-49.72-27.71-97.83-58.16-144.84-90.19-1.6-.02-2.04,1.15-2.92,2.09-8.75,9.3-22.2,31.97-29.39,43.6-7.83,12.67-14.8,25.95-22.16,38.9l.22,3.68c60.53,127.49,105.41,265.64,136.48,403.54,7.25,32.18,20.88,89.02,19.17,120.57-.66,12.29-8.45,23.7-19.87,12.13-8.85-8.98-19.05-32.16-24.87-44.13-49.15-101.16-88.94-210.53-133.96-314.04-9.08-20.88-18.68-46.01-29.3-65.7-.93-1.72-1.75-3.42-3.39-4.62-1.74-.38-1.92,1.4-2.54,2.44-10.95,18.36-21.44,44.3-30.8,64.2-56.1,119.23-103.52,242.11-150.97,365.03-3.75,9.61-14.54,7.49-18.68-.67-6.89-13.58-2.7-41.48-1.5-56.52,6.22-78.12,23.51-160.03,43.09-235.91,15.84-61.39,37.22-135.02,65.54-191.46,7.52-14.97,22.6-47.62,43.2-42.43,18.77,4.73,39.27,44.85,49.68,60.29,14.87-22.45,26.63-46.99,41.51-69.54-23.22-50.21-49.33-101.37-88.49-141.16-21.05,12.04-40.74,26.41-61,39.74-42.91,28.24-84.87,58.14-128,86-26.52,17.13-72.18,47.36-103.13,50.87-27.99,3.17-4.89-26.2,2.64-35.36,38.48-46.84,108.87-107.12,158.66-142.34,39.17-27.72,73.1-52.78,119.84-23.21,2.9,1.83,9.46,8.18,11.88,8.04,17.02-8.37,34.7-15.94,53.59-19.02.41-1.52-.4-1.66-.98-2.51-4.94-7.13-17.97-18.08-24.53-25.47-3.56-4.01-14.64-19.88-17.57-21.43-1.45-.77-3.86-1.22-5.53-1.47-18.74-2.77-32.95-3.84-51.59-9.41-6.46-1.93-53.83-19.27-54.82-22.2-.32-.97-.46-3.12,1.4-2.39,19.8,8.67,40.44,15.75,61.59,20.43,6.03,1.33,38.87,7.74,42.05,5.98,1.82-1.01.15-1.63-.42-2.6-5.41-9.29-11.57-18.49-15.36-28.65C276.21,51.01,302.32-4.79,359.56.33c41.77,3.74,59.1,50.55,50.02,86.99-7.71,30.94-44.48,50.85-74.51,52Z" +
  "M326.37,131c2.19,1.78,10.84.61,13.98.08,46.99-7.96,77-43.97,58.4-91.94-16.14-41.64-78.27-43-94.45-.1-8.9,23.6-3.98,46.73,7.25,68.3,2.19,4.19,12.05,21.42,14.81,23.67Z" +
  "M391.72,195.45c-.8.22-1.63.75-1.15,1.87,1.07,2.48,17.62,16.15,21.04,18.97,17.78,14.69,37.11,27.62,55.42,41.64l27.03-30.11c-16.67-9.9-34.56-21.08-53.22-26.76-7.67-2.34-19.4-5.1-27.28-5.72-4.07-.32-18.67-.74-21.85.12Z" +
  "M7.08,394.31c5.01,5.02,51.72-21.12,58.91-25.58,44.92-27.84,87.07-63.18,131.17-92.83,31.66-21.28,64.71-40.61,96.89-61.09-20.99-17.78-40.35-23.67-66.48-12.5-59.66,25.52-156.9,111.33-200.02,160.98-3.16,3.63-23.88,27.61-20.49,31.01Z" +
  "M369.77,198.58c-3,.04-13.37,2.98-16.9,4.02-5.62,1.65-11.35,3.97-16.75,6.25-2.61,1.1-16.05,6.93-17.03,7.96s-1.28,1.36-.88,2.82c29.43,30.24,52.6,66.23,73.06,103.01,3.76,6.75,6.96,15.8,10.98,22.02.65,1.01,1.94,2.99,3.32,2.65l52.03-75.01.4-3.32c-28.88-22.34-58.48-43.89-84.96-69.12-.98-.81-1.94-1.28-3.24-1.27Z" +
  "M685.08,392.31c2.03-1.97-13.29-20.5-15.48-23.01-35.87-41.12-92.18-85.55-137.2-116.8-5.94-4.12-24.12-17.72-29.36-19.65-2-.74-3.8-1.08-5.53.4-7.83,9.75-16.92,18.81-23.38,29.46,52.6,37.83,107.59,75.11,164.28,106.78,10.97,6.13,30.97,18.34,41.95,22.05,1.6.54,2.96,1.08,4.71.78Z" +
  "M553.08,880.31c-6.15-53.33-19.38-106.42-33.28-158.21-28.45-106.02-65.1-218.68-108.72-319.28-2.62-6.04-5.73-14.8-8.79-20.21-.57-1.01-1.19-2.65-2.69-2.29-8.64,16.37-17.66,32.65-25.68,49.33-2.49,5.18-9.19,17.22-10.4,21.66-.3,1.1-.68,2.1-.27,3.25,60.52,112.04,102.89,232.48,152.66,349.43,9.02,21.19,21.72,55.89,33.98,74.02.87,1.28,1.14,2.73,3.19,2.3ZM166.07,876.31c54.52-143.62,109.42-287.62,178.8-424.73.67-1.93.19-3.37-.36-5.19-2.42-7.97-18.48-33.46-24-41-4.99-6.82-17.24-23.53-26.7-18.83-8.39,4.16-20.82,29.13-24.9,38.09-17.33,37.98-29.61,82.09-40.54,122.46-23.02,85.1-45.6,179.68-58.15,266.85-2.51,17.39-6.33,41.77-6.18,58.91.01,1.53.31,3.08,2.03,3.46Z";

// Ordem "natural" do traço, do topo (cabeça) para baixo (pernas), pra sequência ficar coerente.
const SUBPATH_ORDER = [0, 1, 2, 3, 4, 5, 6, 7];

function splitSubpaths(d: string) {
  return d.split(/(?=M)/).filter(Boolean);
}

const SUBPATHS = SUBPATH_ORDER.map((i) => splitSubpaths(LOGO_D)[i]);

export default function LogoMark({
  className = "",
  animate = true,
  totalDuration = 2600,
  delay = 150,
}: {
  className?: string;
  animate?: boolean;
  totalDuration?: number;
  delay?: number;
}) {
  const gradId = useId();
  const maskId = useId();
  const refs = useRef<(SVGPathElement | null)[]>([]);

  useEffect(() => {
    const els = refs.current;
    if (!animate) {
      els.forEach((el) => {
        if (!el) return;
        el.style.strokeDasharray = "none";
        el.style.strokeDashoffset = "0";
      });
      return;
    }

    const lengths = els.map((el) => el?.getTotalLength() ?? 0);
    const total = lengths.reduce((a, b) => a + b, 0) || 1;

    els.forEach((el, i) => {
      if (!el) return;
      const len = lengths[i];
      el.style.transition = "none";
      el.style.strokeDasharray = `${len}`;
      el.style.strokeDashoffset = `${len}`;
    });
    // força reflow antes de animar
    els[0]?.getBoundingClientRect();

    let cumulative = 0;
    const timeouts: number[] = [];
    els.forEach((el, i) => {
      if (!el) return;
      const len = lengths[i];
      const share = len / total;
      const segDuration = Math.max(share * totalDuration * 1.15, 120);
      const startAt = delay + (cumulative / total) * totalDuration;
      cumulative += len;

      const t = window.setTimeout(() => {
        el.style.transition = `stroke-dashoffset ${segDuration}ms cubic-bezier(0.6, 0, 0.35, 1)`;
        el.style.strokeDashoffset = "0";
      }, startAt);
      timeouts.push(t);
    });

    return () => timeouts.forEach((t) => window.clearTimeout(t));
  }, [animate, totalDuration, delay]);

  return (
    <svg viewBox="0 0 693.38 908.36" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradId} gradientUnits="userSpaceOnUse" x1="346" y1="0" x2="346" y2="908.36">
          <stop offset="0%" stopColor="#9c77aa" />
          <stop offset="35%" stopColor="#5e61a5" />
          <stop offset="60%" stopColor="#336d98" />
          <stop offset="100%" stopColor="#35a43f" />
        </linearGradient>
        <mask id={maskId} maskUnits="userSpaceOnUse">
          {SUBPATHS.map((d, i) => (
            <path
              key={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              d={d}
              fill="none"
              stroke="#fff"
              strokeWidth={34}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </mask>
      </defs>
      <path d={LOGO_D} fill={`url(#${gradId})`} mask={`url(#${maskId})`} />
    </svg>
  );
}
