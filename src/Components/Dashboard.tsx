import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
interface ClockProps {
  timezone: string;
}
interface User {
    name: string;
  }
const timezone = 'Iran/Tehran';
const Dashboard: React.FC = () => {
    const [time, setTime] = useState(moment().tz(timezone).format('HH:mm '));
    const [isUserNamePresent,setIsUserNamePresent]=useState<any>();
    const [showName,setShowName]=useState<any>();
    const { t } = useTranslation();

    const getGreeting = (): string => {
        const hour = moment().tz(timezone).hour();
        if (hour < 12) return t("good morning");
        else if(hour <15) return t("good afternoon")
        else if (hour < 20) return t("good evening");
        return t("good night")
      };
    
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(moment().tz(timezone).format('HH:mm '));
      }, 6000);
  
      return () => clearInterval(interval);
    }, [timezone]);
    useEffect(()=>{
      const userName = localStorage.getItem('userName')
      
      const isUserNamePresent = userName && userName.trim() !== '';
      setIsUserNamePresent(isUserNamePresent);
      
      function getUserName(): User | null {
          const item = localStorage.getItem('userName');
          if (item === null) {
            return null;
          }
        
          try {
            return JSON.parse(item) as User;
          } catch (e) {
            console.error("Error parsing 'userName' from localStorage:", e);
            return null;
          }
        }
        const userFirstName = getUserName();
        setShowName(userFirstName);
        console.log(userFirstName,"USER");
        
        
     
    },[])
  

  return (
    <div>
    <div className='flex flex-col justify-center items-center mt-[100px] text-xl font-bold gap-y-2 mb-3 text-blue-700 dark:text-white '>
      <h1>{time}</h1>
     <div className='flex flex-row justify-center'>
     <h1 className='px-1'>{getGreeting()}</h1>
      {isUserNamePresent ? (<span>{showName} {t("dear")}</span>) : (<span>{t("dear user")}</span>)}
     </div>
     <h1>{t('welcome')}</h1>
    </div>
       </div>
  );
};

export default Dashboard;