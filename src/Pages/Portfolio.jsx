import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { get_portfolio } from "../APIvarialbles/service";
import axios from "axios";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Portfolio = () => {
    const [isVisible, setIsVisible] = useState(false);
    const animatedRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    const [data, setData] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [isPaused, setIsPaused] = useState(false);


    useEffect(() => {
        const fetchPortfolio = async () => {
            const formData = new FormData();
            formData.append("portfolioId", "");
            try {
                const response = await axios.post(get_portfolio, formData);
                setData(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPortfolio();
    }, []);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        animatedRefs.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            animatedRefs.forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, []);

    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array?.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    const slides = chunkArray(data, 1);
    const slider = chunkArray(data, 1);

    const nextSlide = () => {
       
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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

   

    const isNextDisabled = currentSlide === slides.length - 1;
    const isPrevDisabled = currentSlide === 0;

    const nextSlidebtn = () => {
       
        setCurrentSlide((prev) => (prev + 1) % slider.length);
    };

    const prevSlidebtn = () => {
       
        setCurrentSlide((prev) => (prev - 1 + slider.length) % slider.length);
    };

    const isNextDisabledbtn = currentSlide === slider.length - 1;
    const isPrevDisabledbtn = currentSlide === 0;


  

    const renderHTML = (htmlString) => {
        return { __html: htmlString };
    };

    const renderLinks = (text,color="#05FD7B") => {
        const regex = /(?:https?|ftp):\/\/[^\s]+/g;
        return text.replace(regex, (match) => {
            return `<a href="${match}" target="_blank" rel="noopener noreferrer" style="color: ${color}; ">${match}</a>`;
        });
    };
    

    const handleMouseEnter = () => {
        setIsPaused(true);
      };
      
      const handleMouseLeave = () => {
        setIsPaused(false);
      };

    return (
        <>
            <h1 className="text-white lg:text-4xl font-bold text-center  text-3xl pt-16 px-4 uppercase montserrat-subrayada" id="portfolio">Our Portfolio</h1>
            <div className="container mx-auto p-5">
                <div className="relative lg:block hidden roboto-regular">
                    <div className="flex justify-center gap-10 px-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                   
                        {slides[currentSlide] && slides[currentSlide].map((card, index) => (
                           
                            <div key={index}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={` cursor-pointer portone transition duration-150 ease-in-out itemone text-white bg-primary lg:w-[80%] w-full min-h-72 p-4 rounded-lg  ${animating ? 'slide-enter' : ''}`}>
                                <div className="flex items-center gap-3">
                                    <img src={card.projectLogo} alt={card.title} className="rounded-full object-contain w-12 h-12" />
                                    <h1 className="text-lg text-secondary font-semibold text-left">{card.projectName}</h1>
                                </div>
                                <p className="text-white text-base font-normal p-4 text-justify leading-8"  dangerouslySetInnerHTML={renderHTML(renderLinks(card.projectDescription))}></p>
                            </div>
                          
                        ))}
                      
                    </div>
                    <button onClick={prevSlide}  className={`absolute left-0 top-1/2 transform -translate-y-1/2 text-black px-3 py-1 rounded-full shadow-md bg-primary `}>
                        <IoIosArrowBack size={20} />
                    </button>
                    <button onClick={nextSlide}  className={`absolute right-0 top-1/2 transform -translate-y-1/2 text-black px-3 py-1 rounded-full shadow-md bg-primary `}>
                        <IoIosArrowForward size={20} />
                    </button>
                </div>
                <div className="relative lg:hidden block my-4">
                    <div className="flex justify-center gap-3 px-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        {slider[currentSlide] && slider[currentSlide].map((card, index) => (
                            <div key={index} className={`cursor-pointer portone itemone border border-[#05FD7B]  bg-primary lg:w-80 w-full min-h-80 p-2 rounded-md ${animating ? 'slide-enter' : ''}`}>
                                <div className="flex items-center gap-2">
                                    <img src={card.projectLogo} alt={card.title} className="rounded-full object-contain w-12 h-12" />
                                    <h1 className="lg:text-lg text-base text-secondary font-semibold">{card.projectName}</h1>
                                </div>
                                <p className="text-white text-sm font-normal p-4 text-justify" dangerouslySetInnerHTML={renderHTML(renderLinks(card.projectDescription))}></p>
                            </div>
                        ))}
                    </div>
                    <button onClick={prevSlidebtn}  className={`absolute -bottom-14 transform -translate-y-1/2 text-black px-3 py-1 rounded-full shadow-md bg-primary `}>
                        <IoIosArrowBack size={20} />
                    </button>
                    <button onClick={nextSlidebtn}  className={`absolute -bottom-14 right-0 transform -translate-y-1/2 text-black px-3 py-1 rounded-full shadow-md bg-primary `}>
                        <IoIosArrowForward size={20} />
                    </button>
                </div>
                
            </div>
        </>
    );
};

export default Portfolio;
