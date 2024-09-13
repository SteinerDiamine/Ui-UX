import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo , smallHeroVideo } from '../utils'
import { useEffect, useState } from 'react'

const Hero = () => {

  const [videoSrc , setVideoSrc] = useState(window.innerWidth < 768 ? smallHeroVideo: heroVideo);


  const handleVideoSrc  = () => {
      if(window.innerWidth < 760){
        setVideoSrc(smallHeroVideo)
      }else {
        setVideoSrc(heroVideo)
      }
  }

  useEffect(() => {
    window.addEventListener('resize' , handleVideoSrc);
    return () => {
      window.removeEventListener('resize', handleVideoSrc)
    }
  })

  useGSAP(() => {
    gsap.to('#hero', {opacity:2, delay: 1.5})
  },[

  ])
  useGSAP(()=> {
    gsap.to('#cta' , {opacity:2 ,y:-50, delay:1.5})
  })
  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p id='hero' className='hero-title'>Iphone 15 pro</p>

        <div className='md:w-10/12 w-9/12'>
          <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc}/>
          </video>
        </div>
      </div>

      <div id='cta' className='flex flex-col items-center opacity-1 translate-y-20 '>
        <a href="#highlights" className='btn'>
          <p className='font-normal text-xl'>
            Starting with &#8377;10,000 or &#8377;1,29,900 
          </p>
        </a>
      </div>

    </section>
  )
}

export default Hero