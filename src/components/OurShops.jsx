import React from 'react'

const OurShops = () => {
    return (
        <section>
            <div className="container my-10">
                <h2>Наши магазины</h2>
                <div className='flex items-center gap-8'>
                    <button className='light-green-btn hover:green-btn'>п.Щельяюр</button>
                    <button className='light-green-btn hover:green-btn'>д.Вертеп</button>
                    <button className='light-green-btn hover:green-btn'>с.Краснобор</button>
                    <button className='light-green-btn hover:green-btn'>д.Диюр</button>
                </div>
                <div className='my-6'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d539.7063484216264!2d69.5909890955396!3d40.86563345522975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae320bd9403d3f%3A0x29146afd678180c9!2z0J7QudC00LjQvQ!5e1!3m2!1sru!2s!4v1734342254895!5m2!1sru!2s" className='w-full h-96 rounded-xl' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}

export default OurShops