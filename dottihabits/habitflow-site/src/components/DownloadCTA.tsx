'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function DownloadCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="download"
      style={{
        padding: '120px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, transparent 0%, rgba(168, 85, 247, 0.05) 50%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Glowing orb */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(236, 72, 153, 0.05) 40%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div ref={ref} style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Dotti */}
          <motion.div
            className="animate-float"
            style={{
              width: '140px',
              height: '140px',
              margin: '0 auto 40px',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '-30px',
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)',
                filter: 'blur(30px)',
                borderRadius: '50%',
              }}
            />
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/HabitFlowPremium.png`} alt="Dotti" fill style={{ objectFit: 'contain' }} />
          </motion.div>

          <h2
            style={{
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              marginBottom: '24px',
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: 'var(--white)' }}>Ready to build </span>
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, var(--purple) 0%, var(--pink) 50%, var(--cyan) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              better habits?
            </span>
          </h2>

          <p
            style={{
              fontSize: '20px',
              color: 'var(--text-secondary)',
              marginBottom: '48px',
              maxWidth: '480px',
              margin: '0 auto 48px',
              lineHeight: 1.6,
            }}
          >
            Download HabitFlow today and meet Dotti. She's excited to help you become your best self.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            <a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '20px 40px',
                background: 'linear-gradient(135deg, var(--purple) 0%, var(--violet) 100%)',
                color: 'white',
                fontWeight: 600,
                fontSize: '18px',
                borderRadius: '16px',
                textDecoration: 'none',
                boxShadow: '0 0 50px rgba(168, 85, 247, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
                transition: 'all 0.3s ease',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </a>

            <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              {[
                { icon: '✓', text: 'Free to start' },
                { icon: '✓', text: 'No credit card required' },
                { icon: '✓', text: 'iOS 16+' },
              ].map((item) => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'rgba(74, 222, 128, 0.2)',
                      border: '1px solid rgba(74, 222, 128, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      color: '#4ade80',
                    }}
                  >
                    ✓
                  </div>
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
