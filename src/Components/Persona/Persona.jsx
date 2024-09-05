import React, { useEffect } from 'react'
import '../Persona/Persona.css'
import Naomi from '../../assets/Persona/Naomi.jpg'
import Murano from '../../assets/Persona/Murano.jpg'
import Hanzo from '../../assets/Persona/Hanzo.jpg'
import Akechi from '../../assets/Persona/Akechi.jpg'
import Katsumi from '../../assets/Persona/Katsumi.jpg'
import Yuriko from '../../assets/Persona/Yuriko.jpg'


const Persona = () => {
  useEffect(() => {
    ScrollReveal().reveal('.action-f', {
     duration: 1000,
     distance: '50px',
     easing: 'ease-in-out',
     origin: 'bottom', 
     opacity: 0,
     interval: 300,
     reset: true,
      })
    })
    

useEffect(() => {
  ScrollReveal().reveal('.cards', {
 duration: 2000,
 distance: '50px',
 easing: 'ease-in-out',
 origin: 'bottom', 
 interval: 300,
 opacity: 0,
 reset: true,
  })
})

useEffect(() => {
  ScrollReveal().reveal('.image-card', {
   duration: 2000,
   distance: '50px',
   easing: 'ease-in-out',
   interval: 300,
   opacity: 0,
   reset: true,
    })
  })
  

useEffect(() => {
ScrollReveal().reveal('.name', {
 duration: 3000,
 distance: '50px',
 easing: 'ease-in-out',
 origin: 'bottom', 
 interval: 300,
 opacity: 0,
 reset: true,
  })
})

useEffect(() => {
  ScrollReveal().reveal('.who', {
 duration: 3000,
 distance: '50px',
 easing: 'ease-in-out',
 origin: 'bottom', 
 interval: 300,
 opacity: 0,
 reset: true,
  })
})

useEffect(() => {
  ScrollReveal().reveal('.about', {
 duration: 3000,
 distance: '50px',
 easing: 'ease-in-out',
 origin: 'bottom', 
 interval: 300,
 opacity: 0,
 reset: true,
  })
})


  return (
    <section className='cards'>
      <div>
        <h3 className='action-f'>Nessa história, diversos personagens serão apresentados, cada qual com sua própria história e marcas.</h3>
      </div>

        
        <div className='card'>
          <img className='image-card' src={Naomi} alt="A picture of Naomi MInamoto" />
          <h2 className='name'>Naomi Minamoto</h2>
          <h3 className='who'>Protagonista</h3>
          <p className='about'>Sendo herdeira da maior organização estudantil privada do país, Naomi enfrenta não apenas as polêmicas de sua carreira ao ser exonerada do cargo de professora e seu processo de divórcio midiático. 
          Encara também a dor dos traumas, esses que lhe causaram marcas no próprio corpo.
          De volta à cidade de Takayama, ela enfrentará não apenas seu forte temperamento, como também o passado que ressurge na chegada de seu único amor.</p>
        </div>

        <div className='card'>
          <img className='image-card' src={Murano} alt="A picture of Naomi MInamoto" />
          <h2 className='name'>Murano Hoshino</h2>
          <h3 className='who'>Protagonista</h3>
          <p className='about'>Filha da casa Hoshino, aquela que controla a maior parcela da pecuária no país. Murano após ser impedida de viver sua paixão avassaladora, casou-se arranjadamente. Na França, fez seu nome como chefe, gestora e figura pública, erguendo o majestoso restaurante Kataomoi.
          De volta à cidade de Takayama, encara não apenas as crises de ansiedade ou a depressão de sua alma, diante de seu verdadeiro amor, encara o desejo pela liberdade.</p>
        </div>

        <div className='card'>
          <img className='image-card' src={Hanzo} alt="A picture of Naomi MInamoto" />
          <h2 className='name'>Hanzo Hattori</h2>
          <h3 className='who'>Protagonista</h3>
          <p className='about'>Filho bastardo de uma das famílias respeitadas em todo o Japão, Hanzo carrega o estigma de ser da linhagem de um grande empresário do ramo da arte, assim como de ter em suas veias o sangue da maior atriz da era moderna do país. Mediante conexões, cresceu fazendo seu nome como um dos maiores escritores de sua época, ao ponto de ser comparado a seu avô, que no passado era modelo como escritor.
          De volta à cidade de Takayama, o homem assombrado pela culpa luta contra seus demônios para reparar seus amargos erros.
          </p>
        </div>

        <div className='card'>
          <img className='image-card' src={Akechi} alt="A picture of Naomi MInamoto" />
          <h2 className='name'>Akechi Mitsuhide</h2>
          <h3 className='who'>Secundario</h3>
          <p className='about'>Jovem prodígio do colégio Minamoto em Takayama reconhecido como o número um, Akechi encara as dificuldades de um estudante em seu ensino médio. O astro do clube de kendo se vê intrigado pela reclusa garota de sua sala. Diante do surgimento de uma inexplicável emoção, ele a defende com tudo que pode a existência dela, que se afunda em escuridão.
          Na busca pelo certo, encontrará bem mais do que apenas boas emoções, pois quando o retorno de sua mãe traz consigo um passado desconhecido.</p>
        </div>

        <div className='card'>
          <img className='image-card' src={Katsumi} alt="A picture of Naomi MInamoto" />
          <h2 className='name'>Katsumi</h2>
          <h3 className='who'>Secundario</h3>
          <p className='about'>A jovem que carrega a alcunha de ser uma das melhores no colégio Minamoto em Takayama encara as dificuldades de uma órfã vivendo sob o teto de seu predador. Katsumi mesmo possuindo glórias de atleta em seu nome, vive o medo e o trauma a impedem de ver a luz.
          Mas é na busca pela saída do abismo que revive as sombras mais obscuras de sua alma. Descobrindo que, mesmo, no fundo do abismo, a luz ainda pode brilhar intensamente.
          </p>
        </div>

        <div className='card'>
          <img className='image-card' src={Yuriko} alt="A picture of Naomi Minamoto" />
          <h2 className='name'>Yuriko Hattori</h2>
          <h3 className='who'>Secundario</h3>
          <p className='about'>Renomada cirurgiã num passado não muito distante, amarga no presente a dor da perda em seu âmbito mais pessoal. Yuriko atua como uma fria veterinária na cidade de Takayama na busca de se esconder. 
          Mas é justamente numa nova brisa que encontra algo que antes não enxergava em sua vida e isso é a beleza do que o amor pode ser.
          Diante das novas brisas, pode entender que, mesmo distante, o passado, quando não curado, jamais poderá ser esquecido. 
          </p>
        </div>
    
    </section>
  )
}

export default Persona