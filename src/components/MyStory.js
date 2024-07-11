import React from 'react';

const MyStory = () => {
  return (
    <section id="my-story" className="py-20 bg-green-200 text-white">
      <div className="container mx-auto px-12 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
          <img 
            src="https://via.placeholder.com/600" 
            alt="Founder" 
            className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-extrabold text-[#026d02] mb-6">My Story</h2>
          <p className="mb-6 text-lg text-justify leading-relaxed text-[#026d02]">
            Born with a passion for numbers and a deep understanding of the cosmic vibrations,
            our founder has been a guiding light for many individuals seeking to understand their
            life paths and destinies. With years of experience in numerology and a dedication to 
            empowering others, the journey from a curious seeker to a renowned numerologist has been 
            nothing short of inspiring.
          </p>
          <p className="mb-6 text-lg text-justify leading-relaxed text-[#026d02]">
            Through meticulous study and practical applications, the founder has unlocked the secrets 
            of numerology, helping countless individuals find clarity and direction. Their expertise 
            lies in translating complex numerical patterns into actionable insights, making the mystical 
            art of numerology accessible to all.
          </p>
          <p className="mb-6 text-lg text-justify leading-relaxed text-[#026d02]">
            Join us on this transformative journey and discover how the power of numbers can illuminate 
            your path and reveal your true potential.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-[#FFD700] text-[#0F172A] font-bold rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
