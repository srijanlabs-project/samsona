import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Products() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto py-20 px-6">

        <h1 className="text-4xl font-bold mb-8">
          Our Products
        </h1>

        <ul className="space-y-4 text-lg text-gray-600">
          <li>Server Racks</li>
          <li>Network Cabinets</li>
          <li>Outdoor Enclosures</li>
          <li>Digital LED Displays</li>
          <li>Telecom Installation Materials</li>
        </ul>

      </div>

      <Footer />
    </>
  );
}