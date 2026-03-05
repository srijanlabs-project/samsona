import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold mb-6">
          About Samsona Services
        </h1>

        <p className="text-lg text-gray-600">
          Samsona Services Pvt. Ltd. provides telecom infrastructure,
          workforce staffing, branding consultancy and digital
          display solutions for enterprise clients across India.
        </p>
      </div>

      <Footer />
    </>
  );
}