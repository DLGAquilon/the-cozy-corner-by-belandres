import Image from "next/image";

export default function BooksPage() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Book Recommendations</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <Image src="/images/book1.png" alt="modern-tailwind-css-book" width={300} height={400} />
          <h3 className="mt-3 font-medium text-black">Modern CSS with Tailwind</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <Image src="/images/book2.png" alt="next-js-handbook" width={300} height={400} />
          <h3 className="mt-3 font-medium text-black">The Next.js Handbook</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <Image src="/images/book3.jpg" alt="mindset-success-book" width={300} height={400} />
          <h3 className="mt-3 font-medium text-black">Mindset</h3>
        </div>
      </div>
    </section>
  );
}