import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";

const ContactSection = () => {

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

                            <h6 className='text-[var(--Black,#101010)] text-[16px] font-[400] leading-[27.2px]'>My Contact</h6>
                        </div>

                        <h2 className=' mt-[10px] text-[44px] text-center text-[#101010] font-[700] leading-[57.2px] uppercase'>I WANT TO HEAR FROM YOU</h2>
                    </div>


                    <div className=' mt-[50px] flex justify-between'>
                        {/* contact Form */}

                        <div className='w-[872px]'>

                            <form action="">

                                <div className='flex flex-wrap justify-between gap-y-[30px] '>
                                    <input className='w-[424px] border-[1px] border-solid border-[#FFE2D1] rounded-[6px] p-[20px] outline-none' type="text" placeholder='Your Name' />

                                    <input className='w-[424px] border-[1px] border-solid border-[#FFE2D1] rounded-[6px] p-[20px] outline-none' type="email" placeholder='Your Email' />

                                    <input className='w-[424px] border-[1px] border-solid border-[#FFE2D1] rounded-[6px] p-[20px] outline-none' type="text" placeholder='Your Phone' />

                                    <input className='w-[424px] border-[1px] border-solid border-[#FFE2D1] rounded-[6px] p-[20px] outline-none' type="text" placeholder='Subject' />
                                </div>

                                <div>
                                    <textarea className='mt-[30px] w-[872px] h-[194px] border-[1px] border-solid border-[#FFE2D1] rounded-[6px] p-[20px] outline-none' placeholder='Your Message'>


                                    </textarea>
                                </div>

                                <button type='submit' className='mt-[50px] bg-[#FF6B00] px-[32px] py-[15px] text-[21px] text-[#FFF] font-[500] leading-[20px] rounded-[6px]'> Send Me Message </button>

                            </form>

                        </div>

                        {/* Contact Info */}

                        <div className='w-[368px] '>

                            <div className='flex items-center gap-x-[20px]'>

                                <div className='w-[58px] h-[58px] bg-[#FFF5EF] rounded-[6px] flex justify-center items-center'>
                                    <IoLocationOutline className='w-[28px] h-[34px] text-[#FF6B00]' />
                                </div>

                                <div>

                                    <h4 className='text-[24px] text-[#101010] font-[500] leading-[31.2px] '>Address</h4>
                                    <h6 className='text-[16px] text-[#606060] font-[400] leading-[27.2px] '>202 Dog Hill Lane Beloit, KS 67420</h6>
                                </div>

                            </div>

                            <div className=' mt-[57px] flex items-center gap-x-[20px]'>

                                <div className='w-[58px] h-[58px] bg-[#FFF5EF] rounded-[6px] flex justify-center items-center'>
                                    <LuPhoneCall className='w-[28px] h-[34px] text-[#FF6B00]' />
                                </div>


                                <div>

                                    <h4 className='text-[24px] text-[#101010] font-[500] leading-[31.2px] '>Phone</h4>
                                    <h6 className='text-[16px] text-[#606060] font-[400] leading-[27.2px] '>+01589634755 </h6>
                                </div>

                            </div>

                            <div className='mt-[57px] flex items-center gap-x-[20px]'>

                                <div className='w-[58px] h-[58px] bg-[#FFF5EF] rounded-[6px] flex justify-center items-center'>
                                    <TfiEmail className='w-[28px] h-[34px] text-[#FF6B00]' />
                                </div>


                                <div>

                                    <h4 className='text-[24px] text-[#101010] font-[500] leading-[31.2px] '>Email</h4>
                                    <h6 className='text-[16px] text-[#606060] font-[400] leading-[27.2px] '>credesign@gmail.com</h6>
                                </div>

                            </div>


                        </div>
                    </div>

                </div>

            </div>

        </>
    );
};

export default ContactSection;