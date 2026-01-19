'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: '24px',
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 24px',
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          padding: '10px 10px 10px 20px',
          background: 'rgba(18, 18, 22, 0.9)',
          backdropFilter: 'blur(20px)',
          borderRadius: '100px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <Image src="/images/HabitFlow_AppIcon.jpg" alt="HabitFlow" fill style={{ objectFit: 'cover' }} />
          </div>
          <span
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: 'var(--white)',
            }}
          >
            HabitFlow
          </span>
        </a>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="nav-links">
          {['Features', 'Widgets', 'Reviews', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--white)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)'}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#download"
          style={{
            padding: '10px 22px',
            background: 'var(--purple)',
            color: 'white',
            fontWeight: 500,
            fontSize: '14px',
            borderRadius: '100px',
            textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          Download
        </a>
      </nav>
    </motion.header>
  );
}
