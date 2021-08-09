import Head from 'next/head';

const Footer = () => {
	return(
		<div>
			<Head>
        		<title>Teste Estágio Zankh</title>
        		<meta name="description" content="Teste para estágio na Zankh Ecom" />
        		<link rel="icon" href="/favicon.ico" />
      		</Head>
			<footer className="footerContainer">
				<p >2021 - Todos os direitos reservados</p>
			</footer>
		</div>
	)
}

export default Footer;