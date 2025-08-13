
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useIndustry } from '../context/IndustryContext';
import { useProducts } from '../context/ProductContext';
import AnimatedSection from '../components/AnimatedSection';

export default function IndustriesPage() {
  const { products } = useProducts();
  const { industries } = useIndustry();
  const location = useLocation();
  const canonicalUrl = `https://tapeindia.shop${location.pathname}${location.search}`;

  const productMap = useMemo(() => {
    return new Map(products.map(p => [p.id, p]));
  }, [products]);
  
  const MAX_PRODUCTS_VISIBLE = 9;

  return (
    <>
      <Helmet>
        <title>Industrial Tape Solutions for All Major Industries | Tape India</title>
        <meta name="description" content="Tape India delivers specialized adhesive tape solutions for demanding industries like packaging, HVAC, electronics, print, and more. Find products engineered for your application." />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <main className="bg-brand-gray py-16 md:py-24">
        <div className="container mx-auto px-5 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12 lg:mb-16">
              <h1 className="font-extrabold text-brand-blue-dark">
                Tapes Engineered for Your Industry
              </h1>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                We deliver specialized adhesive tape solutions across a wide range of demanding sectors. Find the right products engineered for your specific application, from heavy-duty packaging to precision electronics.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="delay-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry) => (
                <article key={industry.id} className="bg-white rounded-xl shadow-md p-8 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 border border-slate-200/50">
                  <h2 className="text-brand-blue-dark mb-3 text-2xl">{industry.name}</h2>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{industry.description}</p>

                  <div className="border-t border-slate-200 pt-6 mt-auto">
                    <h3 className="font-semibold text-brand-blue mb-4">Key Products:</h3>
                    <div className="flex flex-wrap gap-2">
                        {industry.products.slice(0, MAX_PRODUCTS_VISIBLE).map(productId => {
                            const product = productMap.get(productId);
                            return product ? (
                                <Link 
                                    key={productId}
                                    to={`/product/${product.id}`} 
                                    className="text-sm bg-slate-100 text-slate-700 font-medium px-3 py-1 rounded-full hover:bg-brand-accent hover:text-white transition-colors"
                                >
                                    {product.name}
                                </Link>
                            ) : null;
                        })}
                    </div>
                    {industry.products.length > MAX_PRODUCTS_VISIBLE && (
                        <div className="mt-6 text-center md:text-right">
                            <Link 
                                to={`/products?industry=${industry.id}`} 
                                className="inline-block bg-brand-accent text-white font-bold py-2 px-5 rounded-md hover:bg-brand-accent-dark transition-colors text-sm"
                            >
                                View All Products &rarr;
                            </Link>
                        </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </main>
    </>
  );
}
