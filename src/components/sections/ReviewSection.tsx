"use client";

import Image from "next/image";

const ReviewSection = () => {
  const reviews = [
    { id: 1, name: "Lalit", image: "/images/sr.avif", review: "I had a wonderful experience at Nosh The atmosphere was cozy, the staff were friendly, and the coffee and food were delicious. Highly recommend!" },
    { id: 2, name: "Tina Varma", image: "/images/sr.avif", review: "Amazing food, great presentation, good quantity, sauce is very yummy" },
    { id: 3, name: "Sofi", image: "/images/sr.avif", review: "Very yummy food loved it very much" }
  ];

  return (
    <section id="review" className="py-[3rem] md:py-[5rem] px-[5%] sm:px-[7%] bg-[url('/images/beans-bg.jpg')] bg-fixed bg-cover relative">
      <div className="absolute inset-0 bg-black/70"></div>
      <h1 className="heading text-center text-white uppercase pb-[2rem] md:pb-[3.5rem] text-[3rem] sm:text-[3.5rem] md:text-[4rem] relative z-10 animate-fadeIn">
        customer&apos;s <span className="text-[#d3ad7f] uppercase">review</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] sm:gap-[2rem] relative z-10">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="border border-[rgba(255,255,255,.2)] text-center p-[1.5rem] sm:p-[2rem] md:p-[3rem] bg-[rgba(19,19,26,0.6)] backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group animate-slideInUp hover:border-[#d3ad7f]/50"
            style={{animationDelay: `${review.id * 200}ms`}}
          >
            <div className="p-0">
              <Image 
                src="/images/quote-img.png" 
                alt="Quote" 
                width={40} 
                height={40} 
                className="quote mx-auto mb-4 sm:mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110"
              />
              <p className="text-[1.3rem] sm:text-[1.4rem] md:text-[1.5rem] leading-[1.6] sm:leading-[1.8] text-[#eee] py-[1.5rem] md:py-[2rem] italic">
                {review.review}
              </p>
              <div className="relative mx-auto w-[7rem] h-[7rem] sm:w-[8rem] sm:h-[8rem] md:w-[9rem] md:h-[9rem] rounded-full border-4 border-[#d3ad7f] p-1 transform group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <Image 
                  src={review.image} 
                  alt={review.name} 
                  width={90} 
                  height={90} 
                  className="user h-full w-full rounded-full object-cover"
                />
              </div>
              <h3 className="py-[0.8rem] md:py-[1rem] text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] text-white font-semibold">{review.name}</h3>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className={`fas fa-${i === 4 ? 'star-half-alt' : 'star'} text-[1.3rem] sm:text-[1.4rem] md:text-[1.5rem] text-[#d3ad7f] inline-block mx-1 transform hover:scale-125 hover:rotate-12 transition-transform duration-300`}></i>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
