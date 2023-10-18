import {TiSocialLinkedinCircular} from "react-icons/ti"
import {AiFillTwitterCircle} from "react-icons/ai" 

function Footer(){
    return(
        <div>
            <div className='footer pt-40 flex justify-between mr-14'>
                  <div className='pl-10 rounded-lg pb-10   '>
                    <img src="/micro.svg" alt='' width="100px" />
                  </div>
                  <div className='flex px-8'>
                    <p className='pl-4'>Vetting Process</p>
                    <p className='pl-4'>How it works</p>
                    <p className='pl-4'>About us</p>
                    <p className='pl-4'>Blog</p>
                    <p className='pl-4'>Sitemap</p>

                  </div>
                  </div>
                  <div className='foot flex justify-between'>
                  <div className='pl-8'>
                    <p>Copyright © 2023 micro1 Inc. All rights reserved.
              |
              Privacy policy
              |
              Terms & conditions</p>
                  </div>
                
                <div className='icons flex mr-14'>
                  <TiSocialLinkedinCircular style={{width: "40px",height:"40px" }}/>
                  <AiFillTwitterCircle style={{width: "40px",height:"40px" }}/>

                </div>

    </div>
        </div>
    )
}