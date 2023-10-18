"use client"
import React, { useState } from "react"
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {SlArrowRight} from "react-icons/sl"
import {AiOutlineArrowRight} from "react-icons/ai" 
import {IoHardwareChipOutline} from "react-icons/io5" 
import {LuMonitorDown} from "react-icons/lu"
import {TbHeartRateMonitor} from "react-icons/tb"
import {BiMessageMinus} from "react-icons/bi"
import {BiBrain} from "react-icons/bi"
import {TiSocialLinkedinCircular} from "react-icons/ti"
import {AiFillTwitterCircle} from "react-icons/ai"
import {BiSolidMessageSquareDetail} from "react-icons/bi" 
import { HiMenu, HiX } from "react-icons/hi";



function Vetting(){


    const [btnHover, setBtnHover] =useState(false)

    const handleMouseEnter = () => {
        setBtnHover(true)
    }
    const handleMouseLeave = () => {
        setBtnHover(false)
    }

    const [btnHover2, setBtnHover2] =useState(false)
    
    const handleMouseEnter2 = () => {
        setBtnHover2(true)
    }
    const handleMouseLeave2 = () => {
        setBtnHover2(false)
    }

    const [btnHover6, setBtnHover6] =useState(false)

    const handleMouseEnter6 = () => {
        setBtnHover6(true)
    }
    const handleMouseLeave6 = () => {
        setBtnHover6(false)
    }

    const [btnHover3, setBtnHover3] =useState(false)

    const handleMouseEnter3 = () => {
        setBtnHover3(true)
    }
    const handleMouseLeave3 = () => {
        setBtnHover3(false)
    }
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const toggleMobileMenu = () => {
  setIsMobileMenuOpen(!isMobileMenuOpen);
};
const router = useRouter();

const handleImageClick = () => {
  router.push('/vetting');  
}

    return(

<div className="pt-8">
        
          <nav>
                    <div className="flex justify-between">
                      <div className='flex sm:pl-16 pl-4 flex justify-between rounded-lg '>
                      <a href="/"> <img src="/micro.svg" alt="" width="100px" className="mr-10 mt-4" onClick={handleImageClick} />
                         </a>
                        <div className="pt-4 mt-1 hidden md:flex space-x-10 text-white">
                          <Link href="/vetting">Vetting Process</Link>
                          <Link href="/vetting">About Us</Link>
                           <Link href="/blog">Blog</Link>

                        </div>
                      </div>
                        
                      <div className="md:pl-0 md:hidden flex sm:mr-16 mr-4">
                        <div onClick={toggleMobileMenu} className="text-white focus:outline-none">
                          {isMobileMenuOpen ? 
                            <HiX className="text-2xl" />
                          :
                            <HiMenu className="text-2xl" />
                          }
                        </div>
                      </div>

                      {/* Desktop  */}
                      <div className="hidden md:flex justify-end">
                        <div className='hidden md:flex mr-6 pl-8 py-4 relative rounded-full transition duration-200 font-bold text-sm text-white hireBtn cursor-pointer flex w-56' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
                          <p>Hire Top Engineers </p>
                          {btnHover6 ?
                            <p className='px-3 py-3 rounded-full hireIcon absolute right-2 mt-0' style={{ bottom: "4px" }}><AiOutlineArrowRight style={{ width: "20px", height: "20px" }} /></p>
                            :
                            <p className='p-4 rounded-full hireIcon absolute right-1.5 mt-0' style={{ bottom: "5px" }}><SlArrowRight style={{ width: "11px", height: "10px" }} /></p>
                          }
                        </div>
                      </div>
                    </div>

                    {/* mobile */}
                    {isMobileMenuOpen && (
                      <div className="md:hidden mt-2 absolute z-40 w-full"style={{backgroundColor: " #050505"}}>
                        <ul className="text-white p-4 py-8  ">
                          <li>
                            <Link href="/vetting">Vetting Process</Link>
                          </li>
                          <li className="pt-8">
                            <Link href="/vetting">About Us</Link>
                          </li>     
                          <li className="pt-8">
                            <Link href="/blog">Blog</Link>
                          </li>      
                        </ul>
                        <div className="  flex w-60 ml-4  pb-8">
                          <div className=' justify-between sm:pl-4 pl-4 py-2 rounded-full sm:font-bold font-medium sm:text-base text-sm text-white hireBtn cursor-pointer flex justify-between w-48 sm:w-80' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
                          <p className="sm:mt-1">Hire Top Engineers</p>
                            {btnHover6 ?
                              <p className='sm:p-2 p-2 rounded-full mr-2  hireIcon right-5 mt-0' style={{ bottom: "7px" }}><AiOutlineArrowRight className="sm:w-3 w-2 sm:h-3 h-2"/></p>
                            :
                              <p className='sm:p-2 p-2 rounded-full mr-2  hireIcon right-5 mt-0' style={{ bottom: "7px" }}><SlArrowRight className="sm:w-3 w-2 sm:h-3 h-2"/></p>
                            }
                          </div>
                        </div>
                      </div>
                    )}
          </nav> 

          <div className="pt-20 sm:px-10 px-4">
              <h1 className='font-extrabold  sm:text-6xl text-3xl   text-center text-white pt-4   800'>Our Robust Vetting Process</h1>
              <p className='sm:text-xl text-sm m-auto px-8  pt-6 l text-center pt-4   line-height-6'>Every engineer that joins our talent pool goes through our gpt-vetting, 2-3 manual <br/>interviews, and takes an AI-Powered engineer course.</p>
          </div>
          <div className="pt-20  flex justify-center">
                <div className='mr-6 sm:pl-8 pl-4 py-2 transition duration-200 rounded-full sm:font-bold font-medium sm:text-xl text-base text-white hireBtn cursor-pointer flex justify-between w-52 sm:w-80' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                      <p className="sm:mt-3">Hire a Top Engineer</p>
                      {btnHover2 ?
                          <p className='sm:p-4 p-2 rounded-full mr-2  hireIcon right-5 mt-0' style={{ bottom: "7px" }}><AiOutlineArrowRight className="sm:w-5 w-3 sm:h-5 h-3"/></p>
                          :
                          <p className='sm:p-4 p-2 rounded-full mr-2  hireIcon right-5 mt-0' style={{ bottom: "7px" }}><SlArrowRight className="sm:w-5 w-3 sm:h-5 h-3"/></p>
                      }
                </div>
          </div>
  
          <div className="pt-16">
              <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-24">
                  <h1 className='font-extrabold sm:text-6xl text-2xl   text-center text-white 800'>How We Hire?</h1>
              </div>
          </div>


       <div className="relative">
          <div className="  m-auto ml-60     flex absolute ">
            <img src="/side.svg" alt="" width="500px" className="" />
          </div>

          <div className="pt-60 flex justify-center px-3 z-10">
              <div className=" sm:pt-7 mt-16   ">
                  <p className="   sm:px-11 sm:py-8  px-5 py-3  bg-gray-900 border border-opacity-25 rounded-full sm:text-4xl text-xl   flex items-center justify-center"style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>1</p>
              </div>
       
              <div className="flex sm:pl-8 pl-2">
                      <div className=" max-w-6xl bg-opacity-40 backdrop-blur-md bg-blue-400 border border-opacity-10 rounded-xl  sm:py-16 py-8 px-8 relative numcards sm:flex border rounded-full  "style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
                         <div className="h-24">
                         <div className="  rounded-full sm:p-8 p-4 sm:w-auto w-16  "style={{backgroundColor: "rgba(255,255,255,.05)"}}>
                              <img src="/img1.svg"
                              className="sm:w-20 sm:h-20 w-8 h-8 text-blue-800 "  />
                          </div>
                         </div>

                                <div className="mt-4 sm:mt-0">
                                        <div className="sm:pl-8 " style={{ width: "100%" }}>
                                        <h3 className="text-2xl text-white font-black sm:text-3xl text-xl">gpt-vetting</h3>
                                        </div>
                                        <div className="pt-6 sm:pl-8">
                                        <p className="sm:text-lg text-xs font-medium">
                                            A gpt-4 powered test deeply pre-screens  call with technical knowledge of all candidates.
                                        </p>
                                        </div>
                                </div>
                      </div>
                </div>
      
          </div>


          <div className="pt-20 flex justify-center px-3">
                  <div className=" sm:pt-7 mt-16 ">
                      <p className="   sm:px-11 sm:py-8  px-5 py-3  bg-gray-900 border border-opacity-25 rounded-full sm:text-4xl text-xl   flex items-center justify-center"style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>2</p>
                  </div>
        
        
                <div className="flex sm:pl-8 pl-2">
                        <div className=" max-w-6xl bg-opacity-40 backdrop-blur-md bg-blue-400 border border-opacity-10 rounded-xl  sm:py-16 py-8 px-8 relative numcards sm:flex border rounded-full  "style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
                           <div className="h-24">
                           <div className="  rounded-full sm:p-8 p-4 sm:w-auto w-16  "style={{backgroundColor: "rgba(255,255,255,.05)"}}>
                           <img src="/img2.svg" alt="img1" 
                              className="sm:w-20 sm:h-20 w-8 h-8 text-blue-800 "  />
                              </div>
                           </div>

                                  <div className="mt-4 sm:mt-0">
                                          <div className="sm:pl-8  " style={{ width: "100%" }}>
                                          <h3 className="text-2xl text-white font-black sm:text-3xl text-xl">Screening</h3>
                                          </div>
                                              <div className="pt-6 sm:pl-8 ">
                                              <p className="sm:text-lg text-xs font-medium">
                                                A 30 minute screening call with our recruitment  screening call with our recruitment team.
                                              </p>
                                              </div>
                                  </div>
                        </div>
                  </div>
        
          </div>


          <div className="pt-20 flex justify-center px-3">
                    <div className=" sm:pt-7 mt-16 ">
                        <p className="   sm:px-11 sm:py-8  px-5 py-3  bg-gray-900 border border-opacity-25 rounded-full sm:text-4xl text-xl   flex items-center justify-center"style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>3</p>
                    </div>
        
        
                <div className="flex sm:pl-8 pl-2">
                        <div className=" max-w-6xl bg-opacity-40 backdrop-blur-md bg-blue-400 border border-opacity-10 rounded-xl  sm:py-16 py-8 px-8 relative   sm:flex border    "style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
                               <div className="h-24">
                               <div className="  rounded-full sm:p-8 p-4 sm:w-auto w-16  "style={{backgroundColor: "rgba(255,255,255,.05)"}}>
                               <img src="/img3.svg"
                              className="sm:w-20 sm:h-20 w-8 h-8 text-blue-800 "  />
                                </div>
                               </div>

                              <div className="mt-4 sm:mt-0">
                                      <div className="sm:pl-8  " style={{ width: "100%" }}>
                                      <h3 className="text-2xl text-white font-black  sm:text-3xl text-xl ">1-2 Technical interviews</h3>
                                      </div>
                                          <div className="pt-6 sm:pl-8 ">
                                          <p className="sm:text-lg text-xs font-medium">
                                          We then conduct 1-2 technical rounds by  our recruitment  senior engineers in our core team.
                                          </p>
                                          </div>
                               </div>
                         </div>
                 </div>
        
          </div>


          
          <div className="pt-20 flex justify-center px-3">
                    <div className=" sm:pt-7 mt-16 ">
                        <p className="   sm:px-11 sm:py-8  px-5 py-3  bg-gray-900 border border-opacity-25 rounded-full sm:text-4xl text-xl   flex items-center justify-center"style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>4</p>
                    </div>
        
        
                <div className="flex sm:pl-8 pl-2">
                        <div className=" max-w-6xl bg-opacity-40 backdrop-blur-md bg-blue-400 border border-opacity-10 rounded-xl  sm:py-16 py-8 px-8 relative numcards sm:flex border rounded-full  "style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
                              <div className="h-24">
                              <div className="  rounded-full sm:p-8 p-4 sm:w-auto w-16  "style={{backgroundColor: "rgba(255,255,255,.05)"}}>
                              <img src="/img4.svg"
                              className="sm:w-20 sm:h-20 w-8 h-8 text-blue-800 "  />
                                </div>
                              </div>

                                <div className="mt-4 sm:mt-0">
                                            <div className="sm:pl-8  " style={{ width: "100%" }}>
                                            <h3 className="text-2xl text-white font-black sm:text-3xl text-xl ">Soft skills interview</h3>
                                            </div>
                                              <div className="pt-6 sm:pl-8  ">
                                              <p className="sm:text-lg text-xs font-medium">
                                              After the technicals, we conduct a soft skills our recruitment interview to deeply assess their<br/>
                                               communication, passion, and attitude.
                                              </p>
                                              </div>
                                </div>
                         </div>
                 </div>
        
          </div>
    
          <div className="pt-20 flex justify-center px-3">
                        <div className=" sm:pt-7 mt-16 ">
                            <p className="   sm:px-11 sm:py-8  px-5 py-3  bg-gray-900 border border-opacity-25 rounded-full sm:text-4xl text-xl   flex items-center justify-center"style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>5</p>
                        </div>
        
        
                <div className="flex sm:pl-8 pl-2">
                        <div className=" max-w-6xl  bg-opacity-40 backdrop-blur-md bg-blue-400 border border-opacity-10 rounded-xl  sm:py-16 py-8 px-8 relative numcards sm:flex border rounded-full  "style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
                                   <div className="h-24">
                                   <div className="  rounded-full sm:p-8 p-4 sm:w-auto w-16 mb-5  "style={{backgroundColor: "rgba(255,255,255,.05)"}}>
                                   <img src="/img5.svg"
                              className="sm:w-20 sm:h-20 w-8 h-8 text-blue-800 "  />
                                    </div>
                                   </div>

                                <div className="mt-4 sm:mt-0">
                                          <div className="sm:pl-8 " style={{ width: "100%" }}>
                                          <h3 className="text-2xl text-white font-black sm:text-3xl text-xl">AI-Powered training</h3>
                                          </div>
                                              <div className="pt-6 sm:pl-8">
                                              <p className="sm:text-lg text-xs font-medium">
                                              After they{"'"}ve passed our vetting process, we take each and every engineer through our<br/> {"'"}AI-Powered Engineer{"'"} training to teach them how to use github copilot, <br/>chatGPT, copilot labs, and more. This makes each engineer approximately 2x more efficient.
                                              </p>
                                              </div>
                                </div>
                         </div>
                 </div>
        
          </div>
      </div>

          <div className="pt-40  md:px-0 px-5">
              <div className= "flex justify-center">
                    <div className=" sm:w-96 sm:h-96 w-72 h-72 bg-opacity-25 rounded-3xl p-11 relative" style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
                          
                        <div className="flex flex-wrap justify-center m-auto">
                            <div className="  ">
                              <div className="w-40 sm:ml-10 rounded-full py-12 m-auto px-14" style={{backgroundColor: "rgba(255,255,255,.05)"}}>
                                <TbHeartRateMonitor className="text-5xl text-blue-800" />
                              </div>
                              <p className=" pt-10  sm:text-3xl text-xl font-bold text-center">Top 1% engineer</p>
                            </div>
                        </div>
                    </div>
                  </div>
          </div>
 
      <div className='pt-40 m-auto w-10/12 text-center'>
      
            <div className='w-5/5 h-full backdrop-blur-md bg-opacity-40 bg-blue-600 bg-opacity-16 border border-blue-400 border-opacity-25 rounded-xl relative 'style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
                    <h2 className='text-4xl sm:text-5xl text-xl text-white pt-20 font-bold'>Hire a world-class engineering team easily</h2>
                    <p className='text-2xl sm:text-xl text-xs pt-4 text-white-200 px-4 '>Compliance, global payroll, and benefits, all handled by us.</p>
                        <div className='place-content-center'>
                                <div className="pt-20  flex justify-center  ">
                                            <div className='mr-6 mb-8  sm:pl-8 pl-4 py-2 transition duration-200 rounded-full sm:font-bold font-medium sm:text-xl text-base text-white hireBtn cursor-pointer flex justify-between w-52 sm:w-80' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                                                  <p className="sm:mt-3">Hire a Top Engineer</p>
                                                  {btnHover2 ?
                                                      <p className='sm:p-4 p-2 rounded-full mr-2  hireIcon right-5 mt-0' style={{ bottom: "7px" }}><AiOutlineArrowRight className="sm:w-5 w-3 sm:h-5 h-3"/></p>
                                                      :
                                                      <p className='sm:p-4 p-2 rounded-full mr-2  hireIcon right-5 mt-0' style={{ bottom: "7px" }}><SlArrowRight className="sm:w-5 w-3 sm:h-5 h-3"/></p>
                                                  }
                                            </div>
                                </div>
                        </div>
              </div>

       </div>


          <div className="pb-4  ">
                          <div className='  pt-40 flex flex-wrap justify-between '>
                                <div className='pt-6 rounded-lg text-left  flex justify-center sm:pl-8 pl-0 sm:m-0 m-auto '>
                                  <img src="/micro.svg" alt='' width="100px"/>
                                </div>
                                  <div className='flex flex-wrap justify-center  py-2  '>
                                    <p className='p-2'>Vetting Process</p>
                                    <p className='p-2'>How it works</p>
                                    <p className='p-2'>About us</p>
                                    <p className='p-2'>Blog</p>
                                    <p className='p-2'>Sitemap</p>
                                  </div>
                                </div>

                          <div className='sm:flex flex-row-reverse justify-between mt-8'>
                                <div className='flex mx-14 justify-center'>
                                  <TiSocialLinkedinCircular style={{width: "40px",height:"40px" }}/>
                                  <AiFillTwitterCircle style={{width: "40px",height:"40px" }}/>
                                </div>

                                  <div className='sm:px-8 px-2 pt-4 pl-4'>
                                    <p>Copyright © 2023 micro1 Inc. All rights reserved.|Privacy policy|Terms & conditions</p>
                                  </div>
                            
                          </div>
          </div>





</div>
    )
}


export default Vetting