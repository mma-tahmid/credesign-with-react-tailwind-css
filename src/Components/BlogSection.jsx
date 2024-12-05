import React from 'react';
import { Link } from 'react-router-dom';

import { FaArrowRight } from "react-icons/fa";

const BlogSection = () => {

    return (

        <>

            <div className='mb-[130px]'>

                <div className='main-container'>

                    <div>

                        <div className='flex items-center justify-center gap-x-[10px]'>
                            <div className='w-[16px] h-[16px] rounded-[50%] border-[1px] border-solid border-[#010101] flex justify-center items-center'>
                                <div className='w-[8px] h-[8px] rounded-[50%] border-[1px] border-solid border-[#010101]'>

                                </div>
                            </div>

                            <h6 className='text-[var(--Black,#101010)] text-[16px] font-[400] leading-[27.2px]'>My Blog</h6>
                        </div>

                        <h2 className=' mt-[10px] text-[44px] text-center text-[#101010] font-[700] leading-[57.2px] uppercase'>LATEST BLOG</h2>
                    </div>


                    <div className='mt-[50px] grid grid-cols-3 justify-between gap-y-6'>

                        <div className='w-[424px] rounded-[6px] overflow-hidden'>
                            {/* img */}
                            <div className='h-[300px] w-[100%] overflow-hidden  '>
                                <img className='w-[100%] h-[100%] object-cover' src="/src/assets/blog1.jpg" alt="blog_img" />
                            </div>

                            {/* Content */}
                            <div className='pt-[30px] pr-[40px] pl-[30px] pb-[26px] border-solid border-[1px] border-[#FFE2D1] border-t-0 rounded-t-[0px] rounded-r-[0px] rounded-b-[6px] rounded-l-[6px]'>
                                <h6 className='text-[16px] text-[#6F6B80] font-[400] leading-[26px] '>20 January, 2023</h6>
                                <h4 className='mt-[20px] text-[24px] text-[#101010] font-[500] leading-[31.2px]'>Become a UX/UI Designer With Career Foundry.</h4>

                                {/* Link is a inline element */}
                                <Link className='mt-[26px] inline-flex items-center gap-x-[10px] text-[16px] text-[#FF6B00] font-[600] leading-[26px]'>Read More <span className='inline'> <FaArrowRight /> </span></Link>

                            </div>

                        </div>

                        <div className='w-[424px] rounded-[6px] overflow-hidden'>
                            {/* img */}
                            <div className='h-[300px] w-[100%] overflow-hidden  '>
                                <img className='w-[100%] h-[100%] object-cover' src="/src/assets/blog2.jpg" alt="blog_img" />
                            </div>

                            {/* Content */}
                            <div className='pt-[30px] pr-[40px] pl-[30px] pb-[26px] border-solid border-[1px] border-[#FFE2D1] border-t-0 rounded-t-[0px] rounded-r-[0px] rounded-b-[6px] rounded-l-[6px]'>
                                <h6 className='text-[16px] text-[#6F6B80] font-[400] leading-[26px] '>20 January, 2023</h6>
                                <h4 className='mt-[20px] text-[24px] text-[#101010] font-[500] leading-[31.2px]'>Become a UX/UI Designer With Career Foundry.</h4>

                                {/* Link is a inline element */}
                                <Link className='mt-[26px] inline-flex items-center gap-x-[10px] text-[16px] text-[#FF6B00] font-[600] leading-[26px]'>Read More <span className='inline'> <FaArrowRight /> </span></Link>

                            </div>

                        </div>

                        <div className='w-[424px] rounded-[6px] overflow-hidden'>
                            {/* img */}
                            <div className='h-[300px] w-[100%] overflow-hidden  '>
                                <img className='w-[100%] h-[100%] object-cover' src="/src/assets/blog3.jpg" alt="blog_img" />
                            </div>

                            {/* Content */}
                            <div className='pt-[30px] pr-[40px] pl-[30px] pb-[26px] border-solid border-[1px] border-[#FFE2D1] border-t-0 rounded-t-[0px] rounded-r-[0px] rounded-b-[6px] rounded-l-[6px]'>
                                <h6 className='text-[16px] text-[#6F6B80] font-[400] leading-[26px] '>20 January, 2023</h6>
                                <h4 className='mt-[20px] text-[24px] text-[#101010] font-[500] leading-[31.2px]'>Become a UX/UI Designer With Career Foundry.</h4>

                                {/* Link is a inline element */}
                                <Link className='mt-[26px] inline-flex items-center gap-x-[10px] text-[16px] text-[#FF6B00] font-[600] leading-[26px]'>Read More <span className='inline'> <FaArrowRight /> </span></Link>

                            </div>

                        </div>





                    </div>


                </div>

            </div>


        </>
    );
};

export default BlogSection;