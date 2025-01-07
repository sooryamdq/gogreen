import { useEffect, useRef, useState } from "react";



const Services = () => {
    // const [animatedStates, setAnimatedStates] = useState([false, false, false, false, false, false]);
    // const animatedRefs = useRef([]);

    // useEffect(() => {
    //     const options = {
    //         root: null,
    //         rootMargin: "0px",
    //         threshold: 0.5 // Trigger when half of the element is visible
    //     };

    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry, index) => {
    //             if (entry.isIntersecting) {
    //                 setAnimatedStates(prevState => {
    //                     const newState = [...prevState];
    //                     newState[index] = true;
    //                     return newState;
    //                 });
    //                 observer.unobserve(entry.target); // Stop observing once the element is visible
    //             }
    //         });
    //     }, options);

    //     animatedRefs.current.forEach((ref) => {
    //         if (ref.current) {
    //             observer.observe(ref.current);
    //         }
    //     });

    //     return () => {
    //         animatedRefs.current.forEach((ref) => {
    //             if (ref.current) {
    //                 observer.unobserve(ref.current);
    //             }
    //         });
    //     };
    // }, []);


    return (
        <>
            {/* for desktop */}

            <p className="text-white lg:text-4xl font-bold text-3xl text-center my-8 uppercase montserrat-subrayada" id="services">Our Services</p>
            <div className="">
                <div className="flex flex-wrap justify-center gap-5">
               



                    <div className={`lg:w-96 w-[80%] h-80 border border-primary  bg-white p-4 rounded-md relative flex flex-col gap-8`}>
                        <h1 className="lg:text-lg text-base font-bold capitalize break-all text-primary  montserrat-subrayada ">Hybrid apps and websites</h1>
                        <p className="text-primary lg:text-base text-sm font-normal leading-7 roboto-regular  text-justify">Our unique approach involves crafting hybrid apps and websites that seamlessly integrate web2 and web3 elements. This ensures a smooth transition for businesses, allowing them to harness the benefits of both worlds.</p>
                        <div className="border border-[#90EE90] bg-secondary p-4 w-14 h-14 rounded-md text-center absolute top-2 right-2 flex justify-center items-center text-primary text-2xl">1</div>
                    </div>

                    <div className={`lg:w-96 w-[80%] h-80 border border-primary p-4 rounded-md  bg-white relative flex flex-col gap-8`}>
                        <h1 className="lg:text-lg text-base font-bold  capitalize break-all text-primary  montserrat-subrayada">Web3 Development</h1>
                        <p className="text-primary lg:text-base text-sm font-normal leading-7 roboto-regular text-justify">GoGreenVerz specializes in developing innovative web3 applications and websites. Leveraging our expertise in multichain platforms, we create robust, decentralized solutions that elevate your digital presence.</p>
                        <div className="border border-[#90EE90] bg-secondary p-4 w-14 h-14 rounded-md text-center absolute top-2 right-2 flex justify-center items-center text-primary text-2xl">2</div>
                    </div>


                    <div className={`lg:w-96 w-[80%] h-80 border border-primary rounded-md p-4  bg-white relative flex flex-col gap-8`}>
                        <h1 className="lg:text-lg text-base font-bold  capitalize text-primary  montserrat-subrayada">Multichain  Mastery</h1>
                        <p className="text-primary lg:text-base text-sm font-normal leading-7 roboto-regular text-justify">Embracing the future of decentralized technologies, we specialize in working with multichain platforms. Whether it’s Ethereum, Binance Smart Chain, or other emerging networks, we have the proficiency to navigate the complexities and harness the advantages of each.</p>
                        <div className="border border-[#90EE90] bg-secondary p-4 w-14 h-14 rounded-md text-center absolute top-2 right-2 flex justify-center items-center text-primary text-2xl">3</div>
                    </div>
                    <div className={`lg:w-96 w-[80%] h-80 border border-primary rounded-md p-4  bg-white relative flex flex-col gap-8`}>
                        <h1 className="lg:text-lg text-base font-bold capitalize text-primary  montserrat-subrayada">Client-Centric Approach</h1>
                        <p className="text-primary lg:text-base text-sm font-normal leading-7 roboto-regular text-justify">At the heart of our services is a client-centric approach. We work closely with businesses, understanding their unique needs and tailoring solutions that align with their goals. Your success is our success, and we’re dedicated to ensuring that every project is a transformative journey towards a sustainable digital future.</p>
                        <div className="border border-[#90EE90] bg-secondary p-4 w-14 h-14 rounded-md text-center absolute top-2 right-2 flex justify-center items-center text-primary text-2xl">4</div>
                    </div>


                    <div className={`lg:w-96 w-[80%] h-80 border border-primary rounded-md p-4  bg-white relative card_five flex flex-col gap-8`}>
                        <h1 className="lg:text-lg text-base font-bold  capitalize text-primary  montserrat-subrayada">Digital Marketing</h1>
                        <p className="text-primary lg:text-base text-sm font-normal leading-7 roboto-regular text-justify ">At the core of our digital marketing services lies a client-centric approach. We delve deep into your business’s DNA, crafting strategies that resonate with your audience and drive measurable results. Your triumph in the digital realm is our paramount focus, and we’re committed to propelling your brand to new heights.</p>
                        <div className="border border-[#90EE90] bg-secondary p-4 w-14 h-14 rounded-md text-center absolute top-2 right-2 flex justify-center items-center text-primary text-2xl">5</div>
                    </div>
                    <div className={`lg:w-96 w-[80%] h-80 border border-primary rounded-md p-4  bg-white  card_six relative flex flex-col gap-8`}>
                        <h1 className="lg:text-lg text-base break-all font-bold capitalize text-primary  montserrat-subrayada">Consultation and <span className="block lg:inline">Guidance</span></h1>
                        <p className="text-primary lg:text-base text-sm font-normal leading-7 roboto-regular text-justify">We understand that the journey to web3 can be complex. That’s why our team of experts provides personalized consultations, guiding you through the entire process. From conceptualization to execution, we’re to make your transition seamless and efficient.</p>
                        <div className="border border-[#90EE90] bg-secondary p-4 w-14 h-14 rounded-md text-center absolute top-2 right-2 flex justify-center items-center text-primary text-2xl">6</div>
                    </div>

                </div>
            </div>
          

        </>
    );
};

export default Services;
