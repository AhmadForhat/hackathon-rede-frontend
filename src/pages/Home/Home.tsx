import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Header from 'components/molecules/Header';
import Map from 'components/atoms/Map';
import Button from 'components/atoms/Button';
import { getLocalStorage } from 'utils'

import {
  Container,
  ContainerMap,
  ContainerButton,
  Card
} from './styles'

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

  const handleReport = () => {
    history.push('/reports')
  }

  return (
    <Container>
      <Header
        title='São Paulo'
        subTitle='Localização'
      >
      </Header>
      <Card>
        <ContainerMap>
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
        </ContainerMap>
      </Card>
      <ContainerButton>
        <Button onClick={handleReport}>Reportar</Button>
      </ContainerButton>
    </Container>
  )
}

export default Home
