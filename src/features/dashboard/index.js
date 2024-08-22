import DashboardStats from "./components/DashboardStats";
import BuildingStorefrontIcon from "@heroicons/react/24/outline/BuildingStorefrontIcon";
import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
import ProductsCard from "../../components/Cards/ProductsCard";
import { useEffect, useMemo, useState } from "react";
import {
  useGetCurrentUserQuery,
  useGetProductsQuery,
} from "../common/dashboardSlice";

// Function to shuffle the products array (making a copy to avoid modifying the original)
const shuffleArray = (array) => {
  const arrayCopy = [...array];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
};


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
  const {
    data: allProducts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();
  const products = allProducts?.data?.products || [];
  const uniqueCategories = [
    ...new Set(products.map((product) => product?.category?.categoryName)),
  ];

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterItem, setFilterItem] = useState("");
  const [userData, setUserData] = useState();

  // Call useGetCurrentUserQuery to get user data and the refetch function
  const { data: currentUserData, refetch: refetchCurrentUser } = useGetCurrentUserQuery();
  // console.log(currentUserData?.data?.data,'user data');
const title=currentUserData?.data?.data;
  async function updateLocalStorage(updatedUserData) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay for demonstration
      const localstorageData = localStorage.setItem(
        "user",
        JSON.stringify(updatedUserData)
      );
      setUserData(JSON.parse(localstorageData));
      console.log("User data updated in localStorage");
    } catch (error) {
      console.error("Error updating user data in localStorage:", error);
    }
  }
  // Function to filter and shuffle products
  const filterAndShuffleProducts = (products, filterItem) => {
    let filtered = products;
    if (filterItem) {
      filtered = products.filter(
        (product) => product.category.categoryName === filterItem
      );
    }
    return shuffleArray(filtered);
  };

  // Fetch current user data every 5 seconds and update localStorage asynchronously
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     refetchCurrentUser()
  //       .then((response) => {
  //         const updatedUserData = response.data.data.data;
  //         updateLocalStorage(updatedUserData);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching current user data:", error);
  //       });
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, [refetchCurrentUser]);
  useEffect(() => {
    const shuffleProducts = () => {
      const shuffled = filterAndShuffleProducts(products, filterItem);
      setFilteredProducts(shuffled);
    };

    shuffleProducts(); // Shuffle initially

    const intervalId = setInterval(() => {
      refetchCurrentUser()
        .then((response) => {
          const updatedUserData = response.data.data.data;
          localStorage.setItem("user", JSON.stringify(updatedUserData));
          shuffleProducts(); // Shuffle products after each API call
        })
        .catch((error) => {
          console.error("Error fetching current user data:", error);
        });
    }, 3000);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [filterItem, products, refetchCurrentUser]);

   // Update filtered products when filterItem or products change
   useEffect(() => {
    setFilteredProducts(filterAndShuffleProducts(products, filterItem));
  }, [filterItem, products]);


  // Retrieve stuckreviews and reviewsUsed from localStorage
  const stuckreviews = localStorage.getItem("stuckreviews");
  const reviewsUsed = localStorage.getItem("reviewsUsed");
  const isReviewDisabled = stuckreviews === reviewsUsed;

  const filterProducts = (products) => {
    if (!filterItem) return products;
    return products.filter(
      (product) => product.category.categoryName === filterItem
    );
  };

  const filterItemHandler = (item) => {
    setFilterItem(item);
  };

  // const filteredProducts = useMemo(() => {
  //   const shuffledProducts = shuffleArray(filterProducts(products));
  //   return shuffledProducts;
  // }, [filterItem, products]);
  

  const statsData = [
    {
      title: "Original Balance",
      value: `$${(title?.balance || 0).toFixed(2)}`, // Show balance with 2 decimal places
      icon: <BuildingStorefrontIcon className="w-8 h-8" />,
      description: "",
    },
    {
      title: "Trial Balance",
      value: `$${(title?.trialbalance || 0).toFixed(2)}`, // Show balance with 2 decimal places
      // value: "$50",
      icon: <CreditCardIcon className="w-8 h-8" />,
      description: "",
    },
    {
      title: "Rewards & Bonus",
      value: `$${(title?.rewards || 0).toFixed(2)}`, // Show balance with 2 decimal places
      // value: `$${title?.rewards || 0}`,
      icon: <CircleStackIcon className="w-8 h-8" />,
      description: "",
    },
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
              <a
                className={`${
                  filterItem === category
                    ? "bg-black text-white"
                    : "bg-base-100"
                }`}
              >
                {category}
              </a>
            </li>
          ))}
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
      <div
        className={`grid lg:grid-cols-${
          isLoading ? "1" : "4"
        } mt-4 grid-cols-1 gap-6`}
      >
        {isLoading ? (
          <div className="flex align-middle justify-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          filteredProducts.map((d, k) => (
            <ProductsCard key={k} {...d} colorIndex={k} />
          ))
        )}
      </div>
    </>
  );
}

export default Dashboard;








// import { useEffect, useState } from "react";
// import DashboardStats from "./components/DashboardStats";
// import BuildingStorefrontIcon from "@heroicons/react/24/outline/BuildingStorefrontIcon";
// import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
// import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
// import ProductsCard from "../../components/Cards/ProductsCard";
// import { useGetCurrentUserQuery, useGetProductsQuery } from "../common/dashboardSlice";

// // Function to shuffle an array
// const shuffleArray = (array) => {
//   const arrayCopy = [...array];
//   for (let i = arrayCopy.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
//   }
//   return arrayCopy;
// };

// function Dashboard() {
//   const { data: allProducts, isLoading } = useGetProductsQuery();
//   const products = allProducts?.data?.products || [];
//   const uniqueCategories = [
//     ...new Set(products.map((product) => product.category.categoryName)),
//   ];

//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [filterItem, setFilterItem] = useState("");
//   const { data: currentUserData, refetch: refetchCurrentUser } = useGetCurrentUserQuery();
//   const title = currentUserData?.data?.data;

//   // Function to filter and shuffle products
//   const filterAndShuffleProducts = (products, filterItem) => {
//     let filtered = products;
//     if (filterItem) {
//       filtered = products.filter(
//         (product) => product.category.categoryName === filterItem
//       );
//     }
//     return shuffleArray(filtered);
//   };

//   // Fetch current user data every 5 seconds and update localStorage
//   useEffect(() => {
//     const shuffleProducts = () => {
//       const shuffled = filterAndShuffleProducts(products, filterItem);
//       setFilteredProducts(shuffled);
//     };

//     shuffleProducts(); // Shuffle initially

//     const intervalId = setInterval(() => {
//       refetchCurrentUser()
//         .then((response) => {
//           const updatedUserData = response.data.data.data;
//           localStorage.setItem("user", JSON.stringify(updatedUserData));
//           console.log("User data updated in localStorage");
//           shuffleProducts(); // Shuffle products after each API call
//         })
//         .catch((error) => {
//           console.error("Error fetching current user data:", error);
//         });
//     }, 5000);

//     return () => clearInterval(intervalId); // Clear interval on component unmount
//   }, [filterItem, products, refetchCurrentUser]);

//   // Update filtered products when filterItem or products change
//   useEffect(() => {
//     setFilteredProducts(filterAndShuffleProducts(products, filterItem));
//   }, [filterItem, products]);

//   const filterItemHandler = (item) => {
//     setFilterItem(item);
//   };

//   const statsData = [
//     {
//       title: "Original Balance",
//       value: `$${title?.balance || 0}`,
//       icon: <BuildingStorefrontIcon className="w-8 h-8" />,
//       description: "",
//     },
//     {
//       title: "Trial Balance",
//       value: "$50",
//       icon: <CreditCardIcon className="w-8 h-8" />,
//       description: "",
//     },
//     {
//       title: "Rewards & Bonus",
//       value: `$${title?.rewards || 0}`,
//       icon: <CircleStackIcon className="w-8 h-8" />,
//       description: "",
//     },
//   ];

//   return (
//     <>
//       <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
//         {statsData.map((d, k) => (
//           <DashboardStats key={k} {...d} colorIndex={k} />
//         ))}
//       </div>
//       <div className="mt-2 gap-1">
//         <ul className="menu menu-sm menu-vertical lg:menu-horizontal bg-base-400 rounded-box space-y-1 lg:space-y-0 lg:space-x-1 gap-1">
//           {uniqueCategories.map((category, index) => (
//             <li key={index} onClick={() => filterItemHandler(category)}>
//               <a
//                 className={`${
//                   filterItem === category
//                     ? "bg-black text-white"
//                     : "bg-base-100"
//                 }`}
//               >
//                 {category}
//               </a>
//             </li>
//           ))}
//           <li onClick={() => filterItemHandler("")}>
//             <a
//               className={`${
//                 filterItem === "" ? "bg-black text-white" : "bg-base-100"
//               }`}
//             >
//               All Products
//             </a>
//           </li>
//         </ul>
//       </div>
//       <div
//         className={`grid lg:grid-cols-${isLoading ? "1" : "4"} mt-4 grid-cols-1 gap-6`}
//       >
//         {isLoading ? (
//           <div className="flex align-middle justify-center">
//             <span className="loading loading-spinner loading-lg text-primary"></span>
//           </div>
//         ) : (
//           filteredProducts.map((d, k) => (
//             <ProductsCard key={k} {...d} colorIndex={k} />
//           ))
//         )}
//       </div>
//     </>
//   );
// }

// export default Dashboard;