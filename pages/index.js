import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { startClock } from '../actions'
import Examples from '../components/examples'

import LoginDew from './login';


const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(startClock())
  }, [dispatch])

  return (
    // <>
    //   <Examples />
    //   <Link href="/show-redux-state">
    //     <a>Click to see current Redux State</a>
    //   </Link>
    // </>
    <div className="loginku">
      <LoginDew/>
    </div>
  )
}

export default Index
