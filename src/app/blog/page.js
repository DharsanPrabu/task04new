"use client"
 
import {SlArrowRight} from "react-icons/sl"
import {AiOutlineArrowRight, AiTwotoneVideoCamera, AiFillTwitterCircle} from "react-icons/ai" 
import {BiSolidMessageSquareDetail} from "react-icons/bi"
import {VscAccount} from "react-icons/vsc"
import {MdFormatListBulleted} from "react-icons/md"
import {IoIosArrowDown} from "react-icons/io"
import {TiSocialLinkedinCircular} from "react-icons/ti"
import Link from 'next/link'; 
import { useState,useEffect} from "react";
import { HiMenu, HiX } from "react-icons/hi";
import {AiOutlineYoutube} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {IoLogoWhatsapp} from "react-icons/io"



// import slide_image_1 from "/achoos.png";
// import slide_image_2 from "/achoos.png";
//  import slide_image_3 from "./public/achoos.png";

// const images = [
//   'achoos.png',
//   'bg1.avif',
//   'achoos.png',
//   // Add more image URLs as needed
// ];

 
function Home() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

 
 
    
    // const [currentSlide, setCurrentSlide] = useState(0);
  
    // const nextSlide = () => {
    //   setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    // };
  
    // const prevSlide = () => {
    //   setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    // };
 
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const [displayImages, setDisplayImages] = useState(images.slice(0, 3));
  
    // const prevImage = () => {
    //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    // };
  
    // const nextImage = () => {
    //   setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    // };
  
    // const showNextThreeImages = () => {
    //   const nextIndex = currentIndex + 1;
    //   const nextImages = [images[nextIndex], images[nextIndex + 1], images[nextIndex + 2]].filter(Boolean);
    //   setDisplayImages(nextImages);
    // };


 
  return (
 <div>
              <nav>
                        <div className="flex justify-between">
                          <div className='flex sm:pl-16 pl-4 flex justify-between rounded-lg cursor:pointer'>
                          <p href="/"> <img src="/achoos.png" alt="" width="100px" className="mr-10 mt-4" />
                            </p>
                          
                            <div className="pl-80 pt-4 mt-1 hidden md:flex space-x-10  text-black  font-bold  ">
                              <Link  href="/ ">Who We Are </Link>
                              <Link href="/ ">What we have</Link>
                              <Link href="/ ">Save a date</Link>
                              <Link href="/ ">Secrets of Acchoos</Link>
                              <Link href="/ ">Words of Acchoos</Link>
                              <Link href="/ ">Login</Link>



                            </div>
                          </div>
                            
                          <div className="md:pl-0 md:hidden flex sm:mr-16 mr-4 pt-8">
                            <div onClick={toggleMobileMenu} className="text-white focus:outline-none">
                              {isMobileMenuOpen ? 
                                <HiX className="text-2xl text-black" />
                              :
                                <HiMenu className="text-2xl text-black" />
                              }
                            </div>
                          </div>

                          {/* Desktop  */}
                          <div className="hidden md:flex justify-end">
                            {/* <div className='hidden md:flex mr-6 pl-8 py-4 relative rounded-full transition duration-200 font-bold text-sm text-white hireBtn cursor-pointer flex w-56' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
                              <p>Hire Top Engineers </p>
                              {btnHover6 ?
                                <p className='px-3 py-3 rounded-full hireIcon absolute right-2 mt-0' style={{ bottom: "4px" }}><AiOutlineArrowRight style={{ width: "20px", height: "20px" }} /></p>
                                :
                                <p className='p-4 rounded-full hireIcon absolute right-1.5 mt-0' style={{ bottom: "5px" }}><SlArrowRight style={{ width: "11px", height: "10px" }} /></p>
                              }
                            </div> */}
                          </div>
                        </div>

                        {/* mobile */}
                        {isMobileMenuOpen && (
                          <div className="md:hidden mt-2 absolute z-40 w-full" >
                            <ul className="text-black p-4 py-8  ">
                              <li>
                              <Link  href="/vetting">Who We Are </Link>

                              </li>
                              <li className="pt-8">
                              <Link href="/vetting">What we have</Link>

                              </li>    
                              <li className="pt-8">
                              <Link href="/blog">Save a date</Link>

                              </li>      
                              <li className="pt-8">
                              <Link href="/blog">Secrets of Acchoos</Link>


                              </li>  
                              <li className="pt-8">
                              <Link href="/blog">Words of Acchoos</Link>


                              </li>  
                              <li className="pt-8">
                              <Link href="/blog">Login</Link>
                              </li>   
                            </ul>
                            <div className="  flex w-60 ml-4  pb-8">
                              {/* <div className=' justify-between sm:pl-4 pl-4 py-2 rounded-full sm:font-bold font-medium sm:text-base text-sm text-white hireBtn cursor-pointer flex justify-between w-48 sm:w-80' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                              <p className="sm:mt-1">Hire Top Engineers</p>
                                {btnHover3 ?
                                  <p className='sm:p-2 p-2 rounded-full mr-2  hireIcon right-5 mt-0' style={{ bottom: "7px" }}><AiOutlineArrowRight className="sm:w-3 w-2 sm:h-3 h-2"/></p>
                                :
                                  <p className='sm:p-2 p-2 rounded-full mr-2  hireIcon right-5 mt-0' style={{ bottom: "7px" }}><SlArrowRight className="sm:w-3 w-2 sm:h-3 h-2"/></p>
                                }
                              </div> */}
                            </div>
                          </div>
                        )}
              </nav>  
 

                <div>
                    {/* <div className="  w-full h-full    absolute  ">
                                <img className=" w-full h-full    " src="/bg1.avif"    alt="bg"></img>
                              </div> */}

                              {/* <div className="flex justify-center mt-8">
                                          <div className="relative">
                                            <input
                                              type="text"
                                              className="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                                              placeholder="Search..."
                                            />
                                            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                                              <svg
                                                className="text-gray-600 h-4 w-4 fill-current"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                              >
                                                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                              </svg>
                                            </button>
                                          </div>
                            </div> */}

                            {/* <div className=" pt-4">
                          <div className="  bg-gray-200  ml-14  relative   pt-40"style={{width:"1400px"}}>
                                            <p className="  pl-20 text-red-500 text-4xl  ml-80 ">SPECIAL OFFER</p>
                                            <p className=" h-60 text-[200px] text-center font-black text-gray-800 mr-20">SALE <span className="text-7xl text-red-400   ">50%</span></p>
                                            <p className="   text-center text-white bg-red-300 text-4xl">DRESS COLLECTION<span className="text-4xl text-white  ml-80">OFF%</span></p>
                                        
                                          </div>
                          </div> */}
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" data-interval="3000">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="bg1.avif" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src="bg1.avif" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                      <img src="achoos.png" class="d-block w-100" alt="..."/>
                    </div>
                  </div>
                </div>


                </div>
       

               
                          <div className="    w-40 flex justify-center ml-80">
                          <p className="border border-red-500 w-28 py-4 ml-8 mt-4 text-center">Learn More</p>
                          </div>


         
                      



                      <div className=" text-4xl text-center  bg-purple-400 py-20">
                                <h3>Customise your own design</h3>

                                <div className="flex justify-center pt-4 ">
                      <div className="relative ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3  ">
              <img
              
                src="/cloudicon.png"  
                alt="Upload Icon"
                className="h-5 w-5"
              />
            </div>
            <input
              type="text"
              className="pl-10 pr-4 py-2 border rounded-full py-4 text-sm "
              placeholder="Upload Your Design"
            />
          </div>
          <p className="text-xl pt-3 pl-4">Or</p>
          
          <div className="relative pl-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            
            </div>
            <input
              type="text"
              className="pl-10 pr-4 py-2 border rounded-full py-4 text-sm "
              placeholder="Customise your favourite"
            />
          </div>
          
          </div>
                        
                      </div>
                    

        

                      <div>
                        <h3 className="text-4xl text-center pt-20"> Collections Avaiable</h3>
                      </div>

        
   

                  <div className='flex   justify-center mt-4' >
                        <div className='px-6 '>
                            <p className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer">
                              <img
                                src="achoos.png"
                                alt="Image Alt Text"
                                style={{ width: '300px', height: '400px' }}
                              />
                            </p>
                      </div>

                      <div className='px-6 '>
                            <p className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer">
                              <img
                                src="achoos.png"
                                alt="Image Alt Text"
                                style={{ width: '300px', height: '400px' }}
                              />
                            </p>
                      </div>

                      <div className='px-6 '>
                            <p className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer">
                              <img
                                src="achoos.png"
                                alt="Image Alt Text"
                                style={{ width: '300px', height: '400px' }}
                              />
                            </p>
                      </div>

                      <div className='px-6 '>
                            <p className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer">
                              <img
                                src="achoos.png"
                                alt="Image Alt Text"
                                style={{ width: '300px', height: '400px' }}
                              />
                            </p>
                      </div>

                      <div className='px-6 '>
                            <p className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer">
                              <img
                                src="achoos.png"
                                alt="Image Alt Text"
                                style={{ width: '300px', height: '400px' }}
                              />
                            </p>
                      </div>
                  </div>
                      <div className='   '>
                            <div className='  h-400 bg-purple-400 rounded-b-full 'style={{height:"500px"}}>     
                                      <h2 className='text-6xl flex justify-center pt-4'>Get in touch with us</h2>

                                  <div className='flex justify-between '>

                                      <div className='ml-40  '>
                                          <h3 className=''>Join Our Team</h3>

                                          <div className="relative ">
                                              <div className="absolute inset-y-0 left-0 flex items-center pl-3  ">
                                                <img
                                                
                                                  src="/cloudicon.png"  
                                                  alt="Upload Icon"
                                                  className="h-5 w-5"
                                                />
                                              </div>
                                              <input
                                                type="text"
                                                className="pl-10 pr-4 py-2 border rounded-full py-2 text-sm "
                                                placeholder="Upload Your Resume"
                                              />
                                            </div>
                                            <div className='border rounded-full w-32 h-10 bg-white mt-3'>
                                            <p className='text-center mt-1 text-gray-800'>Submit </p> 
                                            </div>                                     
                                      </div>

                                          <div className=' mr-20'>
                                            <h4 className='font-bold'>Visit The Shop</h4>
                                            <p className=''>No 14/16, Gurunathan Street,</p>
                                            <p className=''>Pattabiraman Saalai Road,</p>
                                            <p>Opp to srinivasa Perumal Koil, Tennur</p>
                                            <p>Trichy – 620017.</p>
                                          </div>
                                          
                                    </div>
                                    <div className='flex justify-center'>
                                            <div className='flex justify-center   overflow-hidden shadow-lg    bg-white'style={{width:"800px",height:"300px"}}>
                                            <div className=' mt-8  '>
                                                <h2>Track Your Order</h2>
                                                <div className="relative mt-4 text-blue-400">
                                                        <input
                                                          type="text"
                                                          className="pl-6 pr-4  border rounded-full py-2 text-sm bg-purple-400 text-black "
                                                          placeholder="Order Number"
                                                        />
                                                      </div>
                                                      <div className="relative mt-4">
                                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3  ">                                                  
                                                            </div>
                                                            <input
                                                              type="text"
                                                              className="pl-6 pr-4  border rounded-full py-2 text-sm text-black bg-purple-400  "
                                                              placeholder="Phone Number"
                                                            />
                                                          </div>

                                            </div>
                                    </div>
                  
                        </div>
                        <div className='flex justify-center mt-8 '>
                              <p > <AiOutlineYoutube className=' text-white w-14 h-14 border rounded-full bg-black px-2 py-2'/></p>
                              <p><AiOutlineInstagram className=' text-white w-14 h-14 ml-4 border rounded-full bg-black px-2 py-2'/></p> 
                              <p><IoLogoWhatsapp className='text-white w-14 h-14 ml-4 border rounded-full bg-black px-2 py-2'/></p> 
                              </div>
                                <div className=' flex justify-center mr-96  ml-80 mt-4  '>
                                            <div className="relative  overflow-hidden shadow-lg   "> 
                                                <input
                                                  type="text"
                                                  className="pl-6 pr-4 py-2 border rounded-lg py-3 text-sm    "style={{width:"500px"}}
                                                  placeholder="Email"
                                                />
                                              </div>
                                  
                                              <div className=' mt-2 ml-8 w-40 h-10 border rounded-lg bg-purple-400 cursor-pointer'>
                                                <p className='pl-4 mt-2 text-center'>Subscribe</p>
                                              </div>
                                </div>
                                <hr className=' border-black border-2'></hr>
                              <div>
                                <h4 className='float-right'>*Terms And Conditions</h4>
                              </div>
                    </div>

                              

                            
                        </div>

                                 
                  

 </div>
 
  )
}

export default Home
