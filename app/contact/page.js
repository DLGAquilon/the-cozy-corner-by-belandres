export default function ContactPage() {
  return (
    <section className="max-w-md mx-auto py-12">
      <h2 className="text-3xl font-heading font-semibold text-primary-text mb-6 text-center">
        Contact Us
      </h2>

      <form className="bg-secondary-text p-8 rounded-3xl border border-latte/30 shadow-sm space-y-5 font-body">
        <input
          type="text"
          placeholder="Name"
          className="w-full bg-white/50 border border-latte/50 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 text-primary-text placeholder:text-primary-text/40"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-white/50 border border-latte/50 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 text-primary-text placeholder:text-primary-text/40"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full bg-white/50 border border-latte/50 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-sage/50 text-primary-text placeholder:text-primary-text/40"
        />
        <button className="w-full bg-sage text-secondary-text py-3 rounded-full font-bold shadow-md hover:bg-sage/90 transition-all active:scale-[0.98]">
          Send Message
        </button>
      </form>
    </section>
  );
}
