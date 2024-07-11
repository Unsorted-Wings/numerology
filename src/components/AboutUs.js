export default function AboutUs() {
  return (
    <section id="about" className="bg-green-200 text-black py-20 px-20 text-justify">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-6">About Us</h2>
          <p className="text-lg leading-relaxed mb-8">
            At Numerologist, we are passionate about decoding the language of numbers to empower individuals and businesses alike. Our journey began with a commitment to uncover the hidden meanings behind numbers and their profound impact on life’s journey.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            With a dedicated team of experienced numerologists and cutting-edge technology, we offer personalized numerological readings that provide clarity and guidance. From understanding core numbers to navigating karmic challenges and exploring practical remedies, Numerologist is your trusted partner in uncovering insights and unlocking potential.
          </p>
          <p className="text-lg leading-relaxed">
            Join us on a transformative journey where numbers become your allies in achieving personal and professional growth. Discover the power of numerology and embark on a path of self-discovery and success with Numerologist.
          </p>
        </div>
        <div className="md:w-1/2 md:mr-10 mb-10 md:mb-0 pl-10">
          <img src="../images/hero.webp" alt="About Us" className="rounded-lg shadow-xl" />
        </div>
      </div>
    </section>
  );
}
