import { useGetUsersQuery, usePostReviewMutation, useUpdateUserMutation } from "../../../features/common/dashboardSlice";

export const useReview = () => {
    const { refetch: refetchUsers } = useGetUsersQuery();
    const [postReview, { isLoading, isSuccess, isError, error }] = usePostReviewMutation();
    const [
        updateUser,
        {
            isLoading: updateIsLoading,
            isSuccess: updateIsSuccess,
            isError: updateIsError,
            error: updateError,
        },
    ] = useUpdateUserMutation();
    const postReviewHanlder = async (data) => {
        try {
            const response = await postReview(data);
            return response.data;
        } catch (error) {
            throw error;
        }
    };
    const updateSingleUser = async (id, data) => {
        try {
            const response = await updateUser({ id, data });
            return response.data;
        } catch (error) {
            throw error;
        }
    };
    return {
        postReviewHanlder, isLoading, isSuccess, isError, error, updateSingleUser,
        refetchUsers,
        updateIsLoading,
        updateIsSuccess,
        updateIsError,
        updateError,
    };
};
