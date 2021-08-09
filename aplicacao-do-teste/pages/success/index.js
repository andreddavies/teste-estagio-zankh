import Head from 'next/head';
import Link from 'next/link';
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

const Success = () => {
  return(
		<div>
			<Head>
    		<title>Teste Estágio Zankh</title>
    		<meta name="description" content="Teste para estágio na Zankh Ecom" />
    		<link rel="icon" href="/favicon.ico" />
  		</Head>
      <div>
  			<Header />
    		<main style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
				<p style={{fontSize: "20px", fontWeight: "bold"}}>Compra realizada com sucesso!</p>
        <img style={{}} src="https://cdn.shopify.com/s/files/1/0322/1766/1575/files/casareviva.com_-_compra_realizada_com_sucesso.png?v=1584383485" />
        <Link href="/">
          <a className="tryAgainButton">Voltar a loja</a>
        </Link>
    		</main>
  			<Footer />
      </div>
		</div>
	)
}

export default Success;