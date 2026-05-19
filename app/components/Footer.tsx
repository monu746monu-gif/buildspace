import React from "react";

const styles: Record<string, React.CSSProperties> = {
  footer: {
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(160deg, #e8f5f4 0%, #d4edea 40%, #c9e8e4 100%)",
    paddingTop: 80,
    fontFamily: "'DM Sans', sans-serif",
  },
  dotGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "radial-gradient(circle, rgba(15,148,136,0.13) 1px, transparent 1px)",
    backgroundSize: "28px 28px",
    pointerEvents: "none",
  },
  inner: {
    position: "relative",
    zIndex: 2,
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 48px",
  },
  columns: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 40,
    paddingBottom: 80,
  },
  colHeading: {
    fontSize: 15,
    fontWeight: 700,
    color: "#0d1f1e",
    marginBottom: 24,
    marginTop: 0,
    letterSpacing: "-0.01em",
  },
  colLink: {
    display: "block",
    fontSize: 15,
    color: "#3d5c59",
    textDecoration: "none",
    marginBottom: 14,
    fontWeight: 400,
    letterSpacing: "-0.01em",
  },
  communityItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 14,
    fontSize: 15,
    color: "#3d5c59",
    textDecoration: "none",
    fontWeight: 400,
    letterSpacing: "-0.01em",
  },
  iconCircle: {
    width: 28,
    height: 28,
    borderRadius: 999,
    background: "rgba(15,148,136,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  watermarkWrapper: {
    position: "relative",
    overflow: "hidden",
    height: 140,
  },
  watermark: {
    position: "absolute",
    bottom: 0,
    left: 48,               // aligned with inner content padding
    fontSize: "clamp(80px, 13vw, 148px)",
    fontWeight: 800,
    color: "rgba(15,148,136,0.10)",
    whiteSpace: "nowrap",
    lineHeight: 1,
    letterSpacing: "-0.04em",
    fontFamily: "'DM Sans', sans-serif",
    userSelect: "none",
    pointerEvents: "none",
  },
  floatingCtas: {
    position: "fixed",
    bottom: 24,
    right: 24,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    zIndex: 100,
  },
  ctaCard: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: 999,
    padding: "10px 20px",
    fontSize: 14,
    fontWeight: 600,
    color: "#0f9488",
    cursor: "pointer",
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
    fontFamily: "'DM Sans', sans-serif",
    letterSpacing: "-0.01em",
    whiteSpace: "nowrap",
    transition: "box-shadow 0.2s, transform 0.15s",
  },
};

const DiscordIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="#0f9488">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
  </svg>
);

const MailIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#0f9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f9488" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f9488" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export default function Footer() {
  return (
    <>
      <footer style={styles.footer}>
        <div style={styles.dotGrid} />

        <div style={styles.inner}>
          <div style={styles.columns}>
            {/* Quick Links */}
            <div>
              <p style={styles.colHeading}>Quick Links</p>
              <a href="#" style={styles.colLink}>Home</a>
              <a href="#" style={styles.colLink}>Pricing</a>
            </div>

            {/* Community */}
            <div>
              <p style={styles.colHeading}>Community</p>
              <a href="#" style={styles.communityItem as React.CSSProperties}>
                <span style={styles.iconCircle}><DiscordIcon /></span>
                Discord
              </a>
              <a href="mailto:hi@buildbuddy.app" style={styles.communityItem as React.CSSProperties}>
                <span style={styles.iconCircle}><MailIcon /></span>
                hi@buildbuddy.app
              </a>
            </div>

            {/* Legal */}
            <div>
              <p style={styles.colHeading}>Legal</p>
              <a href="#" style={styles.colLink}>Privacy Policy</a>
              <a href="#" style={styles.colLink}>Terms Of Service</a>
            </div>
          </div>
        </div>

        {/* Watermark — left edge aligned with content */}
        <div style={styles.watermarkWrapper}>
          <div style={styles.watermark}>BuildBuddy</div>
        </div>

        {/* Teal bottom bar */}
        <div style={{ height: 6, background: "#0f9488" }} />
      </footer>

      {/* Floating CTAs */}
      <div style={styles.floatingCtas}>
        {[
          { icon: <ShieldIcon />, label: "Recover License" },
          { icon: <LockIcon />, label: "Purchase a License" },
        ].map(({ icon, label }) => (
          <button
            key={label}
            style={styles.ctaCard}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 8px 24px rgba(15,148,136,0.18)";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 4px 16px rgba(0,0,0,0.08)";
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
            }}
          >
            {icon}
            {label}
          </button>
        ))}
      </div>
    </>
  );
}
