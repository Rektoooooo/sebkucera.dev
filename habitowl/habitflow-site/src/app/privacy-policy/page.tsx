'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      <div className="aurora-bg" />
      <main style={{ position: 'relative', zIndex: 10, padding: '120px 24px 80px', minHeight: '100vh' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--purple)',
              textDecoration: 'none',
              fontSize: '14px',
              marginBottom: '40px',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Home
          </Link>

          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: 'var(--white)',
              marginBottom: '16px',
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '48px' }}>
            Last updated: January 2025
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <Section title="Introduction">
              <p>
                Welcome to Habit Owl. We respect your privacy and are committed to protecting your personal data.
                This privacy policy explains how we collect, use, and safeguard your information when you use our
                iOS application.
              </p>
            </Section>

            <Section title="Information We Collect">
              <p>Habit Owl collects the following types of information:</p>
              <ul>
                <li><strong>Habit Data:</strong> The habits you create, track, and complete within the app</li>
                <li><strong>Health Data:</strong> If you grant permission, we sync with Apple Health to track metrics like water intake, steps, sleep, and calories</li>
                <li><strong>Usage Data:</strong> Anonymous analytics about how you use the app to improve our services</li>
                <li><strong>Device Information:</strong> Basic device information for app functionality and crash reporting</li>
              </ul>
            </Section>

            <Section title="How We Use Your Information">
              <p>We use your information to:</p>
              <ul>
                <li>Provide and maintain the Habit Owl service</li>
                <li>Sync your habits across your devices via iCloud</li>
                <li>Display widgets on your home screen and lock screen</li>
                <li>Send reminders and notifications (with your permission)</li>
                <li>Improve and optimize the app experience</li>
              </ul>
            </Section>

            <Section title="Data Storage">
              <p>
                Your habit data is stored locally on your device and synced via Apple&apos;s iCloud service if enabled.
                We do not store your personal data on our servers. Health data accessed through Apple Health
                remains on your device and is never transmitted to external servers.
              </p>
            </Section>

            <Section title="Data Sharing">
              <p>
                We do not sell, trade, or share your personal information with third parties. Your data stays
                on your device and within Apple&apos;s secure iCloud infrastructure.
              </p>
            </Section>

            <Section title="Your Rights">
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal data stored in the app</li>
                <li>Delete your data by removing the app from your device</li>
                <li>Revoke Apple Health permissions at any time through iOS Settings</li>
                <li>Disable notifications and reminders</li>
              </ul>
            </Section>

            <Section title="Children&apos;s Privacy">
              <p>
                Habit Owl is not intended for children under 13. We do not knowingly collect personal information
                from children under 13 years of age.
              </p>
            </Section>

            <Section title="Changes to This Policy">
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by
                posting the new policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </Section>

            <Section title="Contact Us">
              <p>
                If you have any questions about this Privacy Policy, please contact us at:{' '}
                <a href="mailto:sebastian.kucera@icloud.com" style={{ color: 'var(--purple)' }}>
                  sebastian.kucera@icloud.com
                </a>
              </p>
            </Section>
          </div>
        </div>
      </main>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2
        style={{
          fontSize: '24px',
          fontWeight: 600,
          color: 'var(--white)',
          marginBottom: '16px',
        }}
      >
        {title}
      </h2>
      <div
        style={{
          color: 'var(--text-secondary)',
          lineHeight: 1.8,
          fontSize: '16px',
        }}
      >
        {children}
        <style jsx>{`
          div :global(ul) {
            margin: 16px 0;
            padding-left: 24px;
          }
          div :global(li) {
            margin-bottom: 8px;
          }
          div :global(p) {
            margin-bottom: 12px;
          }
        `}</style>
      </div>
    </div>
  );
}
