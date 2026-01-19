'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left - Content */}
        <div>
          {/* Dotti + Badge row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}
          >
            <div
              className="animate-float"
              style={{
                position: 'relative',
                width: '56px',
                height: '56px',
              }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/HabitFlowPremium.png`}
                alt="Dotti"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                background: 'rgba(168, 85, 247, 0.1)',
                border: '1px solid rgba(168, 85, 247, 0.25)',
                borderRadius: '100px',
                fontSize: '13px',
                color: 'var(--purple-bright)',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--purple)', boxShadow: '0 0 10px var(--purple)' }} />
              Now on iOS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '20px',
            }}
          >
            <span style={{ color: 'var(--white)' }}>Build habits that</span>
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, var(--purple) 0%, var(--pink) 50%, var(--cyan) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              actually stick
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: '18px',
              color: 'var(--text-secondary)',
              marginBottom: '32px',
              maxWidth: '440px',
              lineHeight: 1.6,
            }}
          >
            Track daily habits, sync with Apple Health, and watch your streaks grow. Meet Dotti, your adorable habit companion.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', gap: '12px', marginBottom: '48px', flexWrap: 'wrap' }}
          >
            <a
              href="#download"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 24px',
                background: 'linear-gradient(135deg, var(--purple) 0%, var(--violet) 100%)',
                color: 'white',
                fontWeight: 600,
                fontSize: '15px',
                borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.35)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </a>
            <a
              href="#features"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 24px',
                background: 'rgba(255,255,255,0.04)',
                color: 'var(--white)',
                fontWeight: 500,
                fontSize: '15px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.1)',
                textDecoration: 'none',
              }}
            >
              Learn more
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: 'flex', gap: '40px' }}
          >
            {[
              { value: '10K+', label: 'Users' },
              { value: '1M+', label: 'Habits' },
              { value: '4.9', label: 'Rating' },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--white)', letterSpacing: '-0.02em' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - Phone Mockups */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              height: '500px',
              background: 'radial-gradient(ellipse, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.08) 50%, transparent 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
            }}
          />

          {/* Phone stack */}
          <div style={{ position: 'relative', width: '320px', height: '520px' }}>
            {/* Back phone - left */}
            <div
              style={{
                position: 'absolute',
                left: '-60px',
                top: '40px',
                width: '200px',
                height: '410px',
                opacity: 0.6,
                transform: 'rotate(-8deg)',
              }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/mockup-timer.png`}
                alt="Focus Timer"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* Back phone - right */}
            <div
              style={{
                position: 'absolute',
                right: '-60px',
                top: '40px',
                width: '200px',
                height: '410px',
                opacity: 0.6,
                transform: 'rotate(8deg)',
              }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/mockup-habits.png`}
                alt="Habit Types"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* Main phone - center */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '0',
                transform: 'translateX(-50%)',
                width: '240px',
                height: '490px',
                zIndex: 2,
              }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/mockup-home.png`}
                alt="HabitFlow Home"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
