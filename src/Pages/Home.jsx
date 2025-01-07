import { useState, useEffect, useRef } from 'react';
import banner from "../assets/Frame.png";
import chart from "../assets/Group 3.png";
import img from "../assets/textimg.png";

const Home = () => {
    
    // const [isVisible, setIsVisible] = useState(false);
    // const animatedRef = useRef(null);


    // useEffect(() => {
    //     const options = {
    //         root: null,
    //         rootMargin: "0px",
    //         threshold: 0.5 // Trigger when half of the element is visible
    //     };

    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 setIsVisible(true);
    //                 observer.unobserve(entry.target); // Stop observing once the element is visible
    //             }
    //         });
    //     }, options);

    //     if (animatedRef.current) {
    //         observer.observe(animatedRef.current);
    //     }

    //     return () => {
    //         if (animatedRef.current) {
    //             observer.unobserve(animatedRef.current);
    //         }
    //     };
    // }, []);
    return (
        <div className='flex flex-col z-20 ' id="home">
            <div className="flex lg:flex-row flex-col justify-around items-center px-4 container ">
                <div className='content lg:py-0 py-8'>
                <div className="flex flex-col text-left gap-5">
                    <h1 className="font-bold  text-white md:text-5xl text-xl">Bridging Innovation: Where <br></br><span className="text-primary">Web 2</span> Meets<span className="text-primary"> Web 3 </span></h1>
                    <p className="lg:text-lg text-base text-white">Elevate your business with cleantech solutions for a brighter future. <br></br>Boost your online reach with GoGreenVerz sustainability-driven digital expertise.</p>
                    <div className="flex gap-3">
                    <a href="#contact" onClick={() => scrollToSection("contact")}>
                        <button className="bg-primary text-white px-2 py-1 rounded-md font-semibold">Contact us</button>
                        </a>
                        <a href="#about" onClick={() => scrollToSection("about")}>
                        <button className=" border border-primary bg-transparent px-2 py-1 rounded-md text-white">Learn more</button>
                        </a>
                    </div>
                </div>
                </div>
             
                <div className='image'>
                    <img src={banner} alt="GoGreenVerz" />
                </div>
            </div>
            <div>
                <img src={img} alt="GoGreenVerz" className="px-4 object-contain" />
            </div>
        </div>
    );
}

export default Home;
