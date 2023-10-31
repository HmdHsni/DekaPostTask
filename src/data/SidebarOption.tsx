
import {
    BsGrid,
  } from "react-icons/bs";
  import { WiDayRainWind } from "react-icons/wi"
  import { FcTodoList } from "react-icons/fc";
  import {AiOutlineUser} from "react-icons/ai";
export const AdminAccess = [
    {
      id: 0,
      label: "dashboard",
      icon: <BsGrid/>,
      link: "/dashboard",
      child: [],
    },
    {
      id: 1,
      label: "todoList",
      icon: <FcTodoList />,
      value: "",
      link: "/todos",
      child: [],
    },
    {
      id: 2,
      label: "weather",
      icon: <WiDayRainWind />,
      value: "",
      link:"/weather",
      child: [
      ],
    },
  
    {
        id: 3,
        label: "profile",
        icon: <AiOutlineUser />,
        value: "",
        link: "/profile",
        child: [],
    },
  ];
  export const todosList=[
    {id :1 , description:"تسک 1 "},
    {id :2 , description:"تسک 2 "},
    {id :3 , description:"تسک 3 "},
    {id :4 , description:"تسک 4 "},
  ]