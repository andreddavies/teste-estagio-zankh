import Head from 'next/head';
import Link from 'next/link';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    handleProductsList();
  }, [])
  async function handleProductsList () {
    const API_URL = 'https://my-json-server.typicode.com/andreddavies/json-placeholder-fake-api';
    const productsList = await fetch(`${API_URL}/games`);
    const data = await productsList.json();
    setProducts(data);
  }

//console.log(products[0].id);
  return (
    <div>
      <Head>
        <title>Teste Estágio Zankh</title>
        <meta name="description" content="Teste para estágio na Zankh Ecom" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <main style={{maxWidth: "90%", margin: "0 auto", textAlign: "center"}}>
          <h1>Loja:</h1>
          <ul style={{width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "space-between", margin: "20px auto", listStyleType: "none"}}> 
            {
              products.map((product) => {
                return(
                  <li key={product.id} style={{margin: "20px auto", width: "30%", border: "1px solid #ccc"}}>
                    <h3>{product.name}</h3>
                    <h5>Preço: R$ {product.price}</h5>  
                    <div style={{display: "flex", alignItems: "flex-end"}}>
                    <Link href={`/checkout/${product.id}`}>
                      <button style={{width: "80%"}} className="greenButtonAtom">Comprar</button>
                    </Link>
                    </div>
                  </li>  
                )
              })
            }
          </ul>
        </main>
        <Footer />
      </div>
    </div>
  )
}
