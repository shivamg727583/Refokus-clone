import React from 'react'
import Button from './Button';

function Product({products,mouseEnterHandle, mouseLeaveHandle}) {
  return (
  <>
  {products.map((elem,idx)=>
     <div key={idx} className='w-full text-white py-20  h-[23rem] border-b-[1px] border-gray-600' onMouseEnter={()=>{
      mouseEnterHandle(idx);
      mouseLeaveHandle(idx);
     }}>
     <div className='max-w-screen-xl mx-auto  flex justify-between items-center text-white '>
      <h1 className='text-6xl capitalize font-semibold'>{elem.title}</h1>
    <div className="prod w-1/3">
      <p className='mb-10'>{elem.description}</p>

      <div className='flex items-center gap-10'>
{elem.live && <Button />}
{elem.case &&  <Button  title='Case Study'/>}

     
      </div>
     
    </div>

    </div>
   </div>)}
  </>
  )
}

export default Product;