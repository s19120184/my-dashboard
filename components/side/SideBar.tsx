
import Image from "next/image";
import React from "react";
import { IoBrowsersOutline, IoCalculator, IoFootball, IoHeart, IoLogoReact } from "react-icons/io5";
import SideBarItem from "./SideBarItem";



const menuItems =[
  {
    path:'/dashboard/main',
    icon:<IoBrowsersOutline size={40}/>,
    tittle:'Dashboard',
    subTitle:'Visualizacion'
  },
  {
    path:'/dashboard/counter',
    icon:<IoCalculator size={40}/>,
    tittle:'Counter',
    subTitle:'Contador Client side'
  },
   {
    path:'/dashboard/pokemons',
    icon:<IoFootball size={40}/>,
    tittle:'pokemons',
    subTitle:'static'
  },
  {
    path:'/dashboard/favorites',
    icon:<IoHeart size={40}/>,
    tittle:'favorites',
    subTitle:'pokemones favoritos'
  }
]

export default function SideBar() {
 
  
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-1/3 fixed left-0  overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className=" mr-2 " />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt="io"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">El machio</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        
        {menuItems.map((item)=>(
               <SideBarItem key={item.path} path={item.path} icon={item.icon} tittle={item.tittle} subTitle={item.subTitle} />
        ))}
        
       
      </div>
    </div>
  );
}
