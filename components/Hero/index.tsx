import Link from "next/link";

export const Hero = () => {
  return (
    <section className="container mx-auto py-12 text-center border-b">
      <div>
        <h1 className="text-2xl md:text-4xl">
          Hey, <strong>welcome to {"Joao's"} blog</strong>. See my thoughts,
          stories and ideas.
        </h1>        
        <p className="text-center">😎</p>
      </div>
    </section>
  );
};
