import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { getLocalStorage } from 'utils'
import Map from '../../components/atoms/Map';

const Home: React.FC = () => {
  const [coords, setCoords] = useState({
    latitude: NaN,
    longitude: NaN
  })
  const history = useHistory()
  useEffect(() => {
    const token = getLocalStorage('token')

    if(!token) {
      history.push('/login')
    } else {
      const getPosition = (position: any) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      }

      navigator.geolocation.getCurrentPosition(getPosition)
    }
  }, [history])

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
