import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dentzine - A magzine for dentistry related articles",
  description: "Dentzine - Share your knowledge through this great oppertunity to publish your dentistry articles.",
};

export default function DentzinePage() {
  const articles = [
    {
      date: "4 Feb 2021",
      title: "Diabetes Mellitus and Periodontitis",
      author: "Naghman Zuberi",
      link: "/articles/diabetes-mellitus-and-periodontitis",
    },
    {
      date: "10 Feb 2021",
      title: "Dry Socket- Possible Causes, Symptoms and Management",
      author: "DR. Farooq Sorathia, Dr. Naghman Zuberi",
      link: "/articles/dry-socket-possible-causes",
    },
    {
      date: "15 Feb 2021",
      title: "Diabetes Mellitus and Periodontitis",
      author: "Dr. Shikha Sharma BDS, MDS (Periodontology)",
      link: "/articles/DM-and-Periodontitis",
    },
    {
      date: "15 Feb 2021",
      title: "Cross bites- Classification, Possible causes, and management",
      author: "Moustafa El-Rass - BDS, MSc in Orthodontics and Pedodontics - Specialist Orthodontist",
      link: "/articles/cross-bites-classification",
    },
    {
      date: "03 June 2021",
      title: "Pit and fissure sealants",
      author: "Dr. Meeti Charan BDS, MDS (Pedodontics)",
      link: "/articles/Pit-and-fissure-sealants",
    },
  ];

  return (
    <main className="min-h-screen">
      <PageBanner pageTitle="Dentzine" />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl font-bold mb-3 text-gray-900">Breaking the Norms</h1>
              <h3 className="text-xl text-gray-600">Providing you a platform to get published</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {articles.map((article, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="mb-3">
                    <span className="text-sm text-gray-600">{article.date}</span>
                  </div>
                  <Link href={article.link}>
                    <h3 className="font-display text-xl font-bold mb-2 text-gray-900 hover:text-primary-600 transition-colors">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-600 mb-4">{article.author}</p>
                  <Link
                    href={article.link}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Read More <span className="ml-1">→</span>
                  </Link>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-700 mb-4">
                Send your publications at <strong>info@dentalprep.ca</strong>
              </p>
              <p className="text-gray-700">
                Please put <strong><em>To be published</em></strong> in the subject.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

