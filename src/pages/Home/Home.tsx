import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Map from '../../components/atoms/Map';


import { RootState } from "./../../store/ducks/rootReducer";
import * as UserActions from "./../../store/ducks/User/actions";


const Home: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.User);


  useEffect(() => {
    dispatch(UserActions.loadRequest({
      id: 1,
      name: 'Chrigor 2'
    }))
  }, [])

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Map
        initialWithMyPosition
        blockZoom
        markers={[
          {
            id: '2',
            latitude: -23.3403654,
            longitude: -46.833826599999995
          },
          {
            id: '3',
            latitude: -23.3403654,
            longitude: -46.833826599999995
          },

        ]} />
    </div>
  )
}

export default Home
