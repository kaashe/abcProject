import React, { useCallback, useEffect, useState } from "react";
import TitleCard from "../../components/Cards/TitleCard";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useGetSubmittedReviewsQuery } from "../../features/submitted-reviews/submittedReviewsSlice";
import { useDispatch } from "react-redux";
import { openModal } from "../../features/common/modalSlice";
import SearchBar from "../../components/Input/SearchBar";
import { MODAL_BODY_TYPES } from "../../utils/globalConstantUtil";

const SubmitedReview = () => {
  const userdata = sessionStorage.getItem("user");
  const userssss = JSON.parse(userdata);
  const { data: submittedRev, isLoading, isError, error } = useGetSubmittedReviewsQuery(userssss?._id);
  // console.log(submittedRev?.data?.reviews, "submittedRev");
  const subReview = submittedRev?.data?.reviews;

  const TopSideButtons = ({ removeAppliedFilter, applySearch }) => {
    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch();
 
    useEffect(() => {
      if (searchText === "") {
        removeAppliedFilter();
      } else {
        applySearch(searchText);
      }
    }, [searchText, removeAppliedFilter, applySearch]);
  
    const AddProduct = useCallback(() => {
      dispatch(
        openModal({
          title: "Withdraw",
          bodyType: MODAL_BODY_TYPES.WITHDRAW_DETAILS,
          extraObject: {},
        })
      );
    }, [dispatch]);
  
    return (
      <div className="inline-block float-right">
        <SearchBar
          searchText={searchText}
          styleClass="mr-4"
          setSearchText={setSearchText}
        />
        {/* <button
          className="bg-[#6D4E8A] btn px-6 btn-sm normal-case text-white btn-purple"
          onClick={AddProduct}
        >
          Add
        </button> */}
      </div>
    );
  };

  const [withdraws, setWithdraws] = useState(subReview);

  const removeFilter = useCallback(() => {
    setWithdraws(subReview);
  }, [subReview]);

  const applySearch = useCallback(
    (value) => {
      let filteredData = subReview?.filter((item) =>
        item?.review?.toLowerCase().includes(value.toLowerCase())
      );
      setWithdraws(filteredData);
    },
    [subReview]
  );

  return (
    <TitleCard
      title=""
      topMargin="mt-2"
      TopSideButtons={
        <TopSideButtons
          applySearch={applySearch}
          removeAppliedFilter={removeFilter}
        />
      }
    >
      <div className="overflow-x-auto w-full">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : isError ? (
          <div className="text-center py-4 text-red-500">
            {error?.data?.message || "An error occurred"}
          </div>
        ) : (
          <table className="table w-full">
            <thead>
              <tr>
                <th>Sr#</th>
                <th>Product</th>
                <th>Rating</th>
                <th>Review</th>
                <th>Profile</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {withdraws?.map((review, index) => (
                <tr key={review?._id} className="cursor-pointer hover">
                  <td>{index + 1}</td>
                  <td>{review?.product?.productName || "No Name"}</td>
                  <td>{review?.rating || "N/A"}</td>
                  <td>{typeof review?.review === 'string' ? review.review : "N/A"}</td>
                  <td>
                    {review?.product?.photo ? (
                      <img src={review.product.photo} alt="Product" className="h-10 w-10 object-cover" />
                    ) : (
                      "No Photo"
                    )}
                  </td>
                  <td>{"Submitted"}</td>
                  {/* <td>
                    <button className="btn btn-sm btn-square btn-ghost">
                      <TrashIcon className="w-5 text-error" />
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </TitleCard>
  );
};

export default SubmitedReview;
