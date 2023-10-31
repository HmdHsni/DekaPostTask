import React , {useState}from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const[lang,setLang]=useState<string>()
  const changeLanguage=(value:string)=>{
    setLang(value);
    if(value=="persian"){
        i18n.changeLanguage('fa')
    }
    else if(value=="English"){
        i18n.changeLanguage('en')
    }
  }

  return (
    // <div className='flex flex-row items-center justify-center  '>
    //   <button 
    //   className=" " onClick={() => i18n.changeLanguage('en')}>English</button>
    //   <button onClick={() => i18n.changeLanguage('fa')}>فارسی</button>
    // </div>
    <div className='flex  items-center justify-center my-4'>
        <select
        name='language'
          className="bg-gray-50 border w-[200px] focus:outline-none border-gray-300 text-gray-900 text-sm text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={lang} onChange={(event)=>changeLanguage(event.target.value)}>
            <option selected>language</option>
        <option value="persian" >فارسی</option>
            <option value="English">English</option>
           
        </select>
    </div>
  );
};

export default LanguageSwitcher;
