import Head from 'next/head';
import Link from 'next/link';
import MyApp from '../../pages/_app.js';



const Header = () => {
	return(
		<div>
			<Head>
        		<title>Teste Estágio Zankh</title>
        		<meta name="description" content="Teste para estágio na Zankh Ecom" />
        		<link rel="icon" href="/favicon.ico" />
      		</Head>
			<header className="headerComponent">
				<div className="logo">
					<Link href="/" className="headerNavLink"><a>Corner Store</a></Link>
				</div>
				<div className="headerNav">
					<ul className="navLinkList">
						<li className="headerNavLink"><Link href="/">Loja</Link></li>
						<li className="headerNavLink"><Link href="/about">Sobre</Link></li>
					</ul>
				</div>
			</header>
		</div>
	)
}

export default Header;