'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    title: 'Smart Streaks',
    desc: 'Watch your flame grow with satisfying animations. Streak shields protect your progress.',
    icon: '🔥',
  },
  {
    title: 'Apple Health',
    desc: 'Auto-sync sleep, water, steps, and calories seamlessly.',
    icon: '❤️',
  },
  {
    title: 'Focus Timer',
    desc: 'Deep work sessions with Pomodoro technique built-in.',
    icon: '🎯',
  },
  {
    title: 'Habit Chains',
    desc: 'Link habits together for powerful morning and evening routines.',
    icon: '🔗',
  },
  {
    title: 'Widgets',
    desc: 'Beautiful lock screen and home screen widgets.',
    icon: '📱',
  },
  {
    title: 'Apple Watch',
    desc: 'Quick habit tracking right from your wrist.',
    icon: '⌚',
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" style={{ padding: '120px 24px', position: 'relative' }}>
      <div ref={ref} style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
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
            Everything you need
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '450px', margin: '0 auto' }}>
            Thoughtfully designed tools to build lasting habits.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px 32px',
          }}
          className="features-grid"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  margin: '0 auto 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  background: 'rgba(168, 85, 247, 0.1)',
                  borderRadius: '16px',
                  border: '1px solid rgba(168, 85, 247, 0.2)',
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--white)',
                  marginBottom: '8px',
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}
              >
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
