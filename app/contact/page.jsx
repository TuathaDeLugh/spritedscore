import ContactPage from '@/components/pages/ContactPage';
import React from 'react'
import { BsHouseDoor,BsTelephone,BsEnvelopeAt } from "react-icons/bs";

function Contact() {
  return (
    <section className="mx-auto max-w-[1500px]  m-t-[65px] relative z-10 overflow-hidden py-20 lg:py-[120px] min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className="mb-4 block text-base font-semibold  text-purple-700 dark:text-purple-400">
                Contact Us
              </span>
              <h2 className="mb-6 text-[32px] font-bold uppercase text-dark dark:sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                GET IN TOUCH WITH US
              </h2>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eius tempor incididunt ut labore e dolore magna aliqua. Ut
                enim adiqua minim veniam quis nostrud exercitation ullamco
              </p>
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                <BsHouseDoor size={40}/>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Our Location
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    40, Surat
                  </p>
                </div>
              </div>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  <BsTelephone size={40}/>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Phone Number
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    (+91) 999 855 855 4
                  </p>
                </div>
              </div>

              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                <BsEnvelopeAt size={40}/>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Email Address
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    umangsailor@hotmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ContactPage/>
        </div>
      </div>
    </section>
  );
};

export default Contact;

