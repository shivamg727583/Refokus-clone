import React from 'react'

function Stripes() {
    var data = [
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
          number: 52,
        },
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
          number: 2,
        },
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
          number: 12,
        },
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
          number: 52,
        },
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
          number: 2,
        },
        {
          url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
          number: 12,
        },
      ];
    
  return (
    <div className='w-full mt-8  flex items-center'>

      {data.map((elem,idx)=>  <div key={idx} className="stripe px-3 w-[16.66%] h-14 flex justify-between items-center border-b-[1px]  border-r-[1px] border-gray-200 border-t-[1px]">
<img src={data[idx].url} alt="" />
<div className="text-gray-200 font-semibold text-md">{data[idx].number}</div>
        </div>)}

    </div>
  )
}

export default Stripes