import React, { useState } from 'react'
import { cities } from './cities'






function Carousel(images) {

  const photo = [
    'https://images.unsplash.com/photo-1634048703492-eeded62bb987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1593000666643-c7b641bbecaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1550837659-aafc79fba9c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1564741304912-625abd429a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'

  ]





  return (



    <div className='w-full flex flex-row justify-center items-center'>
      <button></button>
      {cities.map((imagen, city) => {
        return <img key={city} src={imagen.photo} alt='imagen'/>
        
      })

      }
      <button></button>
    </div>












  )
}

export default Carousel