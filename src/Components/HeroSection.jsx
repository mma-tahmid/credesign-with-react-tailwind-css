import React from 'react';

const HeroSection = () => {

    return (

        <>
            {/* background: var(--Gradint-Color, linear-gradient(256deg, rgba(255, 195, 152, 0.20) 26.56%, rgba(255, 234, 190, 0.30) 100%)); */}
            <div className='bg-[linear-gradient(256deg,_rgba(255,_195,_152,_0.20)_26.56%,_rgba(255,_234,_190,_0.30)_100%)]'>


                <div className='main-container'>

                    <div className='flex justify-between items-center'>

                        <div className='w-[678px]'>

                            <div className='flex items-center gap-x-[10px]'>
                                <div className='w-[16px] h-[16px] rounded-[50%] border-[1px] border-solid border-[#010101] flex justify-center items-center'>
                                    <div className='w-[8px] h-[8px] rounded-[50%] border-[1px] border-solid border-[#010101]'>

                                    </div>
                                </div>

                                <h6 className='text-[var(--Black,#101010)] text-[16px] font-[400] leading-[27.2px]'>I AM DESIGNER</h6>
                            </div>

                            <h1 className='mt-[10px] text-[var(--Black, #101010)] text-[70px] font-[700] leading-[95px] '>Creative Design and Web Solutions </h1>

                            <p className='mt-[46px] max-w-[649px] text-[18px] text-[#606060] font-[400] leading-[30.6px]'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et.</p>

                            <button className='mt-[50px] navbar-button-text rounded-[6px] bg-[#FF6B00] px-[32px] py-[15px]'> Download My CV </button>


                        </div>

                        {/* image width */}
                        <div className='w-[606px] h-[849px] overflow-hidden'>
                            <img className='w-[100%] h-[100%] object-cover' src="/src/assets/hero_image.jpg" alt="hero_image" />
                        </div>

                    </div>

                </div>


            </div>

        </>
    );
};

export default HeroSection;