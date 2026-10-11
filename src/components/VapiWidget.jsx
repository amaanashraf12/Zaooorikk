import { VapiWidget } from "@vapi-ai/client-sdk-react";

export default function VoiceAgent() {
  return (
    <section className="py-24 px-6 text-center" style={{ background: "#FBF3F1" }}>
      <h2 className="text-4xl mb-4" style={{ fontFamily: "Fraunces", color: "#2E3A2C" }}>
        Talk to Zarik
      </h2>
      <p className="mb-10" style={{ color: "#2E3A2C", opacity: 0.75 }}>
        No forms. No waiting. Just speak — and I'll listen. Try a live demo right now.
      </p>
      <VapiWidget
        publicKey={import.meta.env.VITE_VAPI_PUBLIC_KEY}
        assistantId={import.meta.env.VITE_VAPI_ASSISTANT_ID}
        mode="voice"
        theme="dark"
        accentColor="#B57B6B"
        ctaButtonColor="#2E3A2C"
        ctaButtonTextColor="#FFFFFF"
      />
      <p className="mt-6 text-sm" style={{ color: "#2E3A2C", opacity: 0.6 }}>
        Click to talk · Microphone permission required
      </p>
    </section>
  );
}
