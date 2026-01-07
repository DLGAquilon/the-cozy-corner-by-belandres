import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary-text">
  <main className="flex w-full max-w-3xl flex-col items-center gap-10 py-24 px-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm border border-latte/20">
    <Image
      src="/images/book1.png"
      alt="The Cozy Corner"
      width={120}
      height={160}
      priority
      className="drop-shadow-md"
    />  

    <div className="text-center">
    
      <h1 className="text-4xl text-primary-text font-heading font-semibold tracking-tight">
        Welcome to The Cozy Corner
      </h1>
  
      <p className="mt-4 text-primary-text/80 font-body text-lg">
        A cozy online bookstore with hand-picked recommendations for every
        reader.
      </p>
    </div>

    <div className="flex gap-4 font-body">
      <Link
        href="/books"
        className="flex h-12 items-center justify-center rounded-full bg-latte px-8 text-primary-text font-bold shadow-sm hover:bg-latte/80 transition-colors"
      >
        Browse Books
      </Link>

      <Link
        href="/about"
        className="flex h-12 items-center justify-center rounded-full border border-latte px-8 text-primary-text hover:bg-latte/10 transition-colors"
      >
        Learn More
      </Link>
    </div>
  </main>
</div>
  );
}