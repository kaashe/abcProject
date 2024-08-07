import DashboardStats from "./components/DashboardStats";
import BuildingStorefrontIcon from "@heroicons/react/24/outline/BuildingStorefrontIcon";
import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
import ProductsCard from "../../components/Cards/ProductsCard";
import { useMemo, useState } from "react";
import { useGetProductsQuery } from "../common/dashboardSlice";

const productsData = [
  { title: "Shoes 301", category: "shoes", icon: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg", description: "Test products" },
  { title: "Shoes 302", category: "shoes", icon: "https://img.freepik.com/free-photo/sports-shoe-pair-design-illustration-generated-by-ai_188544-19642.jpg?t=st=1717491936~exp=1717495536~hmac=cf7172c99b4dcdec0cd2f87805cafb02fabdd6cf221af4314195c7ebea9bd69b&w=996", description: "Test products" },
  { title: "Cap 303", category: "caps", icon: "https://alprints.com/wp-content/uploads/2023/03/Cap-Mockup-2.jpg", description: "Test products" },
  { title: "Cap 304", category: "caps", icon: "https://img.freepik.com/free-photo/set-two-trucker-hats-with-mesh-back_23-2149410050.jpg?t=st=1717492076~exp=1717495676~hmac=0663a86dee09fc2d04176ed4ca6ebeea92389a64dc1a32a8299b708b3ee1caf6&w=826", description: "Test products" },
  { title: "Cap 305", category: "caps", icon: "https://img.freepik.com/premium-psd/sports-cap-logo-mockup-branding-mockup_57262-172.jpg?w=826", description: "Test products" },
  { title: "Shirt 101", category: "shirts", icon: "https://alprints.com/wp-content/uploads/2018/09/kids-tshirt-design.jpg", description: "Test Product" },
  { title: "Shirt 102", category: "shirts", icon: "https://img.freepik.com/premium-psd/tshirts-mockup-front-back-white-male-tshirt-photoshop-mockup-3d-tshirt-mockup-t-shirt-psd_662214-642.jpg?w=826", description: "Test Product" },
];

function Dashboard() {
  const { data: allProducts, isLoading, isSuccess, isError, error } = useGetProductsQuery();
  const products = allProducts?.data?.products || [];
  const uniqueCategories = [...new Set(products.map(product => product.category.categoryName))];
  // console.log("uniqueCategories", uniqueCategories)
  const [filterItem, setFilterItem] = useState("");

  const userdata = localStorage.getItem("user");

  // const userData = JSON.parse(userdata);
  const userData = userdata ? JSON.parse(userdata) : {};

  // Retrieve stuckreviews and reviewsUsed from localStorage
  const stuckreviews = localStorage.getItem("stuckreviews");
  const reviewsUsed = localStorage.getItem("reviewsUsed");

  // Check if stuckreviews and reviewsUsed are equal
  const isReviewDisabled = stuckreviews === reviewsUsed;

  const filterProducts = (products) => {
    if (!filterItem) return products;
    return products.filter(product => product.category.categoryName === filterItem);
  };

  const filterItemHandler = (item) => {
    setFilterItem(item);
  };

  const filteredProducts = useMemo(() => filterProducts(products), [filterItem, products]);

  const statsData = [
    { title: "Original Balance", value: `$${userData?.balance || 0}`, icon: <BuildingStorefrontIcon className="w-8 h-8" />, description: "" },
    { title: "Trial Balance", value: "$50", icon: <CreditCardIcon className="w-8 h-8" />, description: "" },
    { title: "Rewards & Bonus", value: `$${userData?.rewards || 0}`, icon: <CircleStackIcon className="w-8 h-8" />, description: "" },
  ];

  return (
    <>
      <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
        {statsData.map((d, k) => (
          <DashboardStats key={k} {...d} colorIndex={k} />
        ))}
      </div>
      <div className="mt-2 gap-1">
        <ul className="menu menu-sm menu-vertical lg:menu-horizontal bg-base-400 rounded-box space-y-1 lg:space-y-0 lg:space-x-1 gap-1">
          {uniqueCategories.map((category, index) => (
            <li key={index} onClick={() => filterItemHandler(category)}>
              <a className={`${filterItem === category ? "bg-black text-white" : "bg-base-100"}`}>{category}</a>
            </li>
          ))}
          <li onClick={() => filterItemHandler("")}>
            <a className={`${filterItem === "" ? "bg-black text-white" : "bg-base-100"}`}>All Products</a>
          </li>
        </ul>
      </div>
      <div className={`grid lg:grid-cols-${isLoading ? "1" : "4"} mt-4 grid-cols-1 gap-6`}>
        {isLoading ? (
          <div className="flex align-middle justify-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          filteredProducts.map((d, k) => <ProductsCard key={k} {...d} colorIndex={k} />)
        )}
      </div>
    </>
  );
}

export default Dashboard;
