/* eslint-disable import/no-anonymous-default-export */
import { Get } from 'utils/request'

const TOKEN = process.env.REACT_APP_TOKEN_MAP;

function GetCoordinatesEndpoint (address: string, token = TOKEN) {
  return `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${token}`
}

function GetAddressEndpoint (lat: string, lng: string, token = TOKEN) {
  return `https://api.mapbox.com/geocoding/v5/mapbox.places/${lat} ${lng}.json?access_token=${token}`
}

export function GetCoordinatesFromAddress (address: string) {
  const endpoint = GetCoordinatesEndpoint(address)
  return Get(endpoint)
    .then(response => {
      console.log(response)
      if (!response.features && response.features.length > 0 || !response.features[0]?.geometry?.coordinates) throw new Error('Endereço inválido')
      return response.features[0]?.geometry?.coordinates
    })
}

export function GetAddresssFromCoordinates (lat: string, lng: string) {
  const endpoint = GetAddressEndpoint(lat, lng)
  return Get(endpoint)
    .then(response => {
      console.log({response: response.features[0]?.plane_name})
      if (!response.features && response.features.length > 0) throw new Error('Endereço inválido')
      return response.features[0]?.plane_name
    })
}
