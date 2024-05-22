import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import AboutUs from '../../features/about-us'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "About Us"}))
      }, [dispatch])


    return(
        <AboutUs />
    )
}

export default InternalPage