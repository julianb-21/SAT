import { useEffect } from 'react';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function Step6() {
  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data?.event === 'calendly.event_scheduled') {
        window.fbq?.('track', 'FreeStratCall');
      }
    }
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="px-6 pt-6 pb-2 text-center">
        <h3 className="text-lg font-black" style={{ color: '#1A2A4A' }}>
          Book your free strategy call
        </h3>
        <p className="text-slate-500 text-sm mt-1">Pick a time that works for you below.</p>
      </div>
      <iframe
        src="https://calendly.com/langleyprep/sat-strategy-session"
        width="100%"
        height="700"
        frameBorder="0"
        title="Schedule a call"
      />
    </div>
  );
}
