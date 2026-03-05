import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {

  return (
    <main>

      <Navbar />

      <section className="page">

        <div className="container">

          <h1>About Samsona Services</h1>

          <p>
            Samsona Services Pvt Ltd is an integrated technology and
            infrastructure solutions provider specializing in telecom
            infrastructure, digital display networks, enterprise branding
            systems and workforce deployment.
          </p>

          <p>
            Our solutions help organizations deploy modern digital
            infrastructure that improves communication, engagement,
            and operational efficiency.
          </p>

        </div>

      </section>

      <Footer />

    </main>
  );
}