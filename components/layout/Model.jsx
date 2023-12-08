'use client'
import React, { useEffect, useRef, useState } from "react";

export default function Dmodal ({btn,header,children,submit}) {
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null);
  const modal = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (!modalOpen || modal.current.contains(target) || trigger.current.contains(target)) return;
      setModalOpen(false);
    };

    const keyHandler = ({ keyCode }) => {
      if (modalOpen && keyCode === 27) {
        setModalOpen(false);
      }
    };

    const handleScroll = () => {
      if (modalOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    document.addEventListener('click', clickHandler);
    document.addEventListener('keydown', keyHandler);
    handleScroll();

    return () => {
      document.removeEventListener('click', clickHandler);
      document.removeEventListener('keydown', keyHandler);
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  return (
    <>
        <button
          ref={trigger}
          onClick={() => setModalOpen(true)}
        >
          {btn}
        </button>
        <div
          className={`fixed z-50 left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-slate-900/50 px-4 py-5 ${
            modalOpen ? "block" : "hidden"
          }`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="w-full max-w-[570px] rounded-[20px] bg-white dark:bg-gray-800 border dark:border-slate-600 px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
          >
            <h3 className="pb-[18px] text-xl font-semibold sm:text-2xl text-purple-500 dark:text-purple-400">
              {header}
            </h3>
            <span
              className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary`}
            ></span>
            <div className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
              {children}
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-1/2 px-3">
                <button
                  onClick={() => setModalOpen(false)}
                  className="block w-full rounded-md border border-stroke dark:border-slate-600 p-3 text-center text-base font-medium text-dark transition hover:border-red-500/70 hover:bg-red-500/70 hover:text-white dark:text-white"
                >
                  Cancel
                </button>
              </div>
              <div className="w-1/2 px-3">
                <div onClick={() => setModalOpen(false)} className="block w-full rounded-md border dark:border-slate-600 bg-purple-500/70 p-3 text-center text-base font-medium text-white transition hover:opacity-60">
                 {submit}
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
