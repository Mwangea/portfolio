import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#12141e] pt-12">
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful products?
            </h2>
            <button className='bg-primaryColor text-white font-[500]
              flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
               <a href="#contact">
                  <i class="ri-mail-line"></i>  Get in touch             
                </a>
            </button>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              please feel free to reach out if you're interested in discussing a potential Project.
              You can also hit me up for collaborations. I am always willing to collaborate in other people's project ideas. 
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
               Follow Me:
               </span>
               <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                  <a 
                  href="https://twitter.com/@_mwangea"
                  className="text-gray-300 font-[500] text-[18px]"
                  >
                  <i class="ri-twitter-line"></i>
                  </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                  <a 
                  href="https://linkedin.com/mwangea"
                  className="text-gray-300 font-[500] text-[18px]"
                  >
                  <i class="ri-linkedin-line"></i>
                  </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer