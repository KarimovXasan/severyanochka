import React from 'react'
import { newItems } from '../assets/data'

const New = () => {
    return (
        <section>
            <div className="container">
                <div className='flex items-center justify-between py-10'>
                    <h2 className='cursor-pointer'>Новинки</h2>
                    <button>Все новинки <i class="bi bi-box-arrow-in-right"></i></button>
                </div>
                <ul className='grid grid-cols-4 gap-10 my-3'>
                    {
                        newItems.map((e, index) => {
                            return (
                                <li key={index} className='style-li'>
                                    <img src={e.img} alt="Card Image" />
                                    <span>
                                        <p>{e.price}</p>
                                        <h3>{e.description}</h3>
                                    </span>
                                    <button className='border-green-btn'>В корзину</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default New