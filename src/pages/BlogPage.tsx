
import { useBlog } from '../context/BlogContext';
import BlogCard from '../components/BlogCard';
import CanonicalTag from '../components/CanonicalTag';

export default function BlogPage() {
  const { articles } = useBlog();

  return (
    <>
      <CanonicalTag />

      <main className="bg-white min-h-screen">
        <section className="py-20 bg-slate-100">
          <div className="container mx-auto px-5 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue-dark">
              Industrial Tape Blog
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
              Expert insights, technical guides, industrial applications,
              adhesive tape solutions, safety tape usage, insulation methods,
              packaging systems, and manufacturing knowledge from Tape India.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map(article => (
                <BlogCard
                  key={article.id}
                  article={article}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
