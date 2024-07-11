export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('../images/hero.webp')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center text-white px-6 md:px-24 w-full mt-24">
        <h1 className="text-4xl md:text-7xl mb-2 font-light">Numbers have a unique vibration </h1>
        <h1 className="text-4xl md:text-7xl mb-2 font-bold text-[#FFD700] italic">that can reveal hidden truths</h1>
        <h1 className="text-4xl md:text-7xl font-light mb-4">about your life. </h1>
        
        <div className="mt-12 md:mt-24 text-center">
          <button className="px-6 py-4 bg-[#FFD700] text-black text-lg md:text-2xl font-bold rounded-lg shadow-lg transform transition-transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
