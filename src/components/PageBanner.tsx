interface PageBannerProps {
  pageTitle: string;
}

export default function PageBanner({ 
  pageTitle
}: PageBannerProps) {
  return (
    <section className="relative bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400 text-white py-20 mt-16 md:mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold">
            {pageTitle}
          </h1>
        </div>
      </div>
    </section>
  );
}

