export function NeedleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <line x1="4" y1="20" x2="18" y2="6" />
      <circle cx="19.5" cy="4.5" r="1.6" />
      <line x1="9" y1="15" x2="6" y2="18" />
    </svg>
  );
}

export function CuppingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M6 4h12l-1.4 12.2A3 3 0 0 1 13.63 19h-3.26a3 3 0 0 1-2.97-2.8L6 4Z" />
      <path d="M4 4h16" strokeLinecap="round" />
      <path d="M9 4V2.5M15 4V2.5" strokeLinecap="round" />
    </svg>
  );
}
