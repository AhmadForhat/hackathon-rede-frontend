/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
}

const config = firebaseConfig

const useFirebase = () => {
  const getInit = () => {
    if (!firebase.apps.length) {
      return firebase.initializeApp(config)
    } else {
      return firebase.app()
    }
  }
  const init = getInit()

  const db = init.firestore()
  const auth = init.auth()
  const fs = firebase.firestore
  const fbauth = firebase.auth
  const storage = firebase.storage().ref()
  const configFirebase = config


  return {
    db,
    auth,
    fs,
    fbauth,
    storage,
    configFirebase,
  }
}

export default useFirebase
