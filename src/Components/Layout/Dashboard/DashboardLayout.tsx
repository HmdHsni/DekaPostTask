import React, { useEffect, useState } from "react";
import { MdPerson } from "react-icons/md";
import { Sidebar } from "../Sidebar";
import { Navbar } from "../../Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Todos } from "../../Todos";
import { BsBell } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import Dashboard from "../../Dashboard";
import { t } from "i18next";
const DashboardLayout = ({ children }: any) => {
  const [existName, setExistName] = useState<any>();
  useEffect(() => {
    const userName = localStorage.getItem("userName");
    const isUserNamePresent = userName && userName.trim() == "";
    // console.log(isUserNamePresent ,"isUserNamePresent");

    setExistName(isUserNamePresent);
    if (existName == null) {
      toast.success(t("please change your user name"), {
        position: "top-center",
      });
    }
  }, []);
  console.log(existName, "isUserNamePresent");

  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <div className=" ">
        <div className="flex  flex-row gap-x-4  mt-6  px-[12px]  ">
          <div className=" max-h-[calc(100vh-168px)] rounded-cs  ">
            <Sidebar />
          </div>
          <div className="flex-1 bg-slate-100 dark:bg-black rounded">
            {children}
          </div>
        </div>
      </div>
      {existName == null ? <Toaster /> : null}
    </div>
  );
};

export default DashboardLayout;
