import React from 'react'
import { box, logo, love, menu, people, search, shopping } from '../assets/data'

const Navbar = () => {
    return (
        <header className='container flex items-center space-x-10 py-4'>
            <a className='flex items-center space-x-2' href="#">
                <img width={'40px'} src={logo} alt="Logotip webpage" />
                <p className='uppercase'>Северяночка</p>
            </a>
            <nav>
                <div className='flex items-center justify-between space-x-10'>
                    <div className='flex space-x-4'>
                        {/* Btn and input  */}
                        <button className="green-btn flex !py-1.5 !px-2.5 rounded">
                            <img src={menu} alt="Menu toggle" />
                            <span>
                                Каталог
                            </span>
                        </button>
                        {/* input */}
                        <div className="input-father w-96">
                            <input type="text" placeholder="Найти товар" className="input-stl outline-none" />
                            <img className='ml-36' src={search} alt="Search img" />
                        </div>
                    </div>
                    {/* Navigation panel and User account */}
                    <div className='flex space-x-10'>
                        <div>
                            {/* navigation panel */}
                            <ul className='flex space-x-6'>
                                <li className='space-y-0.5 cursor-pointer'>
                                    <img className='mx-auto' src={love} alt="Navigation love icon" />
                                    <p>Избранное</p>
                                </li>
                                <li className='space-y-0.5 cursor-pointer'>
                                    <img className='mx-auto' src={box} alt="Navigation panel box icon" />
                                    <p>Заказы</p>
                                </li>
                                <li className='space-y-0.5 cursor-pointer'>
                                    <img className='mx-auto' src={shopping} alt="Navigation panel shopping icon" />
                                    <p>Корзина</p>
                                </li>
                            </ul>
                        </div>
                        {/* User account */}
                        <div>
                            <ul>
                                <li className='cursor-pointer flex items-center'>
                                    <img className='w-10 h-10' src={people} alt="Navigation panel people icon" />
                                    <span>
                                        Xasan
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar