'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { HubspotFormEmbed } from '@/components/forms/HubspotFormEmbed';

type HubspotFormModalTriggerProps = {
  triggerLabel: string;
  modalTitle: string;
  portalId: string;
  formId: string;
  region: string;
  className?: string;
  fallbackEmail?: string;
  successMessage?: string;
  downloadHref?: string;
};

type NoticeState = {
  text: string;
  actionHref?: string;
  actionLabel?: string;
};

export function HubspotFormModalTrigger({ triggerLabel, modalTitle, portalId, formId, region, className, fallbackEmail, successMessage, downloadHref }: HubspotFormModalTriggerProps) {
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState<NoticeState | null>(null);

  const startDownload = (href: string) => {
    const frame = document.createElement('iframe');
    frame.hidden = true;
    frame.src = href;
    document.body.appendChild(frame);
    window.setTimeout(() => {
      frame.remove();
    }, 60_000);

    setNotice({
      text: 'Your download should start automatically.',
      actionHref: href,
      actionLabel: 'Download manually',
    });
  };

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  useEffect(() => {
    if (!notice) {
      return;
    }

    const timeout = window.setTimeout(() => setNotice(null), 8000);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  const handleSubmitted = () => {
    setOpen(false);

    if (downloadHref) {
      void startDownload(downloadHref);
    }

    if (successMessage) {
      setNotice({ text: successMessage });
    }
  };

  return (
    <>
      <button type='button' className={`cursor-pointer appearance-none border-0 p-0 text-left font-inherit ${className ?? ''}`} onClick={() => setOpen(true)}>
        {triggerLabel}
      </button>
      {open
        ? createPortal(
            <div className='fixed inset-0 z-[120] bg-black/60' onClick={() => setOpen(false)}>
              <HubspotFormEmbed region={region} portalId={portalId} formId={formId} fallbackEmail={fallbackEmail} onSubmitted={handleSubmitted} onClose={() => setOpen(false)} closeLabel={`Close ${modalTitle}`} />
            </div>,
            document.body,
          )
        : null}
      {notice
        ? createPortal(
            <p className='fixed bottom-4 left-4 z-[121] max-w-sm border border-foreground/15 bg-background px-4 py-3 text-sm text-foreground shadow-xl'>
              {notice.text}
              {notice.actionHref && notice.actionLabel ? (
                <>
                  {' '}
                  <a href={notice.actionHref} className='underline underline-offset-4'>
                    {notice.actionLabel}
                  </a>
                </>
              ) : null}
            </p>,
            document.body,
          )
        : null}
    </>
  );
}
