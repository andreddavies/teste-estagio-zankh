import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import MyApp from '../_app.js';
import Head from 'next/head';
import Link from 'next/link';

const About = () => {
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
					<h3 style={{textAlign: "center", margin: "20px"}}>Esta é uma página de descrição.</h3><br />
					<p style={{maxWidth: "80%", textAlign: "justify"}}>
						Aqui temos a descrição do nosso site, com todas as funcionalidades.<br /><br />
						Podemos navegar na loja (index.js) e selecionar um produto, assim seremos 
						redirecionados para uma página de checkout, onde podemos inserir os dados do cartão.
						Caso o número não seja o esperado, o redirecionamento será para uma página de aviso,
						que contem um botão para tentar novamente na página de checkout.
						Caso contrário, iremos até uma página de sucesso na compra do produto.
					</p>
				</main>
				<Footer />
			</div>
		</div>
	)
}

export default About;