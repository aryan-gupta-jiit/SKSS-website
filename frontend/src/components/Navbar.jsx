import React, { useState } from 'react'
import logo from '../assets/logo-1.png'
import profile_icon from '../assets/profile_icon.png'
import search_icon from '../assets/search_icon.png'
import cart_icon from '../assets/cart_icon.png'
import menu_icon from '../assets/menu_icon.png'
import dropdown_icon from '../assets/dropdown_icon.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    return (
        <div className='flex justify-between items-center py-5 font-medium mr-2'>
            <img src={logo} alt="" className='w-50' />
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection'>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img src={search_icon} alt="" className='w-5 cursor-pointer' />

                <div className='group relative'>
                    <img src={profile_icon} alt="" className='w-5 cursor-pointer' />

                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>


                <Link to='/cart' className='relative'>
                    <img src={cart_icon} alt="" className='w-5' />
                    <p className='absolute bottom-[-5px] right-[-5px] text-center w-4 bg-black text-white rounded-full text-[8px] leading-4 aspect-square'>10</p>
                </Link>

                <img onClick={() => setVisible(true)} src={menu_icon} alt="" className='w-5 cursor-pointer sm:hidden' />

            </div>

             {/* sidebar menu for small screen */}

            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink to='/' className='py-2 pl-6 border' onClick={() => setVisible(false)}>HOME</NavLink>
                    <NavLink to='/collection' className='py-2 pl-6 border' onClick={() => setVisible(false)}>COLLECTIONS</NavLink>
                    <NavLink to='/about' className='py-2 pl-6 border' onClick={() => setVisible(false)}>ABOUT</NavLink>
                    <NavLink to='/contact' className='py-2 pl-6 border' onClick={() => setVisible(false)}>CONTACT</NavLink>
                </div>
            </div>

        </div>




    )
}

export default Navbar