"use client"
import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Create from './components/Create';
import Home from './components/Home'
import LeaderBoard from './components/LeaderBoard';
import Wallet from './components/Wallet';
import Tournaments from './components/Tournaments';
import Profile from './components/Profile';

function Page() {
  const [activePage, setActivePage] = useState('leader-board');
  const renderPage = ()=>{
    switch(activePage){
      case 'create':
        return <Create  />
      case 'home':
        return <Home />
      case 'leader-board':
        return <LeaderBoard/>
      
      case 'wallet':
        return <Wallet/>
      case 'tournaments':
        return <Tournaments/>
     
      case 'profile':
        return <Profile/>
      default:
        return<Home/>
    }
  }
  return (
    <div className='text-white'>
     <Sidebar activePage={activePage} setActivePage={setActivePage} />
    <div className='flex pb-20 sm:h-screen sm:p-0 pt-22 sm:pl-57 w-full bg-eerie-black'>
      <div className='min-h-screen h-fit w-full  bg-eerie-black'>
      <div className="banner px-4 w-auto rounded min-h-[95vh] m-4 bg-raisin-black-1 py-3">
        
      {
        renderPage()
      }
      </div>
      </div>
    
    </div>
    </div>
  )
}

export default Page
