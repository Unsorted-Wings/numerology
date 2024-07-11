import { useEffect } from "react";

const testimonials = [
  {
    name: "John Doe",
    message: "This numerology service changed my life!",
    occupation: "Software Engineer",
    avatar: "../images/hero.webp", // Example avatar image
  },
  {
    name: "Jane Smith",
    message: "Amazing insights and accurate readings.",
    occupation: "Marketing Manager",
    avatar: "../images/hero.webp", // Example avatar image
  },
  {
    name: "James Smith",
    message: "Amazing insights and accurate readings.",
    occupation: "Marketing Manager",
    avatar: "../images/hero.webp", // Example avatar image
  },
  {
    name: "Robert Brown",
    message: "Highly recommended for anyone seeking clarity.",
    occupation: "Business Consultant",
    avatar: "../images/hero.webp", // Example avatar image
  },
  {
    name: "Emily White",
    message: "A must-try for anyone curious about their numbers.",
    occupation: "Teacher",
    avatar: "../images/hero.webp", // Example avatar image
  },
  {
    name: "Michael Johnson",
    message: "I gained so much clarity and direction.",
    occupation: "Financial Analyst",
    avatar: "../images/hero.webp", // Example avatar image
  },
];

export default function Testimonials() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .slick-dots li.slick-active button:before {
        color: #FFD700;
      }
      .slick-dots li button:before {
        color: #FFD700;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="testimonials" className="bg-green-200 text-black py-20 overflow-hidden">
      <div className="container mx-auto text-center px-10">
        <h2 className="text-4xl font-extrabold text-[#FFD700]">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="h-24 w-24 rounded-full mr-4" />
                <div>
                  <p className="text-xl italic text-gray-700">"{testimonial.message}"</p>
                  <p className="mt-1 text-lg text-gray-500">{testimonial.name}, {testimonial.occupation}</p>
                </div>
              </div>
              <div className="flex justify-end">
                <p className="font-bold text-[#FFD700]">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
