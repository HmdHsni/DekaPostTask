import React from 'react'
import { AdminAccess } from '../../data/SidebarOption'
import { useNavigate, useLocation, Link } from "react-router-dom";
export function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
       
        <div className='w-[200px] h-[450px] bg-white dark:bg-black  shadow-lg rounded-md '>
            {AdminAccess && AdminAccess.map((item,index)=>{
                return(
                    <div  key={index} 
                  onClick={() => {
                        if (item.link) {
                            navigate(item.link);
                        } 
                      }}
                     className='w-full flex justify-end px-3 gap-x-3 pt-5
                       text-gray-900 font-normal'>
                        <span className='text-gray-400 text-base  cursor-pointer'>{item.label}</span>
                        <div className='text-blue-300  text-2xl  cursor-pointer'>{item.icon}</div>
                        
                    </div>
                )
            })}
        </div>
    )
}
