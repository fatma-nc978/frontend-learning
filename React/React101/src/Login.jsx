import React from 'react'  //rfce kısayolu ile companent oluşturulur.

export const dizi = [   //başka companent tarafından erişilebilir oldu.
    {
        isim: "ali",
        soyisim: "inci"
    },
    {
        isim: "zeynep",
        soyisim: "basar"
    }
]

function Login(props) {
    const { children } = props;
    return (
        <>
            <div style={{ width: "100%", height: "200px", backgroundColor: "lightgray", color: "black" }}>
                <div>
                    <div style={{ backgroundColor: "gray", fontWeight: "bold", color: "#fff" }}>Hoşgeldin</div>
                </div>
                <div>
                    <p>isim</p>
                    <input type="text" />
                </div>
                <div>
                    <p>soyisim</p>
                    <input type="text" />
                </div>
                <button>kaydet</button>
            </div>
            <hr />
            <div>
                container 2 için: {children}
            </div>
        </>
    )
}

export default Login  //export default ile function içi export edilir.