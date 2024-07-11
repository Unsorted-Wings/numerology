export default function ParallaxSection() {
  return (
    <>
      <section className="parallax bg-fixed bg-center bg-cover h-[30rem] flex items-center justify-center">
        <div className="bg-black opacity-50 h-[100%]"></div>
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Discover the Power of Numerology</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg lg:text-xl">
            Learn how numbers can influence your career, relationships, and future. Unlock the secrets of your life path and destiny with numerological insights.
          </p>
          <div className="mt-8">
            <button className="px-8 py-4 text-lg bg-[#FFD700] text-black font-bold rounded shadow-lg transform transition-transform hover:scale-105">
              Purchase Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
