import React from "react";

function Footer() {
  return (
    <div className="w-full text-white ">
      <div className=" max-w-screen-xl mx-auto py-10 flex gap-32 ">
        <div className="basis-1/2 flex flex-col gap-10">
          <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
<div className="w-full flex gap-6">
    
{ ["Privcy policy","cookies policy","impression","terms"].map((elem,idx)=>
   <a key={idx} className="cursor-pointer mt-2 hover:text-white hover:font-semibold transition-all capitalize text-zinc-400">{elem}</a>
         )
}
</div>
       
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className=" mb-10 text-zinc-100 capitalize">socials</h4>
            {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
              <a key={index} className="block cursor-pointer hover:text-white hover:font-semibold transition-all mt-2 capitalize text-zinc-400">{item}</a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className=" mb-10 text-zinc-400 capitalize">Sitemap</h4>
            {["home", "work","careers", "contact"].map((item, index) => (
              <a key={index} className="block mt-1 cursor-pointer hover:text-white hover:font-semibold transition-all capitalize text-zinc-300">{item}</a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img className="w-32 mt-12" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
