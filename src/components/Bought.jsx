import React from 'react'
import { boughtBefore } from '../assets/data'

const Bought = () => {
  return (
    <section>
        <div className="container">
            <div className="flex items-center justify-between py-10">
                <h2 className="cursor-pointer">Покупали раньше</h2>
                <button>Все покупки <i class="bi bi-box-arrow-in-right"></i></button>
            </div>
            {/* Bought data.js is written to the main component */}
            <ul className='grid grid-cols-4 gap-10 my-3'>
              {boughtBefore.map((r,each)=>{
                return(
                  <li key={each} className='style-li'>
                    <img src={r.img} alt="Image bought data" />
                    <span>
                      <p>{r.price}₽</p>
                      <h3>{r.description}</h3>
                    </span>
                    <button className='border-green-btn'>В корзину</button>
                  </li>
                )
              })}
            </ul>
        </div>
    </section>
  )
}

export default Bought