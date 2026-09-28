import styles from "./FloatingWhatsApp.module.css";

const message =
  "Hello Lombok Awesome Tour, I would like to ask about your tour packages.";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/19d5C3gBRk/",
    className: styles.facebook,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.6V3.7c-.8-.1-1.7-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2.1H7.2V13H10v8h3.5Z"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/rinjani_awesome?stkn=eDFuNTF2ZmZ0ZWVk",
    className: styles.instagram,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="18.1" cy="5.9" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@rinjani_awesome?_r=1&_t=ZS-9A6GeWVLYMG",
    className: styles.tiktok,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.53.02c1.31-.02 2.61-.01 3.9-.02.08 1.54.64 3.02 1.68 4.16 1.04 1.13 2.51 1.78 4.04 1.97v4.02c-1.43-.05-2.83-.4-4.1-1.04-.55-.27-1.06-.59-1.57-.92-.01 2.92.01 5.85-.02 8.77-.08 1.4-.54 2.8-1.35 3.95-1.3 1.93-3.55 3.19-5.88 3.42-1.41.07-2.81-.32-4.01-1.08-1.98-1.25-3.23-3.55-3.13-5.89-.04-1.4.35-2.82 1.1-4 1.21-1.92 3.37-3.18 5.64-3.22.14 1.48.04 2.97.05 4.45-1.02-.02-2.04.29-2.8.97-.56.5-.98 1.2-1.09 1.95-.12.75.07 1.55.52 2.17.45.62 1.17 1.04 1.94 1.13.76.09 1.57-.15 2.13-.66.64-.58.98-1.45.99-2.31.03-4.46-.03-8.91.03-13.37Z"
        />
      </svg>
    ),
  },
];

export default function FloatingWhatsApp() {
  return (
    <div className={styles.stack}>
      {socialLinks.map(({ name, href, className, icon }) => (
        <a
          key={name}
          className={`${styles.socialButton} ${className}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit Lombok Awesome Tour on ${name}`}
          title={`Visit Lombok Awesome Tour on ${name}`}
        >
          {icon}
        </a>
      ))}
      <a
        className={styles.whatsappButton}
        href={`https://wa.me/6287816231153?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Lombok Awesome Tour on WhatsApp"
        title="Chat with Lombok Awesome Tour on WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.9c0 2.1.55 4.15 1.6 5.96L.12 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.56 0 11.9-5.33 11.9-11.9 0-3.18-1.24-6.17-3.49-8.42ZM12.1 21.78h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.85 9.85 0 0 1-1.52-5.24c0-5.47 4.45-9.92 9.92-9.92a9.84 9.84 0 0 1 7.02 2.91 9.84 9.84 0 0 1 2.9 7.02c0 5.47-4.45 9.87-9.93 9.87Zm5.44-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.1 4.49.71.3 1.27.48 1.7.61.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"
          />
        </svg>
      </a>
    </div>
  );
}
