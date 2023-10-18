"use client"

import {SlArrowRight} from "react-icons/sl"
import {AiOutlineArrowRight, AiTwotoneVideoCamera, AiFillTwitterCircle} from "react-icons/ai" 
import {BiSolidMessageSquareDetail} from "react-icons/bi"
import {VscAccount} from "react-icons/vsc"
import {MdFormatListBulleted} from "react-icons/md"
import {IoIosArrowDown} from "react-icons/io"
import {TiSocialLinkedinCircular} from "react-icons/ti"
import Link from 'next/link'; 
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import RequireCards from "../../components/requireCards"
import { useRouter } from "next/navigation"
 
 function Page(){

  const [faq,setfaq] = useState(0)

  const [btnHover1, setBtnHover1] =useState(false)

  const handleMouseEnter1 = () => {
      setBtnHover1(true)
  }
  const handleMouseLeave1 = () => {
      setBtnHover1(false)
  }

  const [btnHover2, setBtnHover2] =useState(false)

  const handleMouseEnter2 = () => {
      setBtnHover2(true)
  }
  const handleMouseLeave2 = () => {
      setBtnHover2(false)
  }

  const [btnHover3, setBtnHover3] = useState(false)

  const handleMouseEnter3 = () => {
      setBtnHover3(true)
  }
  const handleMouseLeave3 = () => {
      setBtnHover3(false)
  }

  const [btnHover4, setBtnHover4] = useState(false)

  const handleMouseEnter4 = () => {
      setBtnHover4(true)
  }
  const handleMouseLeave4 = () => {
      setBtnHover4(false)
  }

  const [btnHover6, setBtnHover6] =useState(false)

  const handleMouseEnter6 = () => {
      setBtnHover6(true)
  }
  const handleMouseLeave6 = () => {
      setBtnHover6(false)
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
    <div className='mt-8 relative'>
            
           
      <nav>
                    <div className="flex justify-between">
                      <div className='flex sm:pl-16 pl-4 flex justify-between rounded-lg cursor:pointer'>
                        <a href="/"> <img src="/micro.svg" alt="" width="100px" className="mr-10 mt-4" onClick={handleImageClick} />
                         </a>
                       
                        <div className="pt-4 mt-1 hidden md:flex space-x-10 text-white">
                          <Link  href="/vetting">Vetting Process </Link>
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
                          <div className=' justify-between sm:pl-4 pl-4 py-2 rounded-full sm:font-bold font-medium sm:text-base text-sm text-white hireBtn cursor-pointer flex justify-between w-48 sm:w-80' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                          <p className="sm:mt-1">Hire Top Engineers</p>
                            {btnHover3 ?
                              <p className='sm:p-2 p-2 rounded-full mr-2  hireIcon right-5 mt-0' style={{ bottom: "7px" }}><AiOutlineArrowRight className="sm:w-3 w-2 sm:h-3 h-2"/></p>
                            :
                              <p className='sm:p-2 p-2 rounded-full mr-2  hireIcon right-5 mt-0' style={{ bottom: "7px" }}><SlArrowRight className="sm:w-3 w-2 sm:h-3 h-2"/></p>
                            }
                          </div>
                        </div>
                      </div>
                    )}
          </nav> 
   

            <div className="pt-20">
                <div className='head'>
                  <h1 className='font-extrabold sm:text-6xl text-2xl px-5 text-center text-white 800 pt-8'>How it works</h1>
                  <p className='sm:text-xl text-xs px-10 text-center pt-8 line-height: 1.8;'>4 easy steps to have a top 1% engineer onboarded.</p>
                  <p className="fourdays sm:text-2xl text-xs text-center pt-8 font-bold" style={{
                    background: 'linear-gradient(105deg, #3279f4 9%, rgba(158, 211, 240, 0.9))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',}}>This is done in 4 days on average.</p>
                </div>

            </div> 

            <div className="flex flex-wrap pt-20 justify-center ">
              <div className="pt-10 md:px-0 px-4">
                <div className= "">
                      <div className=" md:w-80 md:h-80 w-72 h-40 bg-opacity-25 rounded-3xl sm:p-11 p-5 relative" style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
                            <div
                              className="  opacity-20 text-transparent bg-clip-text bg-gradient-to-r from-white via-transparent to-blue-500 md:text-6xl text-4xl font-extrabold leading-1 flex absolute top-10 left-10"
                            >
                              1
                            </div>
                          <div className="flex flex-wrap justify-center m-auto">
                              <div className="w-40">
                                <div className="sm:w-auto sm:h-auto w-20 h-20 m-auto rounded-full md:py-8 md:mx-4 py-2 px-2 flex justify-center" style={{backgroundColor: "rgba(255,255,255,.05)"}}>
                                  <BiSolidMessageSquareDetail className="sm:mt-0 mt-3  md:text-5xl text-3xl text-blue-800" />
                                </div>
                                <p className=" md:pt-10 pt-5 md:text-lg text-xs font-bold text-center">Tell us your needs</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>


     



              <div className="pt-10 px-4md:px-0 px-4">
                <div className= "">
                      <div className=" md:w-80 md:h-80 w-72 h-40 bg-opacity-25 rounded-3xl sm:p-11 p-5 relative" style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
                            <div
                              className="  opacity-20 text-transparent bg-clip-text bg-gradient-to-r from-white via-transparent to-blue-500 md:text-6xl text-4xl font-extrabold leading-1 flex absolute top-10 left-10"
                            >
                              2
                            </div>
                          <div className="flex flex-wrap justify-center m-auto">
                              <div className="w-40">
                                <div className="sm:w-auto sm:h-auto w-20 h-20 m-auto rounded-full md:py-8 md:mx-4 py-2 px-2 flex justify-center" style={{backgroundColor: "rgba(255,255,255,.05)"}}>
                                  <MdFormatListBulleted className="sm:mt-0 mt-3  md:text-5xl text-3xl text-blue-800" />
                                </div>
                                <p className=" md:pt-10 pt-5 md:text-lg text-xs font-bold text-center">Get recommendations</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>



              <div className="pt-10 px-4 md:px-0 px-4">
                <div className= "">
                      <div className=" md:w-80 md:h-80 w-72 h-40 bg-opacity-25 rounded-3xl sm:p-11 p-5 relative" style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
                            <div
                              className="  opacity-20 text-transparent bg-clip-text bg-gradient-to-r from-white via-transparent to-blue-500 md:text-6xl text-4xl font-extrabold leading-1 flex absolute top-10 left-10"
                            >
                             3
                            </div>
                          <div className="flex flex-wrap justify-center m-auto">
                              <div className="w-40">
                                <div className="sm:w-auto sm:h-auto w-20 h-20 m-auto rounded-full md:py-8 md:mx-4 py-2 px-2 flex justify-center" style={{backgroundColor: "rgba(255,255,255,.05)"}}>
                                  <AiTwotoneVideoCamera className="sm:mt-0 mt-3  md:text-5xl text-3xl text-blue-800" />
                                </div>
                                <p className=" md:pt-10 pt-5 md:text-lg text-xs font-bold text-center">Interview pre-vetted engineers</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>



              <div className="pt-10   md:px-4 px-4">
                <div className= "">
                      <div className=" md:w-80 md:h-80 w-72 h-40 bg-opacity-25 rounded-3xl sm:p-11 p-5 relative" style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
                            <div
                              className="  opacity-20 text-transparent bg-clip-text bg-gradient-to-r from-white via-transparent to-blue-500 md:text-6xl text-4xl font-extrabold leading-1 flex absolute top-10 left-10"
                            >
                              4
                            </div>
                          <div className="flex flex-wrap justify-center m-auto">
                              <div className="w-40">
                                <div className="sm:w-auto sm:h-auto w-20 h-20 m-auto rounded-full md:py-8 md:mx-4 py-2 px-2 flex justify-center" style={{backgroundColor: "rgba(255,255,255,.05)"}}>
                                  <VscAccount className="sm:mt-0 mt-3  md:text-5xl text-3xl text-blue-800" />
                                </div>
                                <p className=" md:pt-10 pt-5 md:text-lg text-xs font-bold text-center">Pick a top 1% enginee</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* <RequireCards number="1" content="Tell us your needs" icon={<BiSolidMessageSquareDetail className="sm:mt-0 mt-1 md:text-5xl text-3xl text-blue-800" />} /> */}
          {/* <RequireCards number="2" content="Get recommendations" icon={<MdFormatListBulleted className="sm:mt-0 mt-1  md:text-5xl text-3xl text-blue-800" />} /> */}
          {/* <RequireCards number="3" content="Interview pre-vetted engineers" icon={<AiTwotoneVideoCamera className="sm:mt-0 mt-1  md:text-5xl text-3xl text-blue-800" />} /> */}
          {/* <RequireCards number="4" content="Pick a top 1% enginee" icon={<VscAccount className="sm:mt-0 mt-1  md:text-5xl text-3xl text-blue-800" />} /> */}

        <div className="pt-32 flex justify-center">
          <div className="flex justify-end">
            <div className='flex mr-6 pl-8 sm:py-6 py-4 relative rounded-full transition duration-200 sm:font-bold font-medium text-sm text-white hireBtn cursor-pointer flex sm:w-64 w-56' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
              <p className="sm:text-base text-sm">Hire Top Engineers </p>
              {btnHover6 ?
                <p className='sm:p-5 p-3 rounded-full hireIcon absolute right-1.5 mt-0' style={{ bottom: "7px" }}><AiOutlineArrowRight style={{ width: "20px", height: "20px" }} /></p>
                :
                <p className='sm:p-5 p-3 rounded-full hireIcon absolute right-1.5 mt-0' style={{ bottom: "8px" }}><SlArrowRight style={{ width: "15px", height: "15px" }} /></p>
              }
            </div>
          </div>
        </div>
    
        <div className='md:pt-44 pt-20 m-auto text-center'>
          <div className='sm:w-8/12 w-[90vw] m-auto h-full md:px-16 sm:px-10 px-5 backdrop-blur-md bg-opacity-40 bg-blue-600 bg-opacity-16 border border-blue-400 border-opacity-25 rounded-3xl relative 'style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
            <h2 className='sm:text-3xl md:text-4xl text-2xl text-white font-bold pt-20'>Looking for a project-based engagement instead?</h2>
            <div className='place-content-center'>
              <div className="my-10 py-4 flex justify-center">
                <div className='sm:pl-8 pl-4 py-2 rounded-full transition duration-200 sm:font-bold font-medium sm:text-xl text-base text-white hireBtn cursor-pointer flex justify-between w-52 sm:w-80' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                  <p className="sm:mt-3">Check our microlab</p>
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

        <div className='pricing  md:pt-10 pt-5' >
          <h1 className='font-extrabold sm:text-6xl text-4xl text-center text-white pt-40'>Simple Pricing</h1>
        </div>

        <div className="flex flex-wrap justify-center px-10 pt-20">
          <div class="w-80 mx-8 my-4">
            <div class="bg-opacity-25 backdrop-blur-md bg-blue-400 border border-opacity-10 border-blue-100 rounded-3xl p-11 relative"style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
              <p class=" text-left text-2xl sm:text-3xl font-bold text-white">Talent</p>
              <div class="pt-2">
                <p class="  text-left font-medium text-gray-200 text-lg sm:text-lg text-xs">The rate you see on the candidate profiles is the rate you pay. No extra fees. The average rate for an engineer is $34/hour.</p>
                <div class="place-content-center">
                  <div className="md:pt-20 pt-5   flex justify-center">
                    <div className='mr-2 transition duration-200  sm:pl-4 pl-4 py-2 rounded-full sm:font-bold font-medium sm:text-base text-sm text-white hireBtn cursor-pointer flex justify-between w-48 sm:w-80' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
                      <p className="sm:mt-1">Hire a Top Engineer</p>
                      {btnHover6 ?
                        <p className='sm:p-2 p-2 rounded-full mr-2  hireIcon right-5 mt-0' style={{ bottom: "7px" }}><AiOutlineArrowRight className="sm:w-3 w-2 sm:h-3 h-2"/></p>
                      :
                        <p className='sm:p-2 p-2 rounded-full mr-2  hireIcon right-5 mt-0' style={{ bottom: "7px" }}><SlArrowRight className="sm:w-3 w-2 sm:h-3 h-2"/></p>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-80 mx-8 my-4">
            <div class="bg-opacity-25 backdrop-blur-md bg-blue-400 border border-opacity-10 border-blue-100 rounded-3xl p-11 relative"style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
              <p class=" text-left text-2xl sm:text-3xl font-bold text-white">MicroLab</p>
              <div class="pt-2">
                <p class="  text-left font-medium text-gray-200 text-lg sm:text-lg text-xs">Compliance, global payroll, and benefits for your team for a fixed fee of $490/month per team member.</p>
                <div class="place-content-center">
                  <div className="md:pt-20 pt-5  flex justify-center">
                    <div className='mr-2  transition duration-200 sm:pl-4 pl-4 py-2 rounded-full sm:font-bold font-medium sm:text-base text-sm text-white hireBtn cursor-pointer flex justify-between w-48 sm:w-80' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
                      <p className="sm:mt-1">Hire a Top Engineer</p>
                      {btnHover4 ?
                        <p className='sm:p-2 p-2 rounded-full mr-2  hireIcon right-5 mt-0' style={{ bottom: "7px" }}><AiOutlineArrowRight className="sm:w-3 w-2 sm:h-3 h-2"/></p>
                      :
                        <p className='sm:p-2 p-2 rounded-full mr-2  hireIcon right-5 mt-0' style={{ bottom: "7px" }}><SlArrowRight className="sm:w-3 w-2 sm:h-3 h-2"/></p>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-80 mx-8 my-4">
            <div class="bg-opacity-25 backdrop-blur-md bg-blue-400 border border-opacity-10 border-blue-100 rounded-3xl p-11 relative"style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
              <p class=" text-left text-2xl sm:text-3xl font-bold text-white">COR</p>
              <div class="pt-2">
                <p class="  text-left font-medium text-gray-200 text-lg sm:text-lg text-xs">Compliance, global payroll, and benefits for your team for a fixed fee of $490/month per team member.</p>
                <div class="place-content-center">
                  <div className="md:pt-20 pt-5  flex justify-center">
                    <div className='mr-2 transition duration-200  sm:pl-4 pl-4 py-2 rounded-full sm:font-bold font-medium sm:text-base text-sm text-white hireBtn cursor-pointer flex justify-between w-48 sm:w-80' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                      <p className="sm:mt-1">Hire a Top Engineer</p>
                      {btnHover3 ?
                        <p className='sm:p-2 p-2 rounded-full mr-2  hireIcon right-5 mt-0' style={{ bottom: "7px" }}><AiOutlineArrowRight className="sm:w-3 w-2 sm:h-3 h-2"/></p>
                      :
                        <p className='sm:p-2 p-2 rounded-full mr-2  hireIcon right-5 mt-0' style={{ bottom: "7px" }}><SlArrowRight className="sm:w-3 w-2 sm:h-3 h-2"/></p>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='md:pt-40 pt-20 '>
          <div className="px-8">
            <h1 className='font-extrabold text-3xl sm:text-7xl lg:text-5xl text-center text-white pt-8'>Default state of work is remote</h1>
            <p className='sm:text-xl text-sm text-center pt-3 sm:pt-8'>With today{"'"}s technology, a location constraint is completely unnecessary. We{"'"}re building tools to help <br />the future of remote work.</p>
          </div>
        </div>
        
        <div className="flex flex-wrap pt-20 justify-center">
          <div class="w-80 px-5 py-5">
            <div class="    bg-opacity-25 backdrop-blur-md bg-blue-400 border border-opacity-10 border-blue-100 rounded-3xl p-11 relative"style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
              <p class=" text-center text-6xl sm:text-6xl text-xl text-white">O+</p>
              <div class="pt-2">
                <p class="  text-center font-medium text-gray-200 text-lg sm:text-lg text-xs">Engineers</p>                
              </div>
            </div>
          </div>                      
          <div class="w-80  px-5 py-5">
            <div class="    bg-opacity-25 backdrop-blur-md bg-blue-400 border border-opacity-10 border-blue-100 rounded-3xl p-11 relative"style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
              <p class=" text-center text-6xl sm:text-6xl text-xl text-white">O+</p>
              <div class="pt-2">
                <p class="  text-center font-medium text-gray-200 text-lg sm:text-lg text-xs">Companies</p>                
              </div>
            </div>
          </div>                     
          <div class="w-80  px-5 py-5">
            <div class="    bg-opacity-25 backdrop-blur-md bg-blue-400 border border-opacity-10 border-blue-100 rounded-3xl p-11 relative"style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
              <p class=" text-center text-6xl sm:text-6xl text-xl text-white">O+</p>
              <div class="pt-2">
                <p class="  text-center font-medium text-gray-200 text-lg sm:text-lg text-xs">Cups of coffee</p>              
              </div>
            </div>
          </div>
        </div>

        <div className="pt-40">
          <div className='sm:pt-16 ml-8 sm:ml-20'>
            <div>
              <h1 className='font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-white py-8'>FAQs</h1>
            </div>
          </div>

          <div>
            <div className=' m-auto  md:w-6/12 sm:w-8/12 w-10/12'>          
              <div className='pt-8 cursor-pointer' onClick={()=>setfaq(1)}>
                <div className='p-7 backdrop-blur-2xl bg-opacity-40 bg-blue-700 bg-opacity-40 border border-blue-300 rounded-xl'style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
                  <div className="flex justify-between cursor-pointer">
                    <p className='text-lg sm:text-lg text-xs text-white '>What is micro1?</p>
                    <IoIosArrowDown className=''/>
                  </div>
                  {faq===1?
                    <div>
                      <p className="sm:text-lg text-xs">We help companies dynamically increase their engineering bandwidth with world-class engineers. We also build AI tools for sourcing and vetting talent globally.</p>
                    </div>
                  :
                    null
                  }
                </div>                
              </div>  
            </div>

            <div className=' m-auto  md:w-6/12 sm:w-8/12 w-10/12'>          
              <div className='pt-8 cursor-pointer' onClick={()=>setfaq(2)}>
                <div className='p-7 backdrop-blur-2xl bg-opacity-40 bg-blue-700 bg-opacity-40 border border-blue-300 rounded-xl'style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
                  <div className="flex justify-between cursor-pointer">
                    <p className='text-lg sm:text-lg text-xs text-white '>How does the free trial work?</p>
                    <IoIosArrowDown className=''/>
                  </div>
                  {faq===2?
                    <div>
                      <p className="sm:text-lg text-xs">For any engagement with micro1, the 1st week is 100% free.</p>
                    </div>
                  :
                    null
                  }
                </div>
              </div>  
            </div>
            <div className=' m-auto  md:w-6/12 sm:w-8/12 w-10/12'>          
              <div className='pt-8 cursor-pointer' onClick={()=>setfaq(3)}>
                <div className='p-7 backdrop-blur-2xl bg-opacity-40 bg-blue-700 bg-opacity-40 border border-blue-300 rounded-xl'style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
                  <div className="flex justify-between cursor-pointer">
                    <p className='text-lg sm:text-lg text-xs text-white '>Will the engineer work directly for me?</p>
                    <IoIosArrowDown className=''/>
                  </div>
                  {faq===3?
                    <div>
                      <p className="sm:text-lg text-xs">The engineer will be in direct contact with you and your company. You can also add the engineer to all of your company channels and softwares; however, you will not be directly hiring the engineer, you will be hiring micro1. Hiring micro1 builds a layer of abstraction for the legal, compliance, global pay, and benefits.</p>
                    </div>
                  :
                    null
                  }
                </div>                
              </div>  
            </div>

            <div className=' m-auto  md:w-6/12 sm:w-8/12 w-10/12'>          
              <div className='pt-8 cursor-pointer' onClick={()=>setfaq(4)}>
                <div className='p-7 backdrop-blur-2xl bg-opacity-40 bg-blue-700 bg-opacity-40 border border-blue-300 rounded-xl'style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
                  <div className="flex justify-between cursor-pointer">
                    <p className='text-lg sm:text-lg text-xs text-white '>How does billing work?</p>
                    <IoIosArrowDown className=''/>
                  </div>
                  {faq===4?
                    <div>
                      <p className="sm:text-lg text-xs">The engineer{"'"}s hourly rate is used as reference to calculate the total fixed monthly pay (in other words, their salary). This is done through a stripe subscription and there are no additional costs.</p>
                    </div>
                  :
                    null
                  }
                </div>
              </div>  
            </div>
            <div className=' m-auto  md:w-6/12 sm:w-8/12 w-10/12'>          
              <div className='pt-8 cursor-pointer' onClick={()=>setfaq(5)}>
                <div className='p-7 backdrop-blur-2xl bg-opacity-40 bg-blue-700 bg-opacity-40 border border-blue-300 rounded-xl'style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
                  <div className="flex justify-between cursor-pointer">
                    <p className='text-lg sm:text-lg text-xs text-white '>How are you different?</p>
                    <IoIosArrowDown className=''/>
                  </div>
                  {faq===5?
                    <div>
                      <p className="sm:text-lg text-xs">The engineer will be in direct contact with you and your company. You can also add the engineer to all of your company channels and softwares; however, you will not be directly hiring the engineer, you will be hiring micro1. Hiring micro1 builds a layer of abstraction for the legal, compliance, global pay, and benefits.</p>
                    </div>
                  :
                    null
                  }
                </div>                
              </div>  
            </div>

            <div className=' m-auto  md:w-6/12 sm:w-8/12 w-10/12'>          
              <div className='pt-8 cursor-pointer' onClick={()=>setfaq(6)}>
                <div className='p-7 backdrop-blur-2xl bg-opacity-40 bg-blue-700 bg-opacity-40 border border-blue-300 rounded-xl'style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
                  <div className="flex justify-between cursor-pointer">
                    <p className='text-lg sm:text-lg text-xs text-white '>What technologies do micro1 developers know?</p>
                    <IoIosArrowDown className=''/>
                  </div>
                  {faq===6?
                    <div>
                      <p className="sm:text-lg text-xs">React, Node.js, AWS, UI/UX, Web3, AI/ML, and much more. We also build AI tools for sourcing and vetting talent globally.</p>
                    </div>
                  :
                    null
                  }
                </div>
              </div>  
            </div>
          </div>
        </div>

        <div className='pt-40 m-auto w-10/12 text-center'>    
          <div className='w-5/5 h-full backdrop-blur-md bg-opacity-40 bg-blue-600 bg-opacity-16 border border-blue-400 border-opacity-25 rounded-xl relative 'style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
            <h2 className='text-4xl sm:text-5xl text-xl text-white pt-20 pb-5 font-bold'>Hire a world-class engineering team easily</h2>
            <p className='text-2xl sm:text-xl text-xs pt-4 text-white-200'>Compliance, global payroll, and benefits, all handled by us.</p>
            <div className='place-content-center'>
              <div className="py-10  flex justify-center">
                <div className='flex mr-6 pl-8 sm:py-6 py-4 relative rounded-full transition duration-200 sm:font-bold font-medium text-sm text-white hireBtn cursor-pointer flex sm:w-64 w-56' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
                  <p className="sm:text-base text-sm">Hire Top Engineers </p>
                  {btnHover6 ?
                    <p className='sm:p-5 p-3 rounded-full hireIcon absolute right-1.5 mt-0' style={{ bottom: "7px" }}><AiOutlineArrowRight style={{ width: "20px", height: "20px" }} /></p>
                    :
                    <p className='sm:p-5 p-3 rounded-full hireIcon absolute right-1.5 mt-0' style={{ bottom: "8px" }}><SlArrowRight style={{ width: "15px", height: "15px" }} /></p>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="pb-4 ">
          <div className='pt-40 flex flex-wrap justify-between '>
            <div className='pt-6 rounded-lg text-left flex justify-center sm:pl-8 pl-0 sm:m-0 m-auto '>
              <img src="/micro.svg" alt='' width="100px"/>
            </div>
            <div className='flex flex-wrap justify-center p-2'>
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
)}

export default Page