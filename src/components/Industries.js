export default function Industries() {

  const industries = [
    "Telecom",
    "Enterprise Offices",
    "Retail & Commercial Spaces",
    "Real Estate",
    "Education",
    "Residential Communities"
  ];

  return (
    <section className="industries">

      <div className="container">

        <h2>Industries We Serve</h2>

        <div className="grid">

          {industries.map((item, index) => (
            <div key={index} className="industry-card">
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}