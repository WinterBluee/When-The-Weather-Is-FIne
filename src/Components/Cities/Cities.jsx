import React, { useEffect } from 'react'
import '../Cities/Cities.css'
import Takayama from '../../assets/Cities/Takayama.jpg'
import Shirakawa from '../../assets/Cities/Shirakawa.jpg'
import Tokyo from '../../assets/Cities/Tokyo.jpg'
import Kyoto from '../../assets/Cities/Kyoto.jpg'


const Cities = () => {
    useEffect(() => {
        ScrollReveal().reveal('.cities-cards', {
            duration: 1000,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'bottom', 
            interval: 300,
            reset: true,
        })
    })

    useEffect(() => {
        ScrollReveal().reveal('.city-card', {
            duration: 1000,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'bottom', 
            interval: 300,
            reset: true,
        })
    })

    useEffect(() => {
        ScrollReveal().reveal('.image-city', {
            duration: 2000,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'bottom', 
            interval: 300,
            reset: true,
        })
    })

    useEffect(() => {
        ScrollReveal().reveal('.city-name', {
            duration: 3000,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'bottom', 
            interval: 300,
            reset: true,
        })
    })

    useEffect(() => {
        ScrollReveal().reveal('.city-info', {
            duration: 3000,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'bottom', 
            interval: 300,
            reset: true,
        })
    })


  return (
    <section className='cities-cards'>
        <div className='action'>Neste romance melodramático, cada cidade desempenha um papel vital na jornada das nossas personagens. Cada uma, com sua singularidade, contribui de maneira única para a trama: desde a serenidade histórica de Takayama e Shirakawa, até a energia pulsante de Tóquio e o esplendor atemporal de Quioto. Cada lugar é mais do que um cenário; é um capítulo vivo na história de amor, perda e redenção.</div>

        <div className='card'>
            <img className='img-card' src={Takayama} alt="Picture of Takayama City" />
            <h2 className='city-name'>Takayama</h2>
            <p className='city-info'>A montanhosa cidade situada na província de Gifu, no centro do Japão, carrega bem mais que trilhas, montanhas e arquitetura tradicional. Seja artesanato, rotina rural ou gastronomia, com seus pratos característicos da região, como o bife Hida ou seu próprio ramem, cujo maior ingrediente é um caldo à base de molho de soja.</p>
        </div>

        <div className='card'>
            <img className='img-card' src={Shirakawa} alt="Picture of Shirakawa Village" />
            <h2 className='city-name'>Shirakawa</h2>
            <p className='city-info'>De estilo Gassho-zukuri, ou seja, as casas são caracterizadas por seus telhados íngremes em forma de mãos postas em oração. A vila de Shirakawa carrega em suas épocas do ano visões diferentes de uma vida tradicional, com festivais que se destacam, trazendo uma sensação mágica aos visitantes.</p>
        </div>

        <div className='card'>
            <img className='img-card' src={Tokyo} alt="Picture of Tokyo City" />
            <h2 className='city-name'>Tóquio</h2>
            <p className='city-info'>Cidade que originalmente fora uma vila de pescadores, se desenvolveu e cresceu, se tornando o centro da cultura tradicional e moderna. Sendo o caldeirão de tradições das mais antigas até a mais contemporânea, indo de seus templos históricos, jardins zen e até arranha-céus modernos. A cidade oferece a todos os seus visitantes e moradores uma diversidade capaz de encantar a todos os gostos.</p>
        </div>

        <div className='card'>
            <img className='img-card' src={Kyoto} alt="Picture of Kyoto City" />
            <h2 className='city-name'>Quioto</h2>
            <p className='city-info'>A cidade de Quito é conhecida por sua arquitetura bela, paisagens deslumbrantes, templos magníficos, bairros históricos e festivais tradicionais que instigam seus moradores e visitantes. E dentre seus festivais destaco o Aoi Matsuri, um festival conhecido por suas procissões coloridas que recriam os rituais coloridos da corte imperial do período Heian, época em que Quioto era a capital.</p>
        </div>

        
    </section>
  )
}

export default Cities