import React from 'react'

function RequireCards(props) {
  return (
    <div className="pt-10 px-5">
        <div className="md:w-80 md:h-80 w-72 h-72 bg-opacity-25 rounded-3xl sm:p-11 p-5 relative" style={{backgroundColor: "rgba(50,60,131,.16)", border: "0.5px solid rgba(202,204,255,.1)"}}>
            <p className=" opacity-20 text-transparent bg-clip-text bg-gradient-to-r from-white via-transparent to-blue-500 md:text-6xl text-4xl font-extrabold leading-1 flex absolute top-10 left-10">
                {props.number}
            </p>
            <div className="flex flex-wrap justify-center">
                <div className='pt-7'>
                    <div className="mt-5 p-7 mx-8 rounded-full flex justify-center mx-10" style={{backgroundColor: "rgba(255,255,255,.05)"}}>
                        {props.icon}
                    </div>
                    <p className="md:pt-10 pt-5 md:text-lg text-xs font-bold text-center w-40">{props.content}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RequireCards
