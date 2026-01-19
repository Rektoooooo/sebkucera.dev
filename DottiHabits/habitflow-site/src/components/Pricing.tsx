'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '',
    features: ['Up to 3 habits', 'Basic streaks', 'Daily reminders'],
    cta: 'Get Started',
    badge: null,
  },
  {
    name: 'Monthly',
    price: '$3.99',
    period: '/mo',
    features: ['Unlimited habits', 'Apple Health sync', 'Widgets', 'Focus timer', 'Apple Watch'],
    cta: 'Start Free Trial',
    badge: 'Popular',
  },
  {
    name: 'Yearly',
    price: '$24.99',
    period: '/yr',
    features: ['Everything in Monthly', 'Save 48%', 'Priority support'],
    cta: 'Start Free Trial',
    badge: 'Best Value',
  },
  {
    name: 'Lifetime',
    price: '$49.99',
    period: '',
    features: ['Everything forever', 'All future updates', 'One-time payment'],
    cta: 'Buy Once',
    badge: 'Lifetime',
  },
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" style={{ padding: '120px 24px', position: 'relative' }}>
      <div ref={ref} style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
            Simple pricing
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '400px', margin: '0 auto' }}>
            Start free, upgrade when you're ready.
          </p>
        </motion.div>

        {/* Plans */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
          }}
          className="pricing-grid-4"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{
                padding: '28px 24px',
                borderRadius: '20px',
                background: plan.badge === 'Best Value' ? 'rgba(34, 197, 94, 0.08)' :
                           plan.badge === 'Lifetime' ? 'rgba(249, 115, 22, 0.08)' :
                           plan.badge ? 'rgba(168, 85, 247, 0.08)' : 'rgba(255,255,255,0.02)',
                border: plan.badge === 'Best Value' ? '1px solid rgba(34, 197, 94, 0.3)' :
                        plan.badge === 'Lifetime' ? '1px solid rgba(249, 115, 22, 0.3)' :
                        plan.badge ? '1px solid rgba(168, 85, 247, 0.3)' : '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              {plan.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '4px 12px',
                    background: plan.badge === 'Best Value' ? '#22c55e' : plan.badge === 'Lifetime' ? '#f97316' : 'var(--purple)',
                    borderRadius: '100px',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: 'white',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                  {plan.name}
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                  <span style={{ fontSize: '36px', fontWeight: 700, color: 'var(--white)' }}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{plan.period}</span>
                  )}
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1, marginBottom: '20px' }}>
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '10px',
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={plan.badge === 'Best Value' ? '#22c55e' : plan.badge === 'Lifetime' ? '#f97316' : 'var(--purple)'}
                      strokeWidth="2.5"
                    >
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  border: plan.badge ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  background: plan.badge === 'Best Value' ? '#22c55e' :
                             plan.badge === 'Lifetime' ? '#f97316' :
                             plan.badge ? 'var(--purple)' : 'transparent',
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .pricing-grid-4 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .pricing-grid-4 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
