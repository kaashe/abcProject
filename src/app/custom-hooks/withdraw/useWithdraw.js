import { useWithdrawRequestMutation } from "../../../features/withdraw/withdrawSlice";

export const useWithdraw = () => {
  const [withdrawRequest, { isLoading, isSuccess, isError, error }] =
    useWithdrawRequestMutation();

  const postWithdraw = async (data) => {
    try {
      const response = await withdrawRequest(data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    postWithdraw,
    isLoading,
    isSuccess,
    isError,
    error,
  };
};
