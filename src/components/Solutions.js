
export default function Solutions() {

  const solutions = [
    {
      title: "Telecom & IT Infrastructure",
      desc: "Server racks, telecom cabinets, networking infrastructure and installation components."
    },
    {
      title: "Digital Display & Signage",
      desc: "Commercial displays, LED screens, digital standees and enterprise signage solutions."
    },
    {
      title: "Enterprise Experience Centers",
      desc: "Corporate branding environments, video walls and digital customer engagement systems."
    },
    {
      title: "Workforce & Staffing Solutions",
      desc: "Technical workforce deployment, operational manpower and compliance managed staffing."
    }
  ];

  return (
    <section className="solutions">

      <div className="container">

        <h2>Core Solutions</h2>

        <div className="grid">

          {solutions.map((s, index) => (
            <div key={index} className="card">

              <h3>{s.title}</h3>
              <p>{s.desc}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}