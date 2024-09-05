import React, { useEffect } from 'react'
import './Main.css'
import book from '../../assets/book-cover.jpg'
import selo from '../../assets/selo.png'

const Main = () => {
    useEffect(() => {
        ScrollReveal().reveal('.containers', {
            duration: 3000,
            distance: '500px',
            easing: 'ease-in-out',
            origin:'left',
            interval: 300,
            opacity: 0,
            reset: true,
        })
    })

    useEffect(() => {
        ScrollReveal().reveal('.left-container', {
            duration: 4000,
            distance: '700px',
            easing: 'ease-in-out',
            origin:'left',
            interval: 300,
            opacity: 0,
            reset: true,
        })
    })
    
    

  return (
    <main className='containers'>
        <section className='left-container'>
            <h2>Uma história sobre amor, redenção e perdão.</h2>
            <button className='buttons'><a href="https://www.wattpad.com/story/256348462-when-the-weather-is-fine" target='_blank' rel='noopener noreferer'>Leia no Wattpad</a></button>
        </section>
        <section className='rigth-container'>
            <div className='images'>
                <img src={book} alt="book cover" className='book'/>
                <img src={selo} alt="selo"  className='selo'/>
            </div>
            <div className='text-content'>
                <h3>O romance melodramático de almas conectadas pelo mesmo passado conturbado.</h3>
                <h1>When The Weather Is Fine</h1>
                <p>Ligados pelos fios de um trágico e infeliz destino forjado ainda na adolescência. Naomi, Murano e Hanzo são conduzidos pelos ventos do destino para o lugar onde o sopro de suas vidas começou.</p>
            </div>
        </section>

    </main> 

    )
}

export default Main