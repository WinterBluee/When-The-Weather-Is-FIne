import React, { useEffect } from 'react'
import '../Footer/Footer.css'

const Footer = () => {
 useEffect(() => {
  ScrollReveal().reveal('.inspired', {
            duration: 2000,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'bottom', 
            interval: 300,
            reset: true,
  })
 })

 useEffect(() => {
  ScrollReveal().reveal('.direito', {
            duration: 2000,
            distance: '50px',
            easing: 'ease-in-out',
            origin: 'bottom', 
            interval: 300,
            reset: true,
  })
 })


  return (
    <div>
        <h2 className='inspired'>Disponivel tambem na <a href="https://www.webnovel.com/book/when-the-weather-is-fine_23581244906720305" target='_blank' rel='noopener noreferer'>Webnovel</a></h2>
        <p className='direito'>Todos os direitos reservados &copy;<a href="https://github.com/WinterBluee" target='_blank' rel='noopener noreferer'>WinterBluee</a> </p>
    </div>
  )
}

export default Footer