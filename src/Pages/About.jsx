import { useEffect, useRef, useState } from "react";
import arrow from "../assets/arrow.png";
import ScrollAnimation from "../Components/ScrollAnimation";


const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const animatedRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5 // Trigger when half of the element is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Stop observing once the element is visible
                }else {
                    setIsVisible(false); // Reset isVisible when the element is scrolled out of view
                }
            });
        }, options);

        if (animatedRef.current) {
            observer.observe(animatedRef.current);
        }

        return () => {
            if (animatedRef.current) {
                observer.unobserve(animatedRef.current);
            }
        };
    }, []);

    return (
        <div className="flex lg:flex-row flex-col justify-around items-center text-white py-20 lg:px-0 px-8 roboto-regular" id="about">
            <div>
                
                <h1 ref={animatedRef} className={`md:text-2xl text-2xl my-4 text-center text-[#F0F0F0] font-Roboto`}>OUR STORY</h1>
                <div  ref={animatedRef} className={`lg:w-[450px] w-full h-64 bg-[#F0F0F0] text-[#006400] rounded-md p-4 my-4 text-base leading-10 flex justify-center items-center ${isVisible ? 'boxone' : ''}`}>
                    <p className="lg:text-base text-xs text-[#006400]  leading-6 text-justify   font-Roboto">GoGreenVerz Tech Solutions leads the fusion of web2 and web3, creating hybrid solutions on multichain platforms. Start your sustainable tech journey with us. We're dedicated to transforming digital landscapes by seamlessly integrating established web technologies with the latest advancements, guiding businesses through a progressive digital journey.</p>
                </div>
               
            </div>
            
            <div ref={animatedRef} className="flex justify-center items-center arrow">
                <img src={arrow} alt="gogreen" />
            </div>
           
            
            <div>
          
                <div
                    ref={animatedRef}
                    className={`lg:w-[450px] w-full text-[#006400]  h-64 bg-[#F0F0F0] rounded-md p-4 my-4 text-xl  leading-10 flex justify-center items-center ${isVisible ? 'boxtwo' : ''}`}
                >
                    <p className="lg:text-base text-xs text-[#006400] leading-6 text-justify">At GoGreenVerz, sustainability is at the heart of all we do. From development to deployment, we prioritize eco-friendly practices, ensuring a positive impact on the planet. Partner with us for your technology needs, committed to a brighter tomorrow.</p>
                </div>
                <h1 className={`md:text-2xl text-2xl text-center text-[#F0F0F0]`}>WHY CHOOSE US ?</h1>
            </div>
           
        </div>
    );
};

export default About;
