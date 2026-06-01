const INDEPENDENT = [
  'Field School',
  'Georgetown Day School',
  'Georgetown Prep',
  'Holton-Arms',
  'Landon',
  'Madeira',
  'Maret',
  'National Cathedral',
  'Potomac',
  'Sidwell Friends',
  'St. Albans',
  "St. Andrew's Episcopal",
  'Washington International School',
];

const PUBLIC_MAGNET = [
  'Basis DC',
  'Bethesda-Chevy Chase',
  'Langley',
  'McLean',
  'Poolesville',
  'School Without Walls',
  'Thomas Jefferson',
  'Walt Whitman',
  'Walter Johnson',
  'Washington Latin',
  'Washington-Liberty',
  'Winston Churchill',
  'Yorktown',
];

const COLLEGES_LEFT = [
  'Duke University',
  'Georgetown University',
  'Harvard University',
  'Northwestern University',
  'Oxford University',
  'Stanford University',
  'University of Pennsylvania (Penn)',
  'University of Virginia (UVA)',
  'Vanderbilt University',
];

const COLLEGES_RIGHT = [
  'Colby College',
  'Columbia University',
  'Cambridge University',
  'Emory University',
  'Johns Hopkins University',
  'Princeton University',
  'University of Chicago',
  'University of Southern California (USC)',
  'University of Texas (Austin)',
  'University of Virginia (UVA)',
  'Vanderbilt University',
  'Washington University in St. Louis (WashU)',
  'Yale University',
];

interface Props {
  onScrollToForm: () => void;
}

function CtaButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={onClick}
        className="btn-shine px-10 py-4 rounded-full text-white font-black text-base tracking-wide uppercase transition-transform hover:scale-105 active:scale-95"
        style={{ backgroundColor: '#1E4FA0', boxShadow: '0 8px 32px rgba(30,79,160,0.45), 0 2px 8px rgba(30,79,160,0.25)' }}
      >
        Book Free Strategy Call
      </button>
    </div>
  );
}

export default function StudentsServedSection({ onScrollToForm }: Props) {
  return (
    <>
      {/* Students Served */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl font-black mb-4" style={{ color: '#1A2A4A' }}>
            Students Served
          </h2>
          <p className="text-center text-sm leading-relaxed max-w-2xl mx-auto mb-12" style={{ color: '#4B5E7A' }}>
            Langley Prep works with motivated students from leading public and independent schools across the Washington, DC area and beyond:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-base font-black mb-4 pb-2" style={{ color: '#1A2A4A', borderBottom: '2px solid #1E4FA0' }}>
                DMV Independent Schools
              </h3>
              <ul className="space-y-2">
                {INDEPENDENT.map((school) => (
                  <li key={school} className="text-sm" style={{ color: '#4B5E7A' }}>{school}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-black mb-4 pb-2" style={{ color: '#1A2A4A', borderBottom: '2px solid #1E4FA0' }}>
                DMV Public/Magnet Schools
              </h3>
              <ul className="space-y-2">
                {PUBLIC_MAGNET.map((school) => (
                  <li key={school} className="text-sm" style={{ color: '#4B5E7A' }}>{school}</li>
                ))}
              </ul>
            </div>
          </div>

          <CtaButton onClick={onScrollToForm} />
        </div>
      </section>

      {/* Colleges of Langley Prep Alumni */}
      <section className="py-16 px-4" style={{ backgroundColor: '#F7F9FC' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-3xl font-black mb-12" style={{ color: '#1A2A4A' }}>
            Colleges of Langley Prep Alumni
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden" style={{ border: '1px solid #E2EAF4' }}>
            <div className="bg-white" style={{ borderRight: '1px solid #E2EAF4' }}>
              <div className="px-8 py-4" style={{ borderBottom: '2px solid #1E4FA0', backgroundColor: '#F0F5FF' }}>
                <h4 className="font-black text-sm uppercase tracking-wide" style={{ color: '#1A2A4A' }}>HS Graduating Class of 2026</h4>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  {COLLEGES_LEFT.map((college) => (
                    <li key={college} className="flex items-start gap-2 text-sm" style={{ color: '#4B5E7A' }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#1E4FA0' }} />
                      {college}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white">
              <div className="px-8 py-4" style={{ borderBottom: '2px solid #1E4FA0', backgroundColor: '#F0F5FF' }}>
                <h4 className="font-black text-sm uppercase tracking-wide" style={{ color: '#1A2A4A' }}>HS Graduating Class of 2025</h4>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  {COLLEGES_RIGHT.map((college) => (
                    <li key={college} className="flex items-start gap-2 text-sm" style={{ color: '#4B5E7A' }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#1E4FA0' }} />
                      {college}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <CtaButton onClick={onScrollToForm} />
        </div>
      </section>
    </>
  );
}
