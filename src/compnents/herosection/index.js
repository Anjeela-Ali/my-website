import React from 'react'
import bgUrl from '../../assets/hero_section.png'
import imageUrl from '../../assets/boy.svg'
const HeroSection = () => {
    return (
        <>
            <div className="bg-cover bg-center h-screen flex justify-evenly" style={{
                backgroundImage: `url(${bgUrl})`
            }}>
                {/* Hero Section Content */}
                <div className=' w-[45%] text-white py-[70px] px-[30px] align-middle'>
                    <h1 className='text-5xl font-bold py-2'>
                        Unleashing the Magic of
                        Easy Reading and More
                    </h1>
                    <h3 className='px-2 py-6 text-lg' >
                        Boost your Online Reading Journey with Text to Speech (TTS),
                        Screen Shader, Reading Ruler, OpenDyslexic Font, ePub Reader,
                        and more!
                    </h3>
                    <button className='border py-2 px-20 rounded-full text-[#000214] bg-white my-12 mx-2 font-bold'>
                        Get Started
                    </button>
                </div>

                {/* Image  */}
                <div className=' w-[40%] pl-20 pt-20'>
                    <img src={imageUrl} alt='image' width='80%'/>

                </div>
            </div>

        </>
    )
}

export default HeroSection
