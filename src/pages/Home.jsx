import React from 'react'
import img from '../assets/model.jpeg'

function Home() {
  return (
    <>
      <div className='m-24 flex font-sans items-center justify-between w-[80vw]'>
        <div className='w-1/3'>
          <h1 className='font-extrabold text-[90px]'>ONLINE</h1>
          <h1 className='font-bold text-[50px]'>SHOPPING</h1>
          <h2>Lorem, ipsum dolor.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa laboriosam incidunt consequatur veritatis officiis laudantium modi, magnam recusandae, dolores earum tempore atque, illo explicabo voluptas animi omnis repellat delectus.similique fuga minima eligendi accusamus! Eos id reprehenderit iste perferendis eum repellendus pariatur minus non.</p>
          <button className='mt-8 border py-[8px] px-[30px]  bg-[#ff523b] font-semibold text-white rounded-[30px]'>LEARN MORE →</button>
        </div>
        <div className='w-1/3'>
          <img src={img} alt="" />
        </div>
      </div>
    </>
  )
}

export default Home