"use client";

import { useState } from "react";

export default function LeadForm() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (data.success) {

      alert("Thank you. Your message has been sent.");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: ""
      });

    } else {

      alert("Error sending message.");

    }

  };

  return (


   <form onSubmit={handleSubmit}>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Your Requirement"
        value={form.message}
        onChange={handleChange}
      />

      <button type="submit">
        Submit
      </button>

    </form> 
   

  );
} 