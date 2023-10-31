import { t } from 'i18next'
import React from 'react'

export function Navbar() {
    

    return (
        <header className="flex relative flex-row items-center justify-center shadow-lg mb-3   max-w-[1440px]">
        <nav className="flex flex-row w-full items-center justify-around gap-x-6 bg-error-200 bg-slate-50 dark:bg-black rounded-md py-2 ">
         <li className='relative cursor-pointer duration-100 hover:text-gray-900 text-left   hover:font-bold hover:opacity-100 text-base dark:text-white list-none'>{t("home")}</li>
         <li className='relative cursor-pointer duration-100 hover:text-gray-900 text-left   hover:font-bold hover:opacity-100 text-base dark:text-white list-none'>{t("about us")} </li>
         <li className='relative cursor-pointer duration-100 hover:text-gray-900 text-left   hover:font-bold hover:opacity-100 text-base dark:text-white  list-none'>{t("weblog")}</li>
        <li className='relative cursor-pointer duration-100 hover:text-gray-900 text-left   hover:font-bold hover:opacity-100 text-base dark:text-white list-none'>{t("contact us")} </li>
       </nav>
              
           </header>
    )
}
