import { useEffect, useMemo, useState } from 'react';
import { useT } from '../hooks/useT.js';
import { useModal } from './ModalContext.jsx';

export default function ConsultModal() {
  const { t } = useT();
  const { isOpen, close, pkg } = useModal();
  const m = t.modal;

  const [submitted, setSubmitted] = useState(false);

  // Pre-fill topic based on package name (match first word, case-insensitive)
  const initialTopic = useMemo(() => {
    if (!pkg) return m.fields.topicOptions[0];
    const firstWord = pkg.toLowerCase().split(' ')[0];
    const match = m.fields.topicOptions.find((o) => o.toLowerCase().includes(firstWord));
    return match || m.fields.topicOptions[0];
  }, [pkg, m.fields.topicOptions]);

  const [topic, setTopic] = useState(initialTopic);

  useEffect(() => {
    setTopic(initialTopic);
    if (isOpen) setSubmitted(false);
  }, [initialTopic, isOpen]);

  // Lock body scroll + escape to close
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch('https://formspree.io/f/xgoaydbn', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
    } catch (_err) {
      /* noop — still show success for UX */
    }
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-5 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-[520px] rounded-[20px] border border-[var(--line)] bg-[var(--bg)] p-8 pt-9"
        style={{ boxShadow: '0 40px 80px -20px rgba(0,0,0,0.4)' }}
      >
        <button
          type="button"
          onClick={close}
          aria-label={m.close}
          className="absolute right-3.5 top-3.5 grid h-9 w-9 place-items-center rounded-full border-none bg-transparent text-[var(--muted)] hover:bg-[var(--bg-2)] hover:text-[var(--ink)]"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <h3 className="mb-2 font-serif text-[30px]">{m.title}</h3>
            <p className="mb-6 text-[var(--ink-2)]">{m.sub}</p>
            <form onSubmit={onSubmit} className="space-y-3.5">
              <input type="hidden" name="form-name" value="studio-cz" />
              <input type="hidden" name="package" value={pkg || ''} />
              <Field label={m.fields.name}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={m.fields.namePlaceholder}
                  className="w-full rounded-[10px] border border-[var(--line)] bg-[var(--bg)] px-3.5 py-3 text-[15px] text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none"
                />
              </Field>
              <Field label={m.fields.contact}>
                <input
                  type="text"
                  name="contact"
                  required
                  placeholder={m.fields.contactPlaceholder}
                  className="w-full rounded-[10px] border border-[var(--line)] bg-[var(--bg)] px-3.5 py-3 text-[15px] text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none"
                />
              </Field>
              <Field label={m.fields.topic}>
                <select
                  name="topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full rounded-[10px] border border-[var(--line)] bg-[var(--bg)] px-3.5 py-3 text-[15px] text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none"
                >
                  {m.fields.topicOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={m.fields.message}>
                <textarea
                  name="message"
                  rows={3}
                  placeholder={m.fields.messagePlaceholder}
                  className="min-h-[90px] w-full resize-y rounded-[10px] border border-[var(--line)] bg-[var(--bg)] px-3.5 py-3 text-[15px] text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none"
                />
              </Field>
              <button
                type="submit"
                className="mt-1.5 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[var(--ink)] px-[22px] py-[14px] text-[15px] font-medium text-[var(--bg)] transition-all hover:bg-[var(--accent)]"
              >
                {m.submit} <span>→</span>
              </button>
            </form>
          </>
        ) : (
          <div className="px-2.5 py-5 text-center">
            <div className="mx-auto mb-5 grid h-[60px] w-[60px] place-items-center rounded-full bg-[var(--accent-soft)] text-[30px] text-[var(--accent)]">
              ✓
            </div>
            <h3 className="mb-1.5 font-serif text-[30px]">{m.successTitle}</h3>
            <p className="text-[var(--ink-2)]">{m.successBody}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="mb-1.5 block text-[13px] font-medium text-[var(--muted)]">{label}</label>
      {children}
    </div>
  );
}
