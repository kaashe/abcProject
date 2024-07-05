import { usePostReviewMutation } from "../../../features/common/dashboardSlice";

export const useReview = () => {
    const [postReview, { isLoading, isSuccess, isError, error }] = usePostReviewMutation();

    const postReviewHanlder = async (data) => {
        try {
            const response = await postReview(data);
            return response.data;
        } catch (error) {
            throw error;
        }
    };
    return { postReviewHanlder, isLoading, isSuccess, isError, error };
};
