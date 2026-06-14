export default function Step6() {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="px-6 pt-6 pb-2 text-center">
        <h3 className="text-lg font-black" style={{ color: '#1A2A4A' }}>
          Book your free strategy call
        </h3>
        <p className="text-slate-500 text-sm mt-1">Pick a time that works for you below.</p>
      </div>
      <div
        className="calendly-inline-widget w-full"
        data-url="https://calendly.com/langleyprep/extra-help-zoom-sessions"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
}
