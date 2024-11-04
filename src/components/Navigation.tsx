import { useState } from "react"

import styles from "../styles/navigation.module.css";

import NavLink from "./NavLink";

export default function Navigation() {
    const [isActive, setIsActive] = useState(true);

    const navClass = isActive ? `${styles.navigation} ${styles.navigationActive}` : `${styles.navigation}`;
    
    return(
        <>
            <button 
                className="lg:invisible lg:opacity-0 fixed top-4 right-4 bg-slate-200 rounded-full p-1 hover:bg-slate-300 transition" onClick={() => setIsActive(!isActive)}>
                {
                    isActive ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    )

                    : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        
                    )
                }
            </button>
            <aside className="pr-6 lg:relative fixed top-0 left-0" id="aside">
                <nav className={navClass}>
                    <div>
                        <div className="pl-5 lg:my-6">
                            <span className="text-3xl font-bold flex">
                                <p className="text-blue-500 text-4xl">G</p>
                                <p className="text-red-500 text-4xl">o</p>
                                <p className="text-yellow-500 text-4xl">o</p>
                                <p className="text-blue-500 text-4xl">g</p>
                                <p className="text-green-500 text-4xl">l</p>
                                <p className="text-red-500 text-4xl">e</p>
                            </span>
                            <p className="text-3xl font-bold text-gray-600">Hola Entrepreneurs 2024</p>
                        </div>

                        <ul className="flex flex-col">
                            <NavLink text='Inicio' url='/' /> 
                            
                            <NavLink text='Grow your business brand' url='/grow-your-business-brand' />
                        
                            <NavLink text='Get your business visible on Google' url='/' />

                            <NavLink text='Get started with Google Analytics' url='/' />
                                    
                            <NavLink text='Track website traffic with Google Analytics' url='/' />
                            
                            <NavLink text='Design your digital marketing strategy with AI' url='/' />
                        
                            <NavLink text='Find customers with Google Maps' url='/' />
                        
                            <NavLink text='Reach new audiences with YouTube' url='/' />
                        
                            <NavLink text='Decision making with data' url='/' />
                        </ul>
                    </div>
                </nav>
            </aside>
        </>
    )
}


