import { PRODUCTS } from '../../constants';

export default function AdminDashboardPage() {
  return (
    <section className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-admin-text">Dashboard Overview</h1>
      <p className="text-admin-text-light">
        The dashboard is rendering correctly. Loaded {PRODUCTS.length} products from constants.ts ✅
      </p>
    </section>
  );
}
