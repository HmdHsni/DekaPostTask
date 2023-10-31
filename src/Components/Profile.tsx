import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useTheme } from "./ThemeProvider ";
import toast, { Toaster } from "react-hot-toast";
interface MyFormValues {
  firstName: string;
  selectedCity: string;
  cities: Array<string>;
}

export function Profile() {
  const { theme, setTheme } = useTheme();
  const initialValues: MyFormValues = {
    firstName: "",
    selectedCity: "",
    cities: ["City A", "City B", "City C"],
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as "light" | "dark");
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="flex flex-col justify-center items-center mt-10">
        <div>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              // toast.success("تغییرات با موفقیت ذخیره شد" ,{
              //   position: "top-center",
              // })
              alert("تغییرات با موفقیت ذخیره شد");
              actions.setSubmitting(false);
              localStorage.setItem(
                "userName",
                JSON.stringify(values.firstName)
              );
            }}
          >
            <Form>
              <label
                htmlFor="firstName"
                className="block mb-3 text-sm font-medium text-blue-900 dark:text-white text-center"
              >
                {" "}
                تغییر نام کاربری
              </label>
              <Field
                id="firstName"
                name="firstName"
                placeholder=" انتخاب نام کاربری"
                className="bg-gray-50 border  focus:outline-none border-gray-300 text-gray-900 text-sm text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />

              <div className="flex justify-center my-3">
                <select
                  className="bg-gray-50 border  focus:outline-none border-gray-300 text-gray-900 text-sm text-right rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handleThemeChange}
                  value={theme}
                >
                  <option value="light">تم روشن </option>
                  <option value="dark"> تم تیره</option>
                </select>
              </div>

              <button
                type="submit"
                className="text-white ml-7 mt-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                ذخیره تغییرات
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
