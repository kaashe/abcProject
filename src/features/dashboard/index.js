import DashboardStats from "./components/DashboardStats";
import BuildingStorefrontIcon from "@heroicons/react/24/outline/BuildingStorefrontIcon";
import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
import ProductsCard from "../../components/Cards/ProductsCard";
import { GiClothes, GiLipstick, GiLoincloth } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { TbPerfume } from "react-icons/tb";
import { FaOpencart } from "react-icons/fa";
import { LuCable } from "react-icons/lu";

const statsData = [
  {
    title: "Original Balance",
    value: "0",
    icon: <BuildingStorefrontIcon className="w-8 h-8" />,
    description: "",
  },
  {
    title: "Trial Balance",
    value: "0",
    icon: <CreditCardIcon className="w-8 h-8" />,
    description: "",
  },
  {
    title: "Rewards & Bonus",
    value: "0",
    icon: <CircleStackIcon className="w-8 h-8" />,
    description: "",
  },
];
const productsData = [
  {
    title: "Shoes",
    price: "30",
    icon: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    description: "Test products",
  },
  {
    title: "Cap",
    price: "10",
    icon: "https://alprints.com/wp-content/uploads/2023/03/Cap-Mockup-2.jpg",
    description: "Test products",
  },
  {
    title: "Shirt",
    price: "81",
    icon: "https://alprints.com/wp-content/uploads/2018/09/kids-tshirt-design.jpg",
    description: "Test Product",
  },
];

function Dashboard() {
  return (
    <>
      {/** ---------------------- Balance & Rewards Section ------------------------- */}
      <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
        {statsData.map((d, k) => {
          return <DashboardStats key={k} {...d} colorIndex={k} />;
        })}
      </div>
      <div className="mt-2 gap-1">
        <ul className="menu menu-sm menu-vertical lg:menu-horizontal bg-base-400 rounded-box space-y-1 lg:space-y-0 lg:space-x-1">
          <li>
            <a className="bg-base-100"><TiShoppingCart />Groceries & Pets</a>
          </li>
          <li>
          
            <a className="bg-base-100"> <GiLipstick />Health & Beauty</a>
          </li>
          <li>
            <a className="bg-base-100"><GiClothes />Men's Fashion</a>
          </li>
          <li>
            <a className="bg-base-100"><GiLoincloth />Women's Fashion</a>
          </li>
          <li>
            <a className="bg-base-100"><TbPerfume />PerFumes</a>
          </li>
          <li>
            <a className="bg-base-100"><FaOpencart />Home & Lifestyle</a>
          </li>
          <li>
            <a className="bg-base-100"><LuCable />Electronic Devices</a>
          </li>
          {/* <li>
            <a className="bg-base-100">TV & Home Appliances</a>
          </li> */}
        </ul>{" "}
      </div>
      {/** ---------------------- Products Cards Section ------------------------- */}
      <div className="grid lg:grid-cols-3 mt-4 grid-cols-1 gap-6">
        {productsData.map((d, k) => {
          return <ProductsCard key={k} {...d} colorIndex={k} />;
        })}
      </div>
    </>
  );
}

export default Dashboard;
