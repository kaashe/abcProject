import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import DeleteAccount from '../../features/delete-account'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Withdraw"}))
      }, [dispatch])


    return(
        <DeleteAccount />
    )
}

export default InternalPage