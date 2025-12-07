// Tooth icon component
function ToothIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" stroke="#4A5568" strokeWidth="2">
      <path d="M40 12 C35 12 30 15 30 20 L30 30 C30 32 31 33 33 33 L37 33 C39 33 40 32 40 30 L40 20 C40 17 37 14 40 14 C43 14 40 17 40 20 L40 30 C40 32 41 33 43 33 L47 33 C49 33 50 32 50 30 L50 20 C50 15 45 12 40 12 Z"/>
      <path d="M40 35 L40 65 C40 70 35 75 40 75 C45 75 40 70 40 65 L40 35 Z"/>
      <circle cx="28" cy="50" r="2" fill="#4A5568"/>
      <circle cx="52" cy="50" r="2" fill="#4A5568"/>
    </svg>
  );
}

export default function DentalPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Repeating tooth pattern grid */}
      <div className="absolute inset-0 w-full h-full opacity-20">
        <div className="grid grid-cols-12 gap-8 h-full">
          {Array.from({ length: 60 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <ToothIcon className="w-12 h-12" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Larger scattered dental icons - more visible */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-25">
        <ToothIcon className="w-full h-full" />
      </div>
      
      <div className="absolute top-40 right-16 w-28 h-28 opacity-25">
        <ToothIcon className="w-full h-full" />
      </div>
      
      <div className="absolute bottom-32 left-24 w-24 h-24 opacity-25">
        <ToothIcon className="w-full h-full" />
      </div>
      
      <div className="absolute top-56 left-1/3 w-26 h-26 opacity-25">
        <ToothIcon className="w-full h-full" />
      </div>
      
      <div className="absolute bottom-40 right-1/4 w-22 h-22 opacity-25">
        <ToothIcon className="w-full h-full" />
      </div>
      
      <div className="absolute top-1/3 right-10 w-20 h-20 opacity-25">
        <ToothIcon className="w-full h-full" />
      </div>
      
      <div className="absolute top-64 left-1/2 w-18 h-18 opacity-25">
        <ToothIcon className="w-full h-full" />
      </div>
      
      <div className="absolute bottom-20 left-1/2 w-24 h-24 opacity-25">
        <ToothIcon className="w-full h-full" />
      </div>
    </div>
  );
}
