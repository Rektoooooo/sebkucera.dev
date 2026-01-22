'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      style={{
        padding: '80px 24px 40px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="footer-top">
          {/* Brand */}
          <div style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div
                style={{
                  position: 'relative',
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
                }}
              >
                <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/HabitFlow_AppIcon.jpg`} alt="Habit Owl" fill style={{ objectFit: 'cover' }} />
              </div>
              <span style={{ fontSize: '22px', fontWeight: 600, color: 'var(--white)', letterSpacing: '-0.02em' }}>
                Habit Owl
              </span>
            </div>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
              Build better habits, one day at a time. Track, grow, and achieve your goals with your owl companion by your side.
            </p>
            {/* Social links */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {['twitter', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {social === 'twitter' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  )}
                  {social === 'instagram' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <div>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--white)',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Product
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { label: 'Features', href: '#features' },
                  { label: 'Widgets', href: '#widgets' },
                  { label: 'Pricing', href: '#pricing' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      fontSize: '15px',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--white)',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Legal
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { label: 'Privacy Policy', href: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/privacy-policy` },
                  { label: 'Terms of Service', href: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/tos` },
                  { label: 'Support', href: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/support` },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      fontSize: '15px',
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom" style={{ marginTop: '60px' }}>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Habit Owl. Made with 💜 by Sebastian Kucera
          </p>
          <a
            href="mailto:sebastian.kucera@icloud.com"
            style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--purple)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            sebastian.kucera@icloud.com
          </a>
        </div>
      </div>
    </footer>
  );
}
