import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";

const iconClasses = `h-6 w-6`;

let routes = [
  {
    path: "/app/dashboard",
    icon: <Squares2X2Icon className={iconClasses} />,
    name: "Dashboard",
  },
  {
    path: "/app/account-detail",
    icon: <MdOutlineAccountBalanceWallet className={iconClasses} />,
    name: "AccountDetail",
  },
  {
    path: "/app/about-us", //url folder
    icon: <LuUsers2 className={iconClasses} />,
    name: "About Us",   //sidebar title
  },


];


export default routes;
