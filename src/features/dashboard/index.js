import DashboardStats from "./components/DashboardStats";
import BuildingStorefrontIcon from "@heroicons/react/24/outline/BuildingStorefrontIcon";
import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
import ProductsCard from "../../components/Cards/ProductsCard";
import { GiClothes, GiLoincloth } from "react-icons/gi";
import { TbPerfume } from "react-icons/tb";
import { FaOpencart } from "react-icons/fa";
import { LuCable } from "react-icons/lu";
import { GiConverseShoe } from "react-icons/gi";
import { PiBaseballCap } from "react-icons/pi";
import { useMemo, useState } from "react";

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
    title: "Shoes 301",
    category: "shoes",
    icon: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    description: "Test products",
  },
  {
    title: "Shoes 302",
    category: "shoes",
    icon: "https://img.freepik.com/free-photo/sports-shoe-pair-design-illustration-generated-by-ai_188544-19642.jpg?t=st=1717491936~exp=1717495536~hmac=cf7172c99b4dcdec0cd2f87805cafb02fabdd6cf221af4314195c7ebea9bd69b&w=996",
    description: "Test products",
  },
  {
    title: "Cap 303",
    category: "caps",
    icon: "https://alprints.com/wp-content/uploads/2023/03/Cap-Mockup-2.jpg",
    description: "Test products",
  },
  {
    title: "Cap 304",
    category: "caps",
    icon: "https://img.freepik.com/free-photo/set-two-trucker-hats-with-mesh-back_23-2149410050.jpg?t=st=1717492076~exp=1717495676~hmac=0663a86dee09fc2d04176ed4ca6ebeea92389a64dc1a32a8299b708b3ee1caf6&w=826",
    description: "Test products",
  },
  {
    title: "Cap 305",
    category: "caps",
    icon: "https://img.freepik.com/premium-psd/sports-cap-logo-mockup-branding-mockup_57262-172.jpg?w=826",
    description: "Test products",
  },
  {
    title: "Shirt 101",
    category: "shirts",
    icon: "https://alprints.com/wp-content/uploads/2018/09/kids-tshirt-design.jpg",
    description: "Test Product",
  },
  {
    title: "Shirt 102",
    category: "shirts",
    icon: "https://img.freepik.com/premium-psd/tshirts-mockup-front-back-white-male-tshirt-photoshop-mockup-3d-tshirt-mockup-t-shirt-psd_662214-642.jpg?w=826",
    description: "Test Product",
  },
];

function Dashboard() {
  const [filterItem, setFilterItem] = useState("");

  const filterProducts = (products) => {
    if (filterItem === "") return products;
    return products?.filter((product) => product?.category === filterItem);
  };

  const filterItemHandler = (item) => {
    setFilterItem(item);
  };
  const filteredProducts = useMemo(
    () => filterProducts(productsData),
    [filterItem, productsData]
  );

  return (
    <>
      {/** ---------------------- Balance & Rewards Section ------------------------- */}
      <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
        {statsData.map((d, k) => {
          return <DashboardStats key={k} {...d} colorIndex={k} />;
        })}
      </div>
      <div className="mt-2 gap-1">
        <ul className="menu menu-sm menu-vertical lg:menu-horizontal bg-base-400 rounded-box space-y-1 lg:space-y-0 lg:flex lg:flex-wrap">
          <li onClick={() => filterItemHandler("shoes")}>
            <a
              className={`${
                filterItem === "shoes" ? "bg-black text-white" : "bg-base-100"
              }`}
            >
              <GiConverseShoe />
              Shoes
            </a>
          </li>
          <li onClick={() => filterItemHandler("caps")}>
            <a
              className={`${
                filterItem === "caps" ? "bg-black text-white" : "bg-base-100"
              }`}
            >
              <PiBaseballCap />
              Caps
            </a>
          </li>
          <li onClick={() => filterItemHandler("shirts")}>
            <a
              className={`${
                filterItem === "shirts" ? "bg-black text-white" : "bg-base-100"
              }`}
            >
              <GiClothes />
              Shirts
            </a>
          </li>
          <li onClick={() => filterItemHandler("")}>
            <a
              className={`${
                filterItem === "womens-fashion"
                  ? "bg-black text-white"
                  : "bg-base-100"
              }`}
            >
              <GiLoincloth />
              Women's Fashion
            </a>
          </li>
          <li onClick={() => filterItemHandler("")}>
            <a
              className={`${
                filterItem === "perfumes"
                  ? "bg-black text-white"
                  : "bg-base-100"
              }`}
            >
              <TbPerfume />
              Perfumes
            </a>
          </li>
          <li onClick={() => filterItemHandler("")}>
            <a
              className={`${
                filterItem === "home-lifestyle"
                  ? "bg-black text-white"
                  : "bg-base-100"
              }`}
            >
              <FaOpencart />
              Home & Lifestyle
            </a>
          </li>
          <li onClick={() => filterItemHandler("")}>
            <a
              className={`${
                filterItem === "electronic-devices"
                  ? "bg-black text-white"
                  : "bg-base-100"
              }`}
            >
              <LuCable />
              Electronic Devices
            </a>
          </li>
          <li onClick={() => filterItemHandler("")}>
            <a
              className={`${
                filterItem === "" ? "bg-black text-white" : "bg-base-100"
              }`}
            >
              All Products
            </a>
          </li>
        </ul>
      </div>
      {/** ---------------------- Products Cards Section ------------------------- */}
      <div className="grid lg:grid-cols-4 mt-4 grid-cols-1 gap-6">
        {filteredProducts?.map((d, k) => (
          <ProductsCard key={k} {...d} colorIndex={k} />
        ))}
      </div>
    </>
  );
}

export default Dashboard;
