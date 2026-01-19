'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Widgets() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="widgets" style={{ padding: '120px 24px', position: 'relative' }}>
      <div ref={ref} style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                marginBottom: '16px',
                color: 'var(--white)',
              }}
            >
              Beautiful widgets
            </h2>
            <p
              style={{
                fontSize: '18px',
                color: 'var(--text-secondary)',
                marginBottom: '32px',
                lineHeight: 1.6,
              }}
            >
              Track your habits right from your home screen. Multiple sizes available to fit your style.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { title: 'Home Screen', desc: 'Small, medium, and large widgets' },
                { title: 'Lock Screen', desc: 'Quick glance at your progress' },
                { title: 'Live Updates', desc: 'Always in sync with your habits' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'rgba(168, 85, 247, 0.1)',
                      border: '1px solid rgba(168, 85, 247, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--white)' }}>{item.title}</div>
                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Widget Images */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              alignItems: 'center',
            }}
          >
            {/* Large widget */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '340px',
                aspectRatio: '2.2/1',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  mask: 'radial-gradient(ellipse 85% 85% at center, black 60%, transparent 100%)',
                  WebkitMask: 'radial-gradient(ellipse 85% 85% at center, black 60%, transparent 100%)',
                }}
              >
                <Image
                  src="/images/widget-large.png"
                  alt="Large Widget"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Row with small and medium */}
            <div style={{ display: 'flex', gap: '16px', width: '100%', maxWidth: '340px' }}>
              {/* Small widgets - lock screen */}
              <div
                style={{
                  position: 'relative',
                  width: '160px',
                  height: '160px',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.4)',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    mask: 'radial-gradient(ellipse 90% 90% at center, black 50%, transparent 100%)',
                    WebkitMask: 'radial-gradient(ellipse 90% 90% at center, black 50%, transparent 100%)',
                  }}
                >
                  <Image
                    src="/images/widget-small.png"
                    alt="Lock Screen Widgets"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>

              {/* Medium widget */}
              <div
                style={{
                  position: 'relative',
                  flex: 1,
                  aspectRatio: '1/1',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.4)',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    mask: 'radial-gradient(ellipse 85% 85% at center, black 60%, transparent 100%)',
                    WebkitMask: 'radial-gradient(ellipse 85% 85% at center, black 60%, transparent 100%)',
                  }}
                >
                  <Image
                    src="/images/widget-medium.png"
                    alt="Medium Widget"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
