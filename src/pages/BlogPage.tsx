
import { Helmet } from 'react-helmet-async';
import { useState, useMemo, type FC } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import CanonicalTag from '../components/CanonicalTag';
import BlogCard from '../components/BlogCard'; // New component for blog posts
import { ARTICLES as allArticles } from '../constants'; // Assuming articles are moved to constants

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
    const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);

    const loadMorePosts = () => {
        setVisiblePosts(prev => prev + POSTS_PER_PAGE);
    };
    
    const currentArticles = useMemo(() => allArticles.slice(0, visiblePosts), [visiblePosts]);

    return (
        <>
            <Helmet>
                <title>Industrial Insights – Expert Articles by Tape India</title>
                <meta name="description" content="Explore expert articles on industrial tapes and materials from Tape India. Learn about EMI shielding, thermal management, contamination control, and safety solutions." />
            </Helmet>
            <CanonicalTag />

            <header className="bg-brand-gray border-b border-slate-200">
                <div className="container mx-auto px-5 lg:px-8 py-16 md:py-20 text-center">
                    <AnimatedSection>
                        <h1 className="font-extrabold mb-4 text-brand-blue-dark">
                            Industrial Insights
                        </h1>
                        <p className="text-slate-600 max-w-3xl mx-auto text-lg">
                            Expert articles and technical guides from the specialists at Tape India. Explore topics on adhesive technology, material science, and industry best practices.
                        </p>
                    </AnimatedSection>
                </div>
            </header>

            <main className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-5 lg:px-8">
                    <AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                            {currentArticles.map((article) => (
                                <BlogCard key={article.id} article={article} />
                            ))}
                        </div>
                    </AnimatedSection>

                    {visiblePosts < allArticles.length && (
                        <AnimatedSection className="text-center mt-16">
                            <button
                                onClick={loadMorePosts}
                                className="bg-brand-accent text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-brand-accent-dark transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30"
                            >
                                Load More Articles
                            </button>
                        </AnimatedSection>
                    )}
                </div>
            </main>
            
            {/* Call to Action Section */}
            <section className="bg-brand-blue-dark">
                <div className="container mx-auto px-5 lg:px-8 py-20 text-center">
                    <AnimatedSection>
                        <h2 className="text-white mb-5">Need Industrial Tapes in Bulk?</h2>
                        <p className="text-blue-200 max-w-2xl mx-auto mb-10">
                            Contact Tape India for expert advice and competitive quotes on our extensive range of adhesive solutions.
                        </p>
                        <Link to="/request-quote" className="bg-brand-yellow text-brand-blue-dark font-bold py-3 px-8 rounded-md hover:bg-yellow-400 transition-colors text-lg">
                            Request a Quote
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
