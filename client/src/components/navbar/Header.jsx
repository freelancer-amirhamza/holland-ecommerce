import Link from 'next/link'
import React from 'react'
import { FiCopy } from "react-icons/fi";


const Header = () => {
  return (
    <>
    <nav className='bg-[#018476] w-full  fixed h-max flex justify-center items-center ' >
        <div className="flex flex-col md:flex-row py-4 md:py-2 gap-3 w-full px-16  ">
            <div className="flex w-full justify-center items-center gap-2 md:justify-end">
                <span className="font-bold ">
                    15% off $35
                </span>
                <Link href='#' className='flex gap-2 items-center bg-[#047368] px-2 rounded-sm py-1'>
                <p className="font-semibold">Code:</p>
                <strong className='uppercase' >treat</strong>
                <FiCopy />
                </Link>
            </div>
            <div className="flex w-full gap-5 justify-center md:justify-between px-4 text-md underline">
                <Link className='' href="#">Shop now</Link>
                <Link href="#">Redeem instore| T&Cs</Link>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Header