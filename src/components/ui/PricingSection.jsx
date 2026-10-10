import { useEffect, useState } from "react";

export default function PricingSection() {
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => setCurrency(data.country_code === "IN" ? "INR" : "USD"))
      .catch(() => setCurrency("USD"));
  }, []);

  const tiers = currency === "INR"
    ? [
        { name: "Starter", price: "₹18,000", desc: "Landing page, mobile-ready, basic SEO" },
        { name: "Growth", price: "₹45,000", desc: "Multi-page site, copy help, voice agent, analytics" },
        { name: "Backbone", price: "₹95,000+", desc: "Full build + branding + ongoing support" },
      ]
    : [
        { name: "Starter", price: "$600", desc: "Landing page, mobile-ready, basic SEO" },
        { name: "Growth", price: "$1,500", desc: "Multi-page site, copy help, voice agent, analytics" },
        { name: "Backbone", price: "$3,000+", desc: "Full build + branding + ongoing support" },
      ];

  return (
    <section className="py-24 px-6" style={{ background: "#FBF3F1" }}>
      <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: "Fraunces", color: "#2E3A2C" }}>
        Pricing
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {tiers.map((t) => (
          <div key={t.name} className="p-8 rounded-2xl" style={{ background: "#FFFFFF", border: "1px solid #B8C4BA" }}>
            <h3 className="text-2xl mb-2" style={{ fontFamily: "Fraunces", color: "#2E3A2C" }}>{t.name}</h3>
            <p className="text-3xl mb-4" style={{ color: "#B57B6B", fontWeight: 600 }}>{t.price}</p>
            <p style={{ color: "#2E3A2C", opacity: 0.8 }}>{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
