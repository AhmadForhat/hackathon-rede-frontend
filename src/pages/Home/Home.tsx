import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import Header from 'components/molecules/Header';
import FooterButton from 'components/molecules/FooterButton';
import Map from 'components/atoms/Map';
import Wrapper from 'components/atoms/Wrapper';
import Card from 'components/atoms/Card'
import { getLocalStorage } from 'utils'

import { ContainerMap } from './styles'

const Home: React.FC = () => {
  const [coords, setCoords] = useState({
    latitude: 0,
    longitude: 0
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

  const handleToReport = () => {
    history.push('/reportes')
  }

  return (
    <Wrapper>
      <Header
        title='Localização'
      >
      </Header>
      <Card>
        <ContainerMap>
          <Map
            initialWithMyPosition
            blockZoom
            markers={[
              {
                id: '1',
                latitude: coords.latitude,
                longitude: coords.longitude
              },
            ]} />
        </ContainerMap>
      </Card>
      <FooterButton onClick={handleToReport}>
        Reportes
      </FooterButton>
    </Wrapper>
  )
}

export default Home
