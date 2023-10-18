"use client"
import React  , { useState } from "react"
import {IoIosArrowDown} from "react-icons/io"


function Faq() {
    const [faq,setfaq] = useState(0)
    return(
      <div className="flex justify-center ">
          <div className=' m-auto  w-6/12   'style={{width:"45vw"}}>
   
   <div className='pt-8 cursor-pointer' onClick={()=>setfaq(1)}>
           <div className='faqs'>
             <div className="flex justify-between  ">
             <p className='text-lg text-white '>What is micro1?</p>
             <IoIosArrowDown className=''/>
             </div>
             {faq===1?
             <div>
               <p>We help companies dynamically increase their engineering bandwidth with world-class engineers. We also build AI tools for sourcing and vetting talent globally.</p>
               </div>
               :
               null}
             </div>
             
             
     </div>

     <div className='pt-8 ' onClick={()=>setfaq(2)}>
           <div className='faqs'>
             <div className="flex justify-between">
             <p className='text-lg text-white '>How does the free trial work?</p>
             <IoIosArrowDown className=''/>
             </div>
             {faq===2?
             <div>
               <p>For any engagement with micro1, the 1st week is 100% free.</p>
               </div>
               :
               null}
             </div>
             
             
   
     </div>

 
     <div className='pt-8 ' onClick={()=>setfaq(3)}>
           <div className='faqs'>
             <div className="flex justify-between">
             <p className='text-lg text-white '>Will the engineer work directly for me?</p>
             <IoIosArrowDown className=''/>
             </div>
             {faq===3?
             <div>
               <p>The engineer will be in direct contact with you and your company. You can also add the engineer to all of your company channels and softwares; however, you will not be directly hiring the engineer, you will be hiring micro1. Hiring micro1 builds a layer of abstraction for the legal, compliance, global pay, and benefits.</p>
               </div>
               :
               null}
             </div>
             
             
   
     </div>


     <div className='pt-8 ' onClick={()=>setfaq(4)}>
           <div className='faqs'>
             <div className="flex justify-between">
             <p className='text-lg text-white '>How does billing work?</p>
             <IoIosArrowDown className=''/>
             </div>
             {faq===4?
             <div>
               <p>The engineer{"'"}s hourly rate is used as reference to calculate the total fixed monthly pay (in other words, their salary). This is done through a stripe subscription and there are no additional costs.</p>
               </div>
               :
               null}
             </div>
             
             
   
     </div>

     
     <div className='pt-8 ' onClick={()=>setfaq(5)}>
           <div className='faqs'>
             <div className="flex justify-between">
             <p className='text-lg text-white '>How are you different?</p>
             <IoIosArrowDown className=''/>
             </div>
             {faq===5?
             <div>
               <p>For any engagement with micro1, the 1st week is 100% free.</p>
               </div>
               :
               null}
             </div>
             
             
   
     </div>

 
     <div className='pt-8 ' onClick={()=>setfaq(6)}>
           <div className='faqs'>
             <div className="flex justify-between">
             <p className='text-lg text-white '>What technologies do micro1 developers know?</p>
             <IoIosArrowDown className=''/>
             </div>
             {faq===6?
             <div>
               <p>React, Node.js, AWS, UI/UX, Web3, AI/ML, and much more.</p>
               </div>
               :
               null}
             </div>
             
             
   
     </div>

</div>
      </div>
    )
}

export default Faq