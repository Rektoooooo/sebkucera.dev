'use client';

import Link from 'next/link';

export default function Support() {
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
            Support
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '48px' }}>
            We&apos;re here to help you get the most out of Habit Owl.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <Section title="Frequently Asked Questions">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <FAQ
                  question="How do I create a new habit?"
                  answer="Tap the + button on the home screen to add a new habit. You can choose from standard habits or health-synced habits that connect to Apple Health."
                />
                <FAQ
                  question="How do streaks work?"
                  answer="Streaks track consecutive days you complete a habit. Complete your habit every day to keep your streak going! If you miss a day, your streak resets to zero."
                />
                <FAQ
                  question="How do I sync with Apple Health?"
                  answer="When creating a new habit, select one of the Health Tracking options (Sleep, Water Intake, Calories, etc.). You'll be prompted to grant Apple Health permissions. Once connected, your habits will auto-sync with your health data."
                />
                <FAQ
                  question="How do I set up widgets?"
                  answer="Long press on your iPhone home screen, tap the + button in the top left, search for 'Habit Owl', and choose your preferred widget size. You can also add lock screen widgets in your lock screen settings."
                />
                <FAQ
                  question="How do I use Habit Owl on Apple Watch?"
                  answer="Install the Habit Owl app on your Apple Watch through the Watch app on your iPhone. Your habits will automatically sync, and you can complete them directly from your wrist."
                />
                <FAQ
                  question="Can I restore my purchase on a new device?"
                  answer="Yes! Go to Settings > Manage Subscription > Restore Purchases. Your premium subscription or lifetime purchase will be restored automatically."
                />
              </div>
            </Section>

            <Section title="Contact Us">
              <p>
                Can&apos;t find what you&apos;re looking for? We&apos;d love to hear from you! Send us an email and we&apos;ll
                get back to you as soon as possible.
              </p>
              <a
                href="mailto:sebastian.kucera@icloud.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginTop: '16px',
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                sebastian.kucera@icloud.com
              </a>
            </Section>

            <Section title="Report a Bug">
              <p>
                Found something that isn&apos;t working quite right? Please let us know so we can fix it.
                Include as much detail as possible:
              </p>
              <ul>
                <li>What you were trying to do</li>
                <li>What happened instead</li>
                <li>Your iPhone model and iOS version</li>
                <li>Screenshots if possible</li>
              </ul>
            </Section>

            <Section title="Feature Requests">
              <p>
                Have an idea that would make Habit Owl even better? We&apos;re always looking for ways to improve.
                Send us your suggestions and we&apos;ll consider them for future updates!
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

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div
      style={{
        padding: '20px 24px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
      }}
    >
      <h3
        style={{
          fontSize: '16px',
          fontWeight: 600,
          color: 'var(--white)',
          marginBottom: '8px',
        }}
      >
        {question}
      </h3>
      <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
        {answer}
      </p>
    </div>
  );
}
