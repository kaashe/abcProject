import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import ContactUs from '../../features/contact-us'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Contact Us"}))
      }, [dispatch])


    return(
        <ContactUs />
    )
}

export default InternalPage