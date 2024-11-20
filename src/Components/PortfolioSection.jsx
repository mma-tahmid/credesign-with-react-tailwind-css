import React from 'react';

const PortfolioSection = () => {

    return (

        <>

            <div className='my-[130px]'>

                <div className='main-container'>

                    <div>

                        <div className='flex items-center justify-center gap-x-[10px]'>
                            <div className='w-[16px] h-[16px] rounded-[50%] border-[1px] border-solid border-[#010101] flex justify-center items-center'>
                                <div className='w-[8px] h-[8px] rounded-[50%] border-[1px] border-solid border-[#010101]'>

                                </div>
                            </div>

                            <h6 className='text-[var(--Black,#101010)] text-[16px] font-[400] leading-[27.2px]'>My Portfolio</h6>
                        </div>

                        <h2 className=' mt-[10px] text-[44px] text-center text-[#101010] font-[700] leading-[57.2px] uppercase'>VISIT MY PORTFOLIO</h2>
                    </div>


                    <div className='mt-[50px] flex flex-wrap justify-between gap-[24px] '>

                        <div className='w-[424px] h-[514px] rounded-[6px] bg-[red]'>
                            <img className='object-cover w-[100%] h-[100%]' src="/src/assets/portfolio_image_1.jpg" alt="" />
                        </div>

                        <div className='w-[424px] h-[514px] rounded-[6px] bg-[red]'>
                            <img className='object-cover w-[100%] h-[100%]' src="/src/assets/portfolio_image_1.jpg" alt="" />
                        </div>

                        <div className='w-[424px] h-[514px] rounded-[6px] bg-[red]'>
                            <img className='object-cover w-[100%] h-[100%]' src="/src/assets/portfolio_image_1.jpg" alt="" />
                        </div>

                        <div className='w-[424px] h-[514px] rounded-[6px] bg-[red]'>
                            <img className='object-cover w-[100%] h-[100%]' src="/src/assets/portfolio_image_1.jpg" alt="" />
                        </div>

                        <div className='w-[424px] h-[514px] rounded-[6px] bg-[red]'>
                            <img className='object-cover w-[100%] h-[100%]' src="/src/assets/portfolio_image_1.jpg" alt="" />
                        </div>

                        <div className='w-[424px] h-[514px] rounded-[6px] bg-[red]'>
                            <img className='object-cover w-[100%] h-[100%]' src="/src/assets/portfolio_image_1.jpg" alt="" />
                        </div>

                    </div>

                </div>
            </div>

        </>
    );
};

export default PortfolioSection;