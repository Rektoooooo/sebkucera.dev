'use client';

import Link from 'next/link';

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '48px' }}>
            Last updated: January 2025
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <Section title="Agreement to Terms">
              <p>
                By downloading, installing, or using Habit Owl, you agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use the app.
              </p>
            </Section>

            <Section title="Description of Service">
              <p>
                Habit Owl is a habit tracking application for iOS devices that helps users build and maintain
                positive habits. The app includes features such as habit tracking, streak counting, Apple Health
                integration, widgets, Apple Watch support, and focus timers.
              </p>
            </Section>

            <Section title="User Accounts and Subscriptions">
              <p>
                Habit Owl offers both free and premium subscription tiers. Premium features are available through
                in-app purchases:
              </p>
              <ul>
                <li><strong>Free:</strong> Basic habit tracking with limited features</li>
                <li><strong>Monthly Subscription:</strong> Full access to all premium features</li>
                <li><strong>Yearly Subscription:</strong> Full access with annual billing discount</li>
                <li><strong>Lifetime Purchase:</strong> One-time payment for permanent access</li>
              </ul>
              <p>
                Subscriptions are managed through Apple&apos;s App Store. You can cancel your subscription at any
                time through your Apple ID settings.
              </p>
            </Section>

            <Section title="Acceptable Use">
              <p>You agree to use Habit Owl only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul>
                <li>Use the app in any way that violates applicable laws or regulations</li>
                <li>Attempt to reverse engineer, decompile, or disassemble the app</li>
                <li>Interfere with or disrupt the app&apos;s functionality</li>
                <li>Share your subscription access with others</li>
              </ul>
            </Section>

            <Section title="Intellectual Property">
              <p>
                Habit Owl and its original content, features, and functionality are owned by Sebastian Kucera
                and are protected by international copyright, trademark, and other intellectual property laws.
                The Habit Owl name, logo, and owl mascot are trademarks of Sebastian Kucera.
              </p>
            </Section>

            <Section title="Health Data Disclaimer">
              <p>
                Habit Owl integrates with Apple Health to help you track health-related habits. However,
                Habit Owl is not a medical device and should not be used as a substitute for professional
                medical advice, diagnosis, or treatment. Always consult with a healthcare provider regarding
                any health concerns.
              </p>
            </Section>

            <Section title="Limitation of Liability">
              <p>
                To the maximum extent permitted by law, Habit Owl and its developer shall not be liable for
                any indirect, incidental, special, consequential, or punitive damages resulting from your
                use of the app, including but not limited to loss of data, profits, or goodwill.
              </p>
            </Section>

            <Section title="Disclaimer of Warranties">
              <p>
                Habit Owl is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either
                express or implied. We do not guarantee that the app will be uninterrupted, secure, or
                error-free.
              </p>
            </Section>

            <Section title="Changes to Terms">
              <p>
                We reserve the right to modify these Terms of Service at any time. We will notify users of
                any material changes by updating the &quot;Last updated&quot; date. Your continued use of Habit Owl
                after changes constitutes acceptance of the new terms.
              </p>
            </Section>

            <Section title="Termination">
              <p>
                We may terminate or suspend your access to Habit Owl immediately, without prior notice, for
                any reason, including breach of these Terms. Upon termination, your right to use the app
                will immediately cease.
              </p>
            </Section>

            <Section title="Governing Law">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the Czech Republic,
                without regard to its conflict of law provisions.
              </p>
            </Section>

            <Section title="Contact Us">
              <p>
                If you have any questions about these Terms of Service, please contact us at:{' '}
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
