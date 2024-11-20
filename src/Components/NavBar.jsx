import React from 'react';
import { Link } from 'react-router-dom';

import "../css/navbar.css"

const Navbar = () => {

    return (

        <>
            <div className='bg-[#fff] py-[25px]'>

                <div className="main-container">


                    <div className='flex justify-between items-center'>

                        <img className='object-fit' src="/src/assets/logo.png" alt="" />

                        {/* Menu Item */}
                        <ul className='custom-navbar-text flex gap-x-[32px]'>
                            <Link> <li> Home </li> </Link>
                            <Link> <li> About </li> </Link>
                            <Link> <li> Services </li> </Link>
                            <Link> <li> Resume </li> </Link>
                            <Link> <li> Portfolio </li> </Link>
                            <Link> <li> Testimonial </li> </Link>
                            <Link> <li> Blog </li> </Link>
                        </ul>

                        <button className='navbar-button-text rounded-[6px] bg-[#FF6B00] px-[32px] py-[15px]'> Contat us </button>
                    </div>

                </div>

            </div>

        </>
    );
};

export default Navbar;