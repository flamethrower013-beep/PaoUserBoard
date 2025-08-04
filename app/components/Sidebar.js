import React from 'react'
import Image from 'next/image'
import { Home, TrendingUp, CreditCard,  HelpCircle, User, Edit, AwardIcon } from 'lucide-react'

function Sidebar({setActivePage}) {
  return (
    <>
      {/* MObile Navbar */}
      <div className="mobile-nav flex justify-between items-center w-screen sm:hidden p-2 bg-raisin-black-3 fixed top-0 left-0 z-50">
        <div className="flex justify-center items-center" onClick={()=> setActivePage('home')}>
        <Image className='rounded-[50%] m-auto' width={80} height={80} src='/assets/logo.png' alt='Logo'/>
    <h1 className='text-3xl font-extrabold'>PAO</h1>
      </div>
      <div className="profile">
        <div onClick={() => setActivePage('profile')} className=' p-2 rounded-full border-2 hover:bg-raisin-black-2 flex gap-2 hover:text-orange cursor-pointer'>
  <User />
</div>
      </div>
      </div>
      <ul className='w-full  fixed bottom-0 left-0 bg-raisin-black-3 sm:hidden grid grid-cols-5 grid-rows-1 items-center justify-center gap-1 z-50'>
        
<li onClick={() => setActivePage('home')} className='text-xs h-full justify-center items-center hover:bg-raisin-black-2 flex flex-col gap-2 text-center hover:text-orange cursor-pointer'>
  <Home />Home
</li>
<li onClick={() => setActivePage('leader-board')} className='text-xs h-full justify-center items-center hover:bg-raisin-black-2 flex flex-col gap-2 text-center hover:text-orange cursor-pointer'>
  <TrendingUp />Leader Board
</li>
      <li onClick={()=>setActivePage('create')} className='h-full justify-center items-center m-auto border-0 font-semibold p-5 w-fit rounded-full flex gap-2 bg-orange duration-150 ease-in hover:bg-orange-500 cursor-pointer'><Edit/></li>
<li onClick={() => setActivePage('tournaments')} className='text-xs h-full justify-center items-center hover:bg-raisin-black-2 flex flex-col gap-2 text-center   hover:text-orange cursor-pointer'>
  <AwardIcon />My Tournaments
</li>
<li onClick={() => setActivePage('wallet')} className='text-xs h-full justify-center items-center hover:bg-raisin-black-2 flex flex-col gap-2 text-center hover:text-orange cursor-pointer'>
  <CreditCard />Wallet
</li>
      </ul>
    <div className="sidebar flex sm:block sm:h-screen w-full sm:max-w-fit bg-raisin-black-3 text-white fixed bottom-0 sm:top-0 left-0 z-50">
      <div className="sm:flex justify-center items-center mb-6 px-10 p-2 hidden">
        <Image className='rounded-[50%] m-auto' width={80} height={80} src='/assets/logo.png' alt='Logo'/>
    <h1 className='text-3xl font-extrabold'>PAO</h1>
      </div>
      
      <ul className=' w-full flex-col sm:flex hidden  '>
        <li onClick={()=>setActivePage('create')} className='px-9 py-3 border-0 mb-5 font-semibold w-fit rounded m-auto flex gap-2 bg-orange duration-150 ease-in hover:bg-orange-500 cursor-pointer'><Edit/>Create</li>
        
<li onClick={() => setActivePage('home')} className='px-9 py-3   hover:bg-raisin-black-2 flex gap-2 hover:text-orange cursor-pointer'>
  <Home />Home
</li>
<li onClick={() => setActivePage('leader-board')} className='px-9 py-3 hover:bg-raisin-black-2 flex gap-2 hover:text-orange cursor-pointer'>
  <TrendingUp />Leader Board
</li>
<li onClick={() => setActivePage('tournaments')} className='px-9 py-3 hover:bg-raisin-black-2 flex gap-2 hover:text-orange cursor-pointer'>
  <AwardIcon />My Tournaments
</li>
<li onClick={() => setActivePage('wallet')} className='px-9 py-3 hover:bg-raisin-black-2 flex gap-2 hover:text-orange cursor-pointer'>
  <CreditCard />Wallet
</li>

<li onClick={() => setActivePage('profile')} className='px-9 py-3 hover:bg-raisin-black-2 sm:flex gap-2 hover:text-orange cursor-pointer hidden'>
  <User />Profile
</li>
</ul>
      <p className='text-xs absolute left-4 bottom-1.5 text-gray-400 hidden md:block'>&copy; {new Date().getFullYear()} Pao. All rights reserved.</p>
    </div>
    </>
  )
}

export default Sidebar
