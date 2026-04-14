import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './Login'
import { dizi } from './Login'  //export olduğu için {} kullanılır.
import Container from './Container'

function App() {  //App companent i
  let isim = "fatma";  //js kodları buraya
  let vize1 = 80;
  let vize2 = 80;
  let sonuc = true;
  const dizi1 = [5, 34, 76, 44, 67, 89, 100];
  console.log(dizi);

  const [numb1, setNumb1] = useState(0);
  const [numb2, setNumb2] = useState(0);
  const ortBul = () => {
    debugger;
    const sonuç = toplam() / 2;
    yazdır(sonuç);
  }
  const toplam = () => {
    debugger;
    return numb1 + numb2;
  }
  const yazdır = (sonuc) => {
    debugger;
    console.log("ortalama:" + sonuc);
  }

  return (        //html kodları buraya
    <>            {/*fragment yapısı: boş taglar ile kapsayıcı olur.*/}
      <Login />   {/* başka bir companenti istediğin kadar ekleyebilirsin */}
      <Login />
      <Container ad="ayşe" soyad="demir" yaş={22} />  {/*props kullanarak veri gönderme */}

      <Login>       {/*component içinde component gönderme */}
        <Container ad="halil" soyad="kurtul" yaş={25} />
      </Login>

      <hr />

      <p>isim:{isim} , not ort.:{(vize1 + vize2) / 2} </p>
      {sonuc ? <p>Geçtin tebrikler..</p> : <p>yine kaldın...</p>}

      {
        dizi1.map((sayı, index) => (     /* dizi üzerinde gezinmek için map kullanılır.*/
          <div style={{ backgroundColor: "beige", border: "1px solid black" }} key={index}>
            {sayı}
          </div>
        ))
      }
      <br />
      <hr />
      <div>
        <div>
          <input type="number" value={numb1} onChange={(e) => setNumb1(Number(e.target.value))} />
        </div>
        <div>
          <input type="number" value={numb2} onChange={(e) => setNumb2(Number(e.target.value))} />
        </div>
        <div>
          <button onClick={ortBul}>Ort. hesapla</button>
        </div>
      </div><br /><br />

    </>
  )

}
export default App  //companenti export etmek gerek
