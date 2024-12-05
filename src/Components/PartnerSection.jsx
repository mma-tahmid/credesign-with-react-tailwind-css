import React from 'react';

const PartnerSection = () => {

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

                            <h6 className='text-[var(--Black,#101010)] text-[16px] font-[400] leading-[27.2px]'>Partners</h6>
                        </div>

                        <h2 className=' mt-[10px] text-[44px] text-center text-[#101010] font-[700] leading-[57.2px] uppercase'>REPUTED PARTNER</h2>
                    </div>

                    <div className='mt-[50px] flex justify-between'>

                        <div className='w-[200px] h-[130px] rounded-[6px] border-[1px] border-[#FFE2D1] border-solid flex justify-center items-center '>

                            <img className='object-cover' src="/src/assets/partner1.png" alt="partner image" />
                        </div>

                        <div className='w-[200px] h-[130px] rounded-[6px] border-[1px] border-[#FFE2D1] border-solid flex justify-center items-center '>

                            <img className='object-cover' src="/src/assets/partner2.png" alt="partner image" />
                        </div>

                        <div className='w-[200px] h-[130px] rounded-[6px] border-[1px] border-[#FFE2D1] border-solid flex justify-center items-center '>

                            <img className='object-cover' src="/src/assets/partner3.png" alt="partner image" />
                        </div>

                        <div className='w-[200px] h-[130px] rounded-[6px] border-[1px] border-[#FFE2D1] border-solid flex justify-center items-center '>

                            <img className='object-cover' src="/src/assets/partner4.png" alt="partner image" />
                        </div>

                        <div className='w-[200px] h-[130px] rounded-[6px] border-[1px] border-[#FFE2D1] border-solid flex justify-center items-center '>

                            <img className='object-cover' src="/src/assets/partner5.png" alt="partner image" />
                        </div>

                        <div className='w-[200px] h-[130px] rounded-[6px] border-[1px] border-[#FFE2D1] border-solid flex justify-center items-center '>

                            <img className='object-cover' src="/src/assets/partner6.png" alt="partner image" />
                        </div>


                    </div>



                </div>
            </div>

        </>
    );
};

export default PartnerSection;