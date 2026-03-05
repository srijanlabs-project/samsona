import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Partners() {

  return (
    <main>

      <Navbar />

      <section className="page">

        <div className="container">

          <h1>Strategic Partners</h1>

          <div className="grid">

            <div className="card">

              <h2>Span Media</h2>

              <p>
                Technology partner specializing in digital signage,
                LED displays and commercial display systems for
                enterprise communication and branding infrastructure.
              </p>

            </div>

            <div className="card">

              <h2>Srijan Labs</h2>

              <p>
                Digital infrastructure and embedded technology partner
                supporting hardware development, CMS platforms and
                digital signage ecosystem technologies.
              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}