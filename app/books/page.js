import Image from "next/image";

export default function BooksPage() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-heading font-semibold text-primary-text mb-8">
        Book Recommendations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="group bg-secondary-text p-5 rounded-3xl border border-latte/30 shadow-sm transition-transform hover:-translate-y-1">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image
              src="/images/book1.png"
              alt="Modern CSS with Tailwind"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="mt-4 font-body font-medium text-primary-text text-lg">
            Modern CSS with Tailwind
          </h3>
        </div>

        <div className="group bg-secondary-text p-5 rounded-3xl border border-latte/30 shadow-sm transition-transform hover:-translate-y-1">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image
              src="/images/book2.png"
              alt="The Next.js Handbook"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="mt-4 font-body font-medium text-primary-text text-lg">
            The Next.js Handbook
          </h3>
        </div>

        <div className="group bg-secondary-text p-5 rounded-3xl border border-latte/30 shadow-sm transition-transform hover:-translate-y-1">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
            <Image
              src="/images/book3.jpg"
              alt="Mindset: The New Psychology of Success"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="mt-4 font-body font-medium text-primary-text text-lg">
            Mindset
          </h3>
        </div>
      </div>
    </section>
  );
}
