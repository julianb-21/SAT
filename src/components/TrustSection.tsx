const PHOTOS = [
  { src: '/files_6028413-2026-05-27T16-32-59-017Z-unnamed.jpg', alt: 'Family 1' },
  { src: '/files_6028413-2026-05-27T16-33-07-438Z-unnamed.jpg', alt: 'Family 2' },
  { src: '/files_6028413-2026-05-27T16-33-17-576Z-unnamed.jpg', alt: 'Family 3' },
  { src: '/files_6028413-2026-05-27T16-33-36-660Z-unnamed.jpg', alt: 'Family 4' },
  { src: '/files_6028413-2026-05-27T16-33-50-854Z-unnamed.jpg', alt: 'Family 5' },
  { src: '/files_6028413-2026-05-27T16-34-05-929Z-unnamed.jpg', alt: 'Family 6' },
  { src: '/dfsdgs.jpg', alt: 'Family 7' },
  { src: '/unnamed.jpg', alt: 'Family 8' },
  { src: '/JOCELYM.jpg', alt: 'Family 9' },
];

export default function TrustSection() {
  return (
    <section className="py-10 px-4" style={{ backgroundColor: '#EEF2F8' }}>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-black tracking-widest uppercase mb-6" style={{ color: '#1E4FA0' }}>
          500+ DC, Maryland, and Virginia Families Served!
        </p>

        {/* Desktop: static wrapped row | Mobile: infinite scrolling carousel */}
        <div className="hidden md:flex items-center justify-center gap-3 flex-wrap mb-6">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className="w-16 h-16 rounded-full overflow-hidden shadow-md shrink-0"
              style={{ border: '3px solid white' }}
            >
              <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="md:hidden overflow-hidden mb-6">
          <div className="flex animate-marquee">
            {[...PHOTOS, ...PHOTOS].map((photo, i) => (
              <div
                key={i}
                className="w-16 h-16 rounded-full overflow-hidden shadow-md shrink-0 mx-2"
                style={{ border: '3px solid white' }}
              >
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm leading-relaxed max-w-2xl mx-auto" style={{ color: '#3A4F6B' }}>
          No matter if your kid is just starting SAT Prep, wants to improve their score, or wants a better tutor for them, at Langley Prep, we will give them the tools &amp; resources to make their college dreams a reality.
        </p>
      </div>
    </section>
  );
}
