import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3005";  //temel url

function App() {

  const getAllUsers = async () => {   //axios ile servis API ya istekte bulunulur. http isteğini senkrona çev. için: async-await kullanılır.
    const response = await axios.get(BASE_URL + "/users"); //axios.get ile veriye erişilir.
    console.log(response.data);
  }

  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    console.log(response.data);
  }

  const postUser = async (newUser) => {  //axios.post ile db'e ekleme yapılabilir.
    const eklenen = await axios.post(BASE_URL + "/users", newUser);
    console.log(eklenen.data);
  }

  const updateUser = async (userId, newAttr) => {  //axios.put ile veride güncelleme yapılır.
    await axios.put(BASE_URL + "/users/" + userId, newAttr);
  }

  const deleteUser = async (userId) => {    //axios.delete ile veri silinir.
    const deleted = await axios.delete(BASE_URL + "/users/" + userId);
    console.log(deleted.data);
  }


  useEffect(() => { //companent çalışır çalışmaz çalıştırılır.
    // getAllUsers();

    // getUserById(1234);

    // const newUser = {
    //   "isim": "oruç",
    //   "soyisim": "gelen",
    //   "id": "3567"
    // }
    // postUser(newUser);

    // updateUser("7684", {
    //   "isim": "umut",
    //   "soyisim": "soylu"
    // })

    // deleteUser("6lzW2ZYlF2w");

  }, [])

  return (
    <>

    </>
  )
}

export default App
