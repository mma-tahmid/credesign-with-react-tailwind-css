import React from 'react';
import { IoMdCheckboxOutline } from "react-icons/io";


const AboutSection = () => {

    return (

        <>

            <div className='bg-[#fff] mt-[128px]'>

                <div className='main-container'>

                    <div className='flex items-center justify-between'>

                        {/* 1st Part */}

                        <div className='w-[560px] h-[768px] overflow-hidden rounded-[6px] '>
                            <img className='w-[100%] h-[100%] object-cover' src="/src/assets/about_image.jpg" alt="about_img" />

                        </div>

                        {/* 2nd Part */}
                        <div className='w-[645px]'>

                            <div className='flex items-center gap-x-[10px]'>
                                <div className='w-[16px] h-[16px] rounded-[50%] border-[1px] border-solid border-[#010101] flex justify-center items-center'>
                                    <div className='w-[8px] h-[8px] rounded-[50%] border-[1px] border-solid border-[#010101]'>

                                    </div>
                                </div>

                                <h6 className='text-[var(--Black,#101010)] text-[16px] font-[400] leading-[27.2px]'>About Me</h6>
                            </div>


                            <h2 className='mt-[10px] max-w-[392px] text-[44px] text-[var(--Black, #101010)] font-[700] leading-[57.2px]'> I Can Design Anything You Want </h2>

                            <p className=' mt-[20px] text-[16px] text-[ color: var(--Later-Text, #606060)] font-[400] leading-[27.2px]'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.</p>
                            {/* mt-[50px] */}

                            <div className='mt-[50px] flex items-center gap-x-[30px]'>
                                <div className='flex items-center gap-x-[10px] '>
                                    <div>
                                        <img src="/src/assets/check_icon.png" alt="check_icon" />
                                    </div>

                                    <div>
                                        <span className='text-[#FF6B00] text-[21px] font-[700]'> 350+ </span>
                                        <h5 className='text-[21px] text-[#101010] font-[500] leading-[20px]'> Complete Project </h5>
                                    </div>
                                </div>

                                <div className='flex items-center gap-x-[10px] '>
                                    <div>
                                        <img src="/src/assets/clock_icon.png" alt="check_icon" />
                                    </div>

                                    <div>
                                        <span className='text-[#FF6B00] text-[21px] font-[700]'> 16+ </span>
                                        <h5 className='text-[21px] text-[#101010] font-[500] leading-[20px]'> Year of experience </h5>
                                    </div>
                                </div>

                            </div>

                            <div className='flex items-center gap-x-[10px] mt-[55px]'>
                                <IoMdCheckboxOutline className='w-[14px] h-[14px] text-[#FF6B00]' />

                                <h3 className='text-[16px] text-[#000] font-[400] leading-[150%]'>Work simple and cline design</h3>
                            </div>

                            <div className='flex items-center gap-x-[10px] mt-[20px]'>
                                <IoMdCheckboxOutline className='w-[14px] h-[14px] text-[#FF6B00]' />

                                <h3 className='text-[16px] text-[#000] font-[400] leading-[150%]'>New idea and user friendly design</h3>
                            </div>

                            <button className='mt-[50px] navbar-button-text rounded-[6px] bg-[#FF6B00] px-[32px] py-[15px]'> Download My CV </button>




                        </div>
                    </div>


                </div>

            </div>


        </>
    );
};

export default AboutSection;