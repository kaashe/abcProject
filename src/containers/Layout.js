import PageContent from "./PageContent";
import LeftSidebar from "./LeftSidebar";
import ModalLayout from "./ModalLayout";
import { useDispatch, useSelector } from "react-redux";
import { removeNotificationMessage } from "../features/common/headerSlice";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";

function Layout() {
  const dispatch = useDispatch()
  const {newNotificationMessage, newNotificationStatus} = useSelector(state => state.header)

  useEffect(() => {
      if(newNotificationMessage !== ""){
          if(newNotificationStatus === 1) toast.success(newNotificationMessage)
          if(newNotificationStatus === 0) toast.error(newNotificationMessage)
          dispatch(removeNotificationMessage())
      }
  }, [newNotificationMessage,dispatch,newNotificationStatus])

  return (
    <>
      { /* Left drawer - containing page content and side bar (always open) */}
      <div className="drawer lg:drawer-open">
        <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
        <PageContent />
        <LeftSidebar />
      </div>

      {/** Notification layout container */}
      <Toaster position="top-right" />

      {/* Modal layout container */}
      <ModalLayout />

    </>
  )
}

export default Layout;