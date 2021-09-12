import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "./../../store/ducks/rootReducer";
import * as UserActions from "./../../store/ducks/User/actions";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.User);

  console.log(data)

  useEffect(() => {
    dispatch(UserActions.loadRequest({
      id: 1,
      name: 'Chrigor 2'
    }))
  }, [])

  return (
    <div>
      <span>Halo</span>
    </div>
  )
}

export default Home
