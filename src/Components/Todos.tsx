import React, { useEffect, useState } from "react";
import DashboardLayout from "./Layout/Dashboard/DashboardLayout";
import { todosList } from "../data/SidebarOption";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { json } from "node:stream/consumers";
import { t } from "i18next";
export function Todos() {
  const [userTask, setUserTask] = useState<any>([]);
  const [selectedTask, setSelectedTask] = useState<number>();
  const [userTaskStorage , setUserTaskStorage]=useState<boolean>(false);
  const todosList=[
    {id :1 , description:"تسک 1 "},
    {id :2 , description:"تسک 2 "},
    {id :3 , description:"تسک 3 "},
    {id :4 , description:"تسک 4 "},
    {id :5 , description:"تسک 5 "},
  ]
  useEffect(() => {
    localStorage.setItem("tskArray", JSON.stringify(todosList));
    setUserTaskStorage(true);
  }, []);
  useEffect(()=>{
    const getTaskFromLS = localStorage.getItem("tskArray");
const tasks = getTaskFromLS ? JSON.parse(getTaskFromLS) : [];
setUserTask(tasks);
console.log(tasks, "tasks");

  },[userTaskStorage])

  const handleDelete = (taskId: number) => {
    const updatedTasks = userTask.filter((task: any) => task.id !== taskId);
    localStorage.setItem("tskArray", JSON.stringify(updatedTasks));
    setUserTask(updatedTasks);
   
  };
  const handleEdit = (taskId: number) => {
    const newDescription = prompt("Edit your task:");
    if (newDescription) {
      const updatedTasks = userTask.map((t: any) => {
        if (t.id === taskId) {
          return { ...t, description: newDescription };
        }
        return t;
      });
      setUserTask(updatedTasks);
    }
  };
  return (
    <div className="flex flex-col mt-10 gap-y-3 items-center">
      <h1 className="flex justify-center items-center text-base font-bold text-blue-900 dark:text-white">
        {t("list of todos")}
      </h1>
      <table
        className="table-fixed border-collapse
       w-[600px] border border-blue-900 "
      >
        <thead>
          <tr className="text-right border-b-2 border-blue-900 text-blue-900 dark:text-white ">
            <th className="pr-5 ">{t("delete")}</th>
            <th className="pr-5">{t("edit")}</th>
            <th className="pr-5"> {t("tasks")}</th>
          </tr>
        </thead>
        <tbody>
          {userTask &&
            userTask.map((tsk: any, index: number) => (
              <tr key={index} className="border-b-2 border-blue-900 text-blue-900 dark:text-white ">
                <td
                  className="text-right pr-4 text-xl  text-red-500  flex justify-end cursor-pointer"
                  onClick={() => handleDelete(tsk.id)}
                >
                  <AiOutlineMinusCircle />
                </td>
                <td
                  className=" pl-[165px] text-xl  text-blue-900  cursor-pointer"
                  onClick={() => handleEdit(tsk.id)}
                >
                  <FiEdit2 />
                </td>
                <td className="text-right  pr-5 ">
                  {tsk.description}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
