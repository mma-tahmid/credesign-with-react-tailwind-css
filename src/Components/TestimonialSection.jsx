import React from 'react';

const TestimonialSection = () => {

    return (

        <>
            <div className='mb-[179px]'>
                <div className='main-container'>

                    <div>

                        <div className='flex items-center justify-center gap-x-[10px]'>
                            <div className='w-[16px] h-[16px] rounded-[50%] border-[1px] border-solid border-[#010101] flex justify-center items-center'>
                                <div className='w-[8px] h-[8px] rounded-[50%] border-[1px] border-solid border-[#010101]'>

                                </div>
                            </div>

                            <h6 className='text-[var(--Black,#101010)] text-[16px] font-[400] leading-[27.2px]'>Testimonial</h6>
                        </div>

                        <h2 className=' mt-[10px] text-[44px] text-center text-[#101010] font-[700] leading-[57.2px] uppercase'>Client Feedback</h2>
                    </div>


                    <div className='mt-[42px] flex justify-between'>

                        {/* full Content  opacity 0.5 is for background color*/}
                        <div className='w-[424px] px-[30px] pt-[40px] pb-[62px] bg-[rgba(255,245,239,0.5)] rounded-[8px] hover:bg-[#FFF5EF] transition-all duration-[0.3s] ease-linear'>

                            <div className='flex items-center gap-x-[25px]'>
                                {/* for image */}
                                <div className='w-[75px] h-[75px] rounded-[50%] overflow-hidden'>
                                    <img className='object-cover w-[100%] h-[100%]' src="/src/assets/testimonial 1.jpg" alt="testimonial_image" />
                                </div>

                                <div>
                                    <h3 className='text-[24px] text-[#101010] font-[500] leading-[31.2px]'>Siam Talukder</h3>
                                    <h6 className='text-[16px] text-[#606060] font-[400] leading-[27.2px]'>CTO, Xyz Group</h6>
                                </div>

                            </div>

                            <p className='mt-[20px] text-[16px] text-[#606060] font-[400] leading-[27.2px] '>
                                “Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.
                            </p>

                        </div>

                        <div className='w-[424px] px-[30px] pt-[40px] pb-[62px] bg-[rgba(255,245,239,0.5)] rounded-[8px] hover:bg-[#FFF5EF] transition-all duration-[0.3s] ease-linear'>

                            <div className='flex items-center gap-x-[25px]'>
                                {/* for image */}
                                <div className='w-[75px] h-[75px] rounded-[50%] overflow-hidden'>
                                    <img className='object-cover w-[100%] h-[100%]' src="/src/assets/testimonial 1.jpg" alt="testimonial_image" />
                                </div>

                                <div>
                                    <h3 className='text-[24px] text-[#101010] font-[500] leading-[31.2px]'>Siam Talukder</h3>
                                    <h6 className='text-[16px] text-[#606060] font-[400] leading-[27.2px]'>CTO, Xyz Group</h6>
                                </div>

                            </div>

                            <p className='mt-[20px] text-[16px] text-[#606060] font-[400] leading-[27.2px] '>
                                “Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.
                            </p>

                        </div>

                        <div className='w-[424px] px-[30px] pt-[40px] pb-[62px] bg-[rgba(255,245,239,0.5)] rounded-[8px] hover:bg-[#FFF5EF] transition-all duration-[0.3s] ease-linear'>

                            <div className='flex items-center gap-x-[25px]'>
                                {/* for image */}
                                <div className='w-[75px] h-[75px] rounded-[50%] overflow-hidden'>
                                    <img className='object-cover w-[100%] h-[100%]' src="/src/assets/testimonial 1.jpg" alt="testimonial_image" />
                                </div>

                                <div>
                                    <h3 className='text-[24px] text-[#101010] font-[500] leading-[31.2px]'>Siam Talukder</h3>
                                    <h6 className='text-[16px] text-[#606060] font-[400] leading-[27.2px]'>CTO, Xyz Group</h6>
                                </div>

                            </div>

                            <p className='mt-[20px] text-[16px] text-[#606060] font-[400] leading-[27.2px] '>
                                “Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, mak it over 2000 years old.
                            </p>

                        </div>

                    </div>




                </div>
            </div>

        </>
    );
};

export default TestimonialSection;