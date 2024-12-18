import React from 'react'
import { insta, logo, ok, phone, watsap, wk } from '../assets/data'

const Footer = () => {
    return (
        <footer className='bg-[#F9F4E2]'>
            <div className="container flex items-center justify-between">
                <div className='flex items-center gap-2 py-5'>
                    <a href="#">
                        <img className='w-16 h-11' src={logo} alt="Logotip footer" />
                    </a>
                    <ul className='flex space-x-4'>
                        <li><a href="#">О компании</a></li>
                        <li><a href="#">Контакты</a></li>
                        <li><a href="#">Вакансии</a></li>
                        <li><a href="#">Статьи</a></li>
                        <li><a href="#">Политика обработки персональных данных</a></li>
                    </ul>
                </div>
                <div className='flex items-center gap-10'>
                    {/* social network */}
                    <ul className='flex space-x-3 items-center'>
                        <li>
                            <a href="#"><img src={insta} alt="Instagram icons" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={wk} alt="Wkontakte icons" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={watsap} alt="Watsap icons" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={ok} alt="ok icons" /></a>
                        </li>
                    </ul>
                    {/* telephone nuber and icons */}
                    <ul className='flex'>
                        <li><a href="#"><img src={phone} alt="Telephone icons" /></a></li>
                        <li><a href="#">+998-90-005-1342</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer