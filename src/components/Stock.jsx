import React from 'react'
import { stockDt } from '../assets/data'

const Stock = () => {
    return (
        <section>
            <div className="container">
                <div className='flex items-center justify-between py-10'>
                    <h2 className='cursor-pointer'>Акции</h2>
                    <button>Все акции <i class="bi bi-box-arrow-in-right"></i></button>
                </div>
                {/* Stock data.js is written to the main component */}
                <ul className='grid grid-cols-4 gap-10 my-3'>
                    {
                        stockDt.map((i, action) => {
                            return (
                                <li key={action} className='style-li'>
                                    <img className='mx-auto' src={i.img} alt="Card Image" />
                                    <span>
                                        <p>{i.price}₽</p>
                                        <h3>
                                            {i.description}
                                        </h3>
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

export default Stock