import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import MyApp from '../_app.js';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';


const TryAgain = () => {
	const router = useRouter();
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
					<Link href={`/checkout/${router.query.id}`}><a className="tryAgainButton">Tente Novamente</a></Link>
					<div style={{maxWidth: "80%", textAlign: "justify"}}>
						<b><p>Infelizmente o número do cartão digitado não foi igual ao esperado.</p></b><br />
						<p>
							Pedimos que tente novamente digitando o número correto. Você pode acessar
							a página com o botão "Tente Novamente" acima. Obrigado! ;)
						</p>
					</div>
				</main>
				<Footer />
			</div>
		</div>
	)
}

export default TryAgain;