import type { LucideIcon } from "lucide-react";

const PALETTES = [
  ["#e6ebd9", "#8fa968", "#405831"],
  ["#f1ead9", "#c99b6f", "#8a5a35"],
  ["#dfe8d4", "#71904e", "#2f4126"],
  ["#f4e9e0", "#b97a53", "#6b4128"],
  ["#e3ecdf", "#9bb37c", "#3c5230"],
];

function hashSeed(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}

function paletteFor(seed: string) {
  const h = hashSeed(seed);
  return PALETTES[h % PALETTES.length];
}

function initialsFrom(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

/** Círculo com iniciais — usado como placeholder de retrato até termos fotos reais. */
export function AvatarPlaceholder({
  name,
  size = 56,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const [light, , dark] = paletteFor(name);
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full font-serif font-medium ${className}`}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(140deg, ${light}, ${dark})`,
        color: "#faf7f0",
        fontSize: size * 0.36,
      }}
      aria-hidden="true"
    >
      {initialsFrom(name)}
    </div>
  );
}

/**
 * Painel decorativo orgânico (gradiente + manchas) usado como placeholder de
 * fotografia real nas seções Hero, Sobre, Método e Trabalhos.
 */
export function ScenePlaceholder({
  seed,
  icon: Icon,
  label,
  className = "",
  rounded = "rounded-[2rem]",
}: {
  seed: string;
  icon?: LucideIcon;
  label?: string;
  className?: string;
  rounded?: string;
}) {
  const [light, mid, dark] = paletteFor(seed);
  const h = hashSeed(seed);
  const blobX = 20 + (h % 60);
  const blobY = 20 + ((h >> 4) % 60);

  return (
    <div
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{ background: `linear-gradient(155deg, ${light} 0%, ${mid} 55%, ${dark} 100%)` }}
    >
      <svg className="absolute inset-0 h-full w-full opacity-40" preserveAspectRatio="xMidYMid slice">
        <circle cx={`${blobX}%`} cy={`${blobY}%`} r="45%" fill={dark} opacity="0.35" />
        <circle cx={`${100 - blobX}%`} cy={`${100 - blobY}%`} r="35%" fill={light} opacity="0.4" />
      </svg>
      <svg
        className="absolute -bottom-6 -left-6 h-40 w-40 opacity-30"
        viewBox="0 0 100 100"
        fill="none"
        stroke={light}
        strokeWidth="1.2"
      >
        <path d="M50 95C50 95 15 80 15 45C15 22 30 8 50 8C48 28 50 55 80 62C70 78 50 95 50 95Z" />
      </svg>
      {(Icon || label) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
          {Icon && (
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm">
              <Icon className="h-7 w-7" color="#faf7f0" strokeWidth={1.5} />
            </div>
          )}
          {label && (
            <span className="px-4 font-serif text-sm italic text-cream/90" style={{ color: "#faf7f0" }}>
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
