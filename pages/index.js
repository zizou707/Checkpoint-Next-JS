import React from "react"
import Image from "next/image"
import { HiArrowDown } from "react-icons/hi"

const Home = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-3 md:w-1/2 ml-32 ">
          <Image
            src="/me.jpg"
            alt="my-pic"
            width={275}
            height={200}
            className="shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mr-28 mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Zied!</h1>
          <p className="text-lg mt-4 mb-6 mr-28 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Software Engineer{" "}
            </span>
            based in Tunisia. Working towards creating software that
            makes life easier and more meaningful.
          </p>
          
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
          <HiArrowDown size={35} className="animate-bounce" />
      </div>
    </section>
  )
}

export default Home
