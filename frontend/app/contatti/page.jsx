"use client";

import { useState } from "react";

export default function ContattiPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch("/api/contatti", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setResponse(data.message || data.error);
    } catch (err) {
      setResponse("Errore durante l'invio del messaggio.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-6 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-6 text-center">Contattaci</h1>
      <p className="text-gray-700 text-center mb-10">
        Compila il modulo qui sotto e ti risponderemo al più presto.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-8 rounded-2xl shadow-md">
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3"
          required
        />
        <textarea
          name="message"
          placeholder="Messaggio"
          rows="5"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-3"
          required
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          {loading ? "Invio in corso..." : "Invia messaggio"}
        </button>
      </form>

      {response && (
        <p
          className={`mt-6 text-center font-medium ${
            response.includes("successo") ? "text-green-600" : "text-red-600"
          }`}
        >
          {response}
        </p>
      )}
    </section>
  );
}
