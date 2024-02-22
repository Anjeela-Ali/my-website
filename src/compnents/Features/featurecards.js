import { FaRegCheckCircle } from "react-icons/fa";


const Cards = ({media, heading, textOne, textTwo, order}) => {
    return (
        <>
            <div className={`flex justify-evenly w-[80%] m-auto my-20 `}>
                {/* Image */}
                <div className={` w-[40%] ${order ? 'order-2': ''}`} >
                    <img src={media} alt='image' width='100%'/>
                </div>
                {/* content */}
                <div className=' pt-10'>
                    <h2 className='text-4xl font-bold text-white align-left'>
                        {heading}
                    </h2>
                    <div className='flex text-gray-400 pl-3 my-4 text-xl'>
                        <div className='pt-1 '>
                          <FaRegCheckCircle />
                        </div>
                        <div>
                            <h5 className='pl-2'>
                           {textOne}
                            </h5>
                        </div>
                    </div>
                    <div className='flex text-gray-400 pl-3 my-4 text-xl'>
                        <div className='pt-1'>
                          <FaRegCheckCircle />
                        </div>
                        <div>
                            <h5 className='pl-2'>
                                {textTwo}
                            </h5>
                        </div>
                    </div>

                    {/* Button */}
                    <button className='border py-2 px-10 rounded-full text-[#000214] bg-white mt-12 mx-2 font-bold'>
                        Get Started
                    </button>
                </div>
            </div>
        </>
    )
}

export default Cards
