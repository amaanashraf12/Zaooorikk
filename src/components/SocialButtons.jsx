export default function SocialButtons() {
  return (
    <div className="flex gap-4 justify-center mt-8">
      <a href="https://wa.me/916200800350" target="_blank" rel="noopener noreferrer"
         className="px-6 py-3 rounded-full" style={{ background: "#2E3A2C", color: "#FBF3F1" }}>
        WhatsApp
      </a>
      <a href="https://instagram.com/inhaary" target="_blank" rel="noopener noreferrer"
         className="px-6 py-3 rounded-full" style={{ background: "#B57B6B", color: "#FFFFFF" }}>
        Instagram
      </a>
      <a href="mailto:amaanashraf17890@gmail.com"
         className="px-6 py-3 rounded-full" style={{ background: "#87AE73", color: "#FFFFFF" }}>
        Email
      </a>
    </div>
  );
}
