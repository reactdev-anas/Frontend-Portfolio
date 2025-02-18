import React, { useState, useEffect } from 'react';
import ClientImage from '../Images/Client_image-1.jpg'
import ClientImage_1 from '../Images/Client_image.jpg'

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      image: ClientImage_1, // Add your client's image here
      text: "Anas is a talented, committed individual who will leave no stone unturned in his pursuit to provide with the best. His attention to detail and in-depth experience in the of web development is indeed commendable. He has exhibited exemplary skills in the field, and I hope to see all the great projects coming up",
      name: 'Vaibhav Shrivastav',
      position: 'Founder, Vensero Detailing.',
    },
    {
      image: ClientImage, // Add your client's image here
      text: "Anas was a wonderful developer to work with! He anticipated everything I need to consider for my website He also went the extra mile and added details that I hadn't considered! He is helping my business grow, and I will definitely work with him again!",
      name: 'Rishabh Sen',
      position: 'DevOps Engineer.',
    },
    // {
    //   image: 'client3.jpg', // Add your client's image here
    //   text: 'Aliquam erat volutpat. Ut placerat, lorem at tincidunt tincidunt, sapien nisi.',
    //   name: 'Mike Johnson',
    //   position: 'Marketing Head, DEF Ltd.',
    // },
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(goToNext, 3000); // 5 seconds auto slide
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <>
    <section id='testimonial' className=" py-10 sm:py-12 md:py-12 lg:py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center ">
      <h2 className=" text-center text-cyan-700  mt-6 mb-10 sm:mb-14 md:mb-16 lg:mb-16"><span className=' border-2 font-bold border-cyan-700 rounded px-4 sm:px-6 md:px-6 lg:px-7 py-2 text-xl sm:text-3xl md:text-4xl lg:text-4xl'>What's my clients are saying</span></h2>

        {/* Testimonial Slider */}
        <div className="relative ">
          <div className="flex justify-center gap-8">
            <div className="w-full  sm:w-80 md:w-5/6 lg:w-5/6 xl:w-2/3 bg-white p-8 rounded-xl shadow-xl">
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full  shadow-lg border-0">
                  <img
                    src={testimonials[currentIndex].image}
                    alt="Client"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <p className="text-gray-700 text-lg mb-4">
                "{testimonials[currentIndex].text}"
              </p>
              <p className="text-xl font-semibold text-cyan-700">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-cyan-700 font-semibold">{testimonials[currentIndex].position}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 sm:left-1 md:left-1 lg:left-7 xl:left-36 top-1/2 transform -translate-y-1/2   text-cyan-700 font-light hidden sm:block md:block lg:block sm:text-4xl md:text-6xl lg:text-6xl p-2 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 sm:right-1 md:right-1 lg:right-7 xl:right-36 top-1/2 transform -translate-y-1/2 text-cyan-700 font-light hidden sm:block md:block lg:block  sm:text-4xl md:text-6xl lg:text-6xl p-2 rounded-full"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default TestimonialSlider;
