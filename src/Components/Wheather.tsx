import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { citiesOfIran } from '../data/citiesName';
import toast, { Toaster } from "react-hot-toast";
import axios from"axios";
interface MyFormValues {
  selectedCity: string;
  cities: Array<string>;
}

export function Wheather() {
 const[listOfCities,setListOfCities]=useState<any>([]);
 const[tempCity,setTempCity]=useState<number>();
 const[selectedCity,setSelectedCity]=useState<string>();
  useEffect(() => {
    const cityArray:any=[];
citiesOfIran.map(c=>{
  // console.log(c.city,"city");
  cityArray.push(c.city)
  
})
setListOfCities(cityArray)
// console.log("cityofarray",cityArray );
}, []);
const sendRequestForWethear=(city:any)=>{
  const foundCity=citiesOfIran.find((c:any)=> c.city==city);
  const lat=foundCity?.lat;
  const long=foundCity?.lng;
  axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`)
  .then(response=>{
    setTempCity(response.data.current_weather.temperature)
    console.log(response.data);
  }).catch(e=>{
    console.log("خطا در دریافت دما شهر" ,e.message);
    toast.error(e.message,{
      position: "top-center",
    });
    
  })
  
  
}
  const initialValues: MyFormValues = {
    selectedCity: localStorage.getItem("city") || '',
    cities: listOfCities,
  };

  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            // console.log("submit");
            
            // localStorage.setItem("selectedCity", values.selectedCity);
            // console.log({ values, actions });
          }}
        >
          
        {({ values, setFieldValue }) => (
          <Form>
            <label htmlFor="selectedCity" className="block mb-3 text-sm font-medium text-blue-900 dark:text-white text-center mt-4"> انتخاب شهر</label>
            <Field 
              as="select" id="selectedCity" name="selectedCity"
              className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              onChange={
                (e:any) =>{
                  setFieldValue('selectedCity', e.target.value);
                 sendRequestForWethear(e.target.value);
                 setSelectedCity(e.target.value)
                 
                  
           
                   
                  }

              }
              value={values.selectedCity}
            >
              <option value=""> شهر مورد نظر را انتخاب کنید </option>
              {initialValues.cities.map((city,index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </Field>
          </Form>)}
        </Formik>
        <div className='flex flex-col gap-3 bg-slate-500 text-white dark:text-black dark:bg-slate-50 mt-4 rounded-md p-4 items-center justify-center '>
          {selectedCity ? (<p>{selectedCity}</p>) :(<p>شهر</p>)}
          {tempCity ?(
            <p>{tempCity}</p>
          ) : (<p> دمای شهر</p>)}
          <p>state</p>
        </div>
      </div>
    </div>
  );
}
