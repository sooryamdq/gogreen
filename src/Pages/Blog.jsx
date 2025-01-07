import person from "../assets/person.png";
import persontwo from "../assets/persontwo.png";
import personthree from "../assets/personthree.png";
import personfour from "../assets/personfour.png";
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import { get_testimonial } from "../APIvarialbles/service";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const testimonialsRef = useRef(null);
  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const formData = new FormData();
      formData.append("portfolioId", "");
      try {
        const response = await axios.post(get_testimonial, formData);
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTestimonials();
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when half of the testimonial card is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once the element is visible
        }
      });
    }, options);

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array?.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const slides = chunkArray(data, 2); // Change the chunk size as needed
  const slider = chunkArray(data, 1); // Change the chunk size as needed

  const nextSlide = () => {
    
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlidembl = () => {
    
    setCurrentSlide((prev) => (prev + 1) % slider.length);
  };

  const prevSlidembl = () => {
    
    setCurrentSlide((prev) => (prev - 1 + slider.length) % slider.length);
  };

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length, isPaused]);


 

useEffect(() => {
    const timeout = setTimeout(() => {
        setAnimating(false);
    }, 500); // Match this with the animation duration in CSS

    return () => clearTimeout(timeout);
}, [currentSlide]);


const handleMouseEnter = () => {
  setIsPaused(true);
};

const handleMouseLeave = () => {
  setIsPaused(false);
};

const renderHTML = (htmlString) => {
  return { __html: htmlString };
};

const renderLinks = (text,color="#05FD7B") => {
  const regex = /(?:https?|ftp):\/\/[^\s]+/g;
  return text.replace(regex, (match) => {
      return `<a href="${match}" target="_blank" rel="noopener noreferrer" style="color: ${color}; ">${match}</a>`;
  });
};

  return (
    <>
      <p className="text-white lg:text-4xl text-3xl py-8 px-4 font-bold text-center montserrat-subrayada" id="blog">TESTIMONIALS</p>
      <div className="relative lg:block hidden" >
        <div className={`flex flex-wrap gap-5 justify-center items-center text-white lg:px-0 px-2 `} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {slides[currentSlide] && slides[currentSlide].map((card, index) => (
            <div key={index} className={`cursor-pointer w-[528px] min-h-72 bg-[#F0F0F0] border border-primary flex flex-col p-4 rounded-md  ${animating ? 'slide-enter' : ''}`}>
              <div className="flex gap-3 items-center ">
                <div className="w-20 h-20 rounded-full">
                  <img src={card.profileImage} alt="Person" className="object-fit rounded-full" />
                </div>
                <p className="lg:text-xl font-semibold text-base font-medium montserrat-subrayada text-primary">{card.clientName}</p>
              </div>
              <p className="lg:text-base text-sm font-normal leading-10 pt-2 text-justify text-primary roboto-regular" dangerouslySetInnerHTML={renderHTML(renderLinks(card.context))}></p>
            </div>
          ))}
          <button onClick={prevSlide} className="absolute left-5 transform -translate-y-1/2 text-black px-3 py-1 rounded-full shadow-md bg-primary">
            <IoIosArrowBack size={20} />
          </button>
          <button onClick={nextSlide} className="absolute right-5 transform -translate-y-1/2 text-black px-3 py-1 rounded-full shadow-md bg-primary">
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
      <div className="relative lg:hidden block">
        <div className={`flex flex-wrap gap-5 justify-center items-center text-white lg:px-0 px-2 `} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {slider[currentSlide] && slider[currentSlide].map((card, index) => (
            <div key={index} className="cursor-pointer w-[80%] min-h-72 border border-primary bg-[#F0F0F0]  flex flex-col justify-center p-4 rounded-md" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="flex gap-3 items-center">
                <div className="w-20 h-20 rounded-full">
                  <img src={card.profileImage} alt="Person" className="object-fit rounded-full" />
                </div>
                <p className="lg:text-2xl text-xl font-bold montserrat-subrayada text-primary">{card.clientName}</p>
              </div>
              <p className="lg:text-xl text-sm font-normal leading-6 pt-2 text-justify text-primary roboto-regular" dangerouslySetInnerHTML={renderHTML(renderLinks(card.context))}></p>
            </div>
          ))}
          <button onClick={prevSlidembl} className="absolute left-5 -bottom-14 transform -translate-y-1/2 text-black px-3 py-1 rounded-full shadow-md bg-primary">
            <IoIosArrowBack size={20} />
          </button>
          <button onClick={nextSlidembl} className="absolute right-5 -bottom-14 transform -translate-y-1/2 text-black px-3 py-1 rounded-full shadow-md bg-primary">
            <IoIosArrowForward size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
