import React, { useEffect } from 'react'
import { useState } from 'react';

function Container(props) {
    const { ad, soyad, yaş } = props;  //object distract ile obje özellikleri direkt değişkenlere aktarılabilir.

    const [names, setNames] = useState(["fatma ", "zelal ", "ayşe "]);  // react'ta useState hooku ile tanımlama yapılır
    //names=ilk değerler , setNames=değiştirildikten sonraki değerler

    const [count, setCount] = useState(0);
    const arttir = () => {
        setCount(count + 1);  //component her seferinde render edilir.performans kaybı
    }
    const azalt = () => {
        setCount(count - 1);
    }

    // useEffect(() => {
    //     console.log("bir etk olduğunda çalışır.");
    // }, []) //köşeli parantez= comp.ilk render edildiğinde çalışmasını sağlar.

    // useEffect(() => {
    //     console.log("burası ilk render edildiğinde ve names stateinde değişiklik olduğunda çalışır.");
    // }, [names])

    return (
        <>
            <div>props ile gelen bilgiler: isim= {ad} , soyisim= {soyad} , yaş={yaş}
                {/* props obje veri tipindedir ve . ile gönderilen veriye erişilir. */}
            </div>

            <div>
                <p>{names}</p>
                <button onClick={() => { setNames(["hakan ", "ali ", "ömer "]) }}>isim değiştir</button>
                <br />
                <br />
            </div>

            <div>
                <p>{count}</p>
                <button onClick={arttir}>arttır</button>
                <br />
                <button onClick={azalt}>azalt</button>
                <br />
                <hr />
            </div>

        </>
    )
}

export default Container