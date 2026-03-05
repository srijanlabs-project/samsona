export default function LeadForm() {

  return (
    <section className="lead">

      <div className="container">

        <h2>Request Consultation</h2>

        <form className="form">

          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Phone" />

          <textarea placeholder="Your Requirement"></textarea>

          <button type="submit">
            Submit
          </button>

        </form>

      </div>

    </section>
  );
}