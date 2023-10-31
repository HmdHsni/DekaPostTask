import React from 'react'
import { AdminAccess } from '../../data/SidebarOption'
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useLocalizedSidebar } from '../../useLocalizedSidebar';
export function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();
    const { translatedAdminAccess } = useLocalizedSidebar();
    const { i18n } = useTranslation();
    const isRtl = i18n.language === 'en';
    return (
       
        <div className='w-[200px] h-[450px] bg-white dark:bg-black  shadow-lg rounded-md '>
            {translatedAdminAccess && translatedAdminAccess.map((item,index)=>{
                return(
                    <div  key={index} 
                  onClick={() => {
                        if (item.link) {
                            navigate(item.link);
                        } 
                      }}
                     className={`w-full flex flex-row-reverse  justify-end px-3 gap-x-3 pt-5
                      ${location.pathname==item.link ? " font-bold text-blue-950 dark:text-white dark:font-bold" : " text-gray-900  font-normal"}`}>
                        <span className='text-gray-400 text-base  cursor-pointer'>{item.label}</span>
                        <div className='text-blue-300  text-2xl  cursor-pointer'>{item.icon}</div>
                        
                    </div>
                )
            })}
        </div>
    )
}
