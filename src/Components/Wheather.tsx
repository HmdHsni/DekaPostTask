import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';

interface MyFormValues {
  selectedCity: string;
  cities: Array<string>;
}

export function Wheather() {
  // Initialize state with value from local storage or default to an empty string
  const [selectedCity, setSelectedCity] = useState(() => {
    const savedCity = localStorage.getItem("city");
    return savedCity ? JSON.parse(savedCity) : '';
  });

  useEffect(() => {
    // Update local storage when selectedCity changes
    localStorage.setItem("city", JSON.stringify(selectedCity));
  }, [selectedCity]);

  const initialValues: MyFormValues = {
    selectedCity: selectedCity, 
    cities: ["City A", "City B", "City C"],
  };

  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            setSelectedCity(values.selectedCity); // Update state
            actions.setSubmitting(false);
          }}
        >
          <Form>
            <label htmlFor="selectedCity" className="block mb-3 text-sm font-medium text-blue-900 dark:text-white text-center mt-4"> انتخاب شهر</label>
            <Field 
              as="select" id="selectedCity" name="selectedCity"
              className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              onChange={(e:any) => setSelectedCity(e.target.value)} // Update state on change
            >
              <option value=""> شهر مورد نظر را انتخاب کنید </option>
              {initialValues.cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </Field>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
