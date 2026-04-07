import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './Login'
import { dizi } from './Login'  //export olduğu için {} kullanılır.

function App() {  //App companent i
  let isim = "fatma";  //js kodları buraya
  let vize1 = 80;
  let vize2 = 80;
  let sonuc = true;
  const dizi1 = [5, 34, 76, 44, 67, 89, 100];
  console.log(dizi);

  return (        //html kodları buraya
    <>            {/*fragment yapısı: boş taglar ile kapsayıcı olur.*/}
      <Login />   {/* başka bir companenti istediğin kadar ekleyebilirsin */}
      <Login />

      <p>isim:{isim} , not ort.:{(vize1 + vize2) / 2} </p>
      {sonuc ? <p>Geçtin tebrikler..</p> : <p>yine kaldın...</p>}
      {
        dizi1.map((sayı, index) => (     /* dizi üzerinde gezinmek için map kullanılır.*/
          <div style={{ backgroundColor: "beige", border: "1px solid black" }} key={index}>
            {sayı}
          </div>
        ))
      }

    </>
  )
}

export default App  //companenti export etmek gerek
