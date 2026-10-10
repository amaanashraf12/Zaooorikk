const ICONS = {
  web: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <rect x="6" y="9" width="36" height="30" rx="2" />
      <path d="M6 16h36" />
      <path d="M11 13h.01M15 13h.01M19 13h.01" />
      <path d="M14 24h9M14 29h14M14 34h6" />
    </svg>
  ),
  voice: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <rect x="19" y="8" width="10" height="20" rx="5" />
      <path d="M12 22a12 12 0 0 0 24 0" />
      <path d="M24 34v6M18 40h12" />
    </svg>
  ),
  branding: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <circle cx="18" cy="18" r="11" />
      <circle cx="30" cy="30" r="11" />
      <path d="M18 18l12 12" />
    </svg>
  ),
  seo: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <circle cx="20" cy="20" r="12" />
      <path d="M29 29l11 11" />
      <path d="M14 20h12M20 14v12" />
    </svg>
  ),
  custom: (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <circle cx="24" cy="24" r="14" />
      <path d="M24 14l4 10-4 10-4-10z" />
      <path d="M14 24l10 4 10-4-10-4z" />
    </svg>
  ),
};

export default function ServiceIcon({ slug, className = "w-7 h-7" }) {
  return <span className={className + " inline-block text-terracotta"}>{ICONS[slug] || ICONS.custom}</span>;
}