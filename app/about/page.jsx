import Image from 'next/image';
import React from 'react'

const chooseus = [

  {
    heading: "Expert Curation:",
    data: "Our team comprises seasoned critics and experts who meticulously curate reviews. We prioritize quality over quantity, ensuring that each analysis is a thoughtful exploration of the anime's narrative, character development, and artistic merit.",
  },
  {
    heading: "Holistic Insights: ",
    data: "We go beyond traditional reviews by providing holistic insights into the cultural, social, and artistic aspects of anime. Spirited Score aims to be your go-to source for a comprehensive understanding of the medium, enriching your viewing experience."
  },
  {
    heading: "User-Centric Approach:",
    data: "Spirited Score is more than a website; it's a community where your voice matters. We encourage user engagement through comments, forums, and interactive discussions. Your opinions shape the discourse, creating a dynamic space for anime enthusiasts to connect."
  },
  {
    heading: "Diverse Perspectives:",
    data: "Recognizing the vast diversity within the anime community, Spirited Score ensures that our reviews cater to a broad spectrum of tastes. Whether you're a seasoned fan or a newcomer, we offer insights that resonate with your unique preferences."
  },
  {
    heading: "Transparency and Trust:",
    data: "Trust is the foundation of our relationship with our audience. Spirited Score is committed to transparency and unbiased reviews. Our goal is to empower you to make informed choices about the anime you invest your time in."
  }
];
export default function page() {
  return (
    <section className="px-2 mx-auto max-w-[1500px] md:pt-20 pt-20 overflow-hidden pb-12 lg:pt-[120px] lg:pb-[90px] ">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <Image height={450} width={450}
                    src="/Itachi.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
                <div className="py-3 sm:py-4">
                <Image height={450} width={450}
                    src="/OP.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
              <div className="py-3 sm:py-4">
                <Image height={450} width={450}
                    src="/Goku.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
                <div className="relative z-10 my-4">
                <Image height={450} width={450}
                    src="/DS2.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                  <span className="absolute -right-7 -bottom-7 z-[-1]">
                    <svg
                      width={134}
                      height={106}
                      viewBox="0 0 134 106"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="1.66667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 1.66667 104)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="16.3333"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 16.3333 104)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={31}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 31 104)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="45.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 45.6667 104)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="60.3334"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 60.3334 104)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="88.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 88.6667 104)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="117.667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 117.667 104)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="74.6667"
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 74.6667 104)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={103}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 103 104)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={132}
                        cy={104}
                        r="1.66667"
                        transform="rotate(-90 132 104)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.66667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 1.66667 89.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="16.3333"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 16.3333 89.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={31}
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 31 89.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="45.6667"
                        cy="89.3333"
                        r="1.66667"
                        transform="rotate(-90 45.6667 89.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="60.3333"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 89.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="88.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 89.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="117.667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 89.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="74.6667"
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 89.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={103}
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 103 89.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={132}
                        cy="89.3338"
                        r="1.66667"
                        transform="rotate(-90 132 89.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.66667"
                        cy="74.6673"
                        r="1.66667"
                        transform="rotate(-90 1.66667 74.6673)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.66667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 31.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="16.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 16.3333 74.6668)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="16.3333"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 31.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={31}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 31 74.6668)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={31}
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 31 31.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="45.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 45.6667 74.6668)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="45.6667"
                        cy="31.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 31.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="60.3333"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 60.3333 74.6668)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="60.3333"
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 60.3333 30.9998)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="88.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 88.6667 74.6668)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="88.6667"
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 88.6667 30.9998)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="117.667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 117.667 74.6668)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="117.667"
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 117.667 30.9998)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="74.6667"
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 74.6667 74.6668)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="74.6667"
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 74.6667 30.9998)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={103}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 103 74.6668)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={103}
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 103 30.9998)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={132}
                        cy="74.6668"
                        r="1.66667"
                        transform="rotate(-90 132 74.6668)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={132}
                        cy="30.9998"
                        r="1.66667"
                        transform="rotate(-90 132 30.9998)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.66667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 1.66667 60.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.66667"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 1.66667 16.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="16.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 16.3333 60.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="16.3333"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 16.3333 16.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={31}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 31 60.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={31}
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 31 16.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="45.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 45.6667 60.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="45.6667"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 45.6667 16.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="60.3333"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 60.3333 60.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="60.3333"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 60.3333 16.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="88.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 88.6667 60.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="88.6667"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 88.6667 16.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="117.667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 117.667 60.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="117.667"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 117.667 16.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="74.6667"
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 74.6667 60.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="74.6667"
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 74.6667 16.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={103}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 103 60.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={103}
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 103 16.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={132}
                        cy="60.0003"
                        r="1.66667"
                        transform="rotate(-90 132 60.0003)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={132}
                        cy="16.3333"
                        r="1.66667"
                        transform="rotate(-90 132 16.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.66667"
                        cy="45.3333"
                        r="1.66667"
                        transform="rotate(-90 1.66667 45.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="1.66667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 1.66667 1.66683)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="16.3333"
                        cy="45.3333"
                        r="1.66667"
                        transform="rotate(-90 16.3333 45.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="16.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 16.3333 1.66683)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={31}
                        cy="45.3333"
                        r="1.66667"
                        transform="rotate(-90 31 45.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={31}
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 31 1.66683)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="45.6667"
                        cy="45.3333"
                        r="1.66667"
                        transform="rotate(-90 45.6667 45.3333)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="45.6667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 45.6667 1.66683)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="60.3333"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 60.3333 45.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="60.3333"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 60.3333 1.66683)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="88.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 88.6667 45.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="88.6667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 88.6667 1.66683)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="117.667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 117.667 45.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="117.667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 117.667 1.66683)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="74.6667"
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 74.6667 45.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx="74.6667"
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 74.6667 1.66683)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={103}
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 103 45.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={103}
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 103 1.66683)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={132}
                        cy="45.3338"
                        r="1.66667"
                        transform="rotate(-90 132 45.3338)"
                        fill="#3056D3"
                      />
                      <circle
                        cx={132}
                        cy="1.66683"
                        r="1.66667"
                        transform="rotate(-90 132 1.66683)"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span className="block mb-4 text-lg font-semibold text-purple-600 dark:text-purple-400">
                About Us
              </span>
              <h2 className="mb-5 text-2xl font-bold  sm:text-[30px]/[44px]">
                Embark on an Anime Odyssey with Spirited Score: Your Gateway to In-Depth Reviews and Community Connection
              </h2>
              <p className="mb-5 text-base text-justify">
                Spirited Score is not just an anime review platform, it is a community of dedicated anime aficionados who share a profound passion for the diverse and enchanting world of Japanese animation. Our team consists of seasoned critics, industry insiders, and enthusiastic fans, united by the belief that anime deserves thoughtful and nuanced exploration.
              </p>
              <h4 className="mb-5 text-xl font-bold  sm:text-[28px]/[40px]">
                Why Choose Us:
              </h4>
              <ul>
                {
                  chooseus.map((data) => {
                    return (
                      <li className="mb-8 text-base text-justify" key={data.heading}>
                        <span className='text-lg text-purple-600 dark:text-purple-400 font-semibold mr-3'>
                          {data.heading}
                        </span>
                        {data.data}
                      </li>

                    )
                  })
                }

              </ul>
              Choose Spirited Score for an immersive, informative, and community-driven anime experience. Join us in celebrating the rich tapestry of Japanese animation, where every review is a journey into the heart of storytelling and creativity.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
