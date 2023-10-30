
import {
    BsGrid,
  } from "react-icons/bs";
  import { WiDayRainWind } from "react-icons/wi"
  import { FcTodoList } from "react-icons/fc";
  import {AiOutlineUser} from "react-icons/ai"
export const AdminAccess = [
    {
      id: 0,
      label: "داشبورد",
      icon: <BsGrid/>,
      link: "/dashboard",
      child: [],
    },
    {
      id: 1,
      label: "  لیست وظایف",
      icon: <FcTodoList />,
      value: "",
      link: "/todos",
      child: [],
    },
    {
      id: 2,
      label: " آب و هوا",
      icon: <WiDayRainWind />,
      value: "",
      link:"/weather",
      child: [
      ],
    },
  
    {
        id: 3,
        label: "   پروفایل",
        icon: <AiOutlineUser />,
        value: "",
        link: "/profile",
        child: [],
    },
  ];