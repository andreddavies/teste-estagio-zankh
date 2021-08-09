import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import MyApp from '../_app.js';


export default function Checkout () {
	const router = useRouter();
  	const [products, setProducts] = useState([]);

  	const cardNumberInput = React.useRef();
	const dueDateInput = React.useRef();
	const verificationCodeInput = React.useRef();
	const cardHolderNameInput = React.useRef();
	const buyButton = React.useRef();



	function justNumbersMask(i){   
		var v = i.currentTarget.value;

		if(isNaN(v[v.length-1])){
			i.currentTarget.value = v.substring(0, v.length-1);
			return true;
		}
	}

	const cardNumberValidation = (i) => {
		const cardNumberExpression = /\d{4}\s\d{4}\s\d{4}\s\d{4}/;
		const v = i.currentTarget.value;
		const justNumbers = justNumbersMask(i);
		const cardNumberErr = document.querySelector('#cardNumberErr');

		if(justNumbers){
			cardNumberInput.current.className = "errorInput";
			cardNumberErr.style.display = "flex"
		}else{
			!cardNumberExpression.test(cardNumberInput.current.value)
			? (cardNumberInput.current.className = "inputAtom", cardNumberErr.style.display = "none")
			: cardNumberInput.current.className = "acceptedInput"
		}

		if (v.length == 4 || v.length == 9 || v.length == 14) i.currentTarget.value += " ";
			validationAll();
		}

	const dueDateValidation = (i) => {
		const dueDateExpression = /\d{2}\/\d{2}/;
		const v = i.currentTarget.value;
		const justNumbers = justNumbersMask(i);  
		const dueDateErr = document.querySelector('#dueDateErr');

		if(justNumbers){
			dueDateInput.current.className = "errorInput";
			dueDateErr.style.display = "flex"
		}else{
			!dueDateExpression.test(dueDateInput.current.value)
			? (dueDateInput.current.className = "inputAtom", dueDateErr.style.display = "none")
			: dueDateInput.current.className = "acceptedInput"
		}
		if (v.length == 2) i.currentTarget.value += "/";
		validationAll();
	}

	const verificationCodeValidation = (i) => {
		const verificationCodeExpression = /\d{3}$/;
		const v = i.currentTarget.value;
		const justNumbers = justNumbersMask(i);
		const verificationCodeErr = document.querySelector('#verificationCodeErr');

		if(justNumbers){
			verificationCodeInput.current.className = "errorInput";
			verificationCodeErr.style.display = "flex"
		}else{
		 	!verificationCodeExpression.test(verificationCodeInput.current.value)
			? (verificationCodeInput.current.className = "inputAtom", verificationCodeErr.style.display = 'none')
			: verificationCodeInput.current.className = "acceptedInput"
		}
		validationAll();
	}

	const cardHolderNameValidation = (i) => {
		const cardHolderNameExpression = /^[a-zA-Z\u00C0-\u017F´]+(\s+[a-zA-Z\u00C0-\u017F´]{0,})+$/;
		const v = i.currentTarget.value;
		const cardHolderNameErr = document.querySelector('#cardHolderNameErr');
	  
		if(!cardHolderNameExpression.test(cardHolderNameInput.current.value)){
			cardHolderNameInput.current.className = "errorInput";
			cardHolderNameErr.style.display = "flex"
		}else{
			cardHolderNameErr.style.display = "none"
			cardHolderNameInput.current.className = "acceptedInput"
		}
		validationAll();
	}

	const validationAll = () => {
		if(cardNumberInput.current.className == "acceptedInput" && dueDateInput.current.className == "acceptedInput" && verificationCodeInput.current.className == "acceptedInput" && cardHolderNameInput.current.className == "acceptedInput"){
		    buyButton.current.className = "greenButtonAtom";
		    buyButton.current.disabled = false;
		}    
	}

	return (
	    <div>
			<Head>
				<title>Teste Estágio Zankh</title>
				<meta name="description" content="Teste para estágio na Zankh Ecom" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
	        	<Header />
	        	<div style={{margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column"}}>
	        		<h3>Dados do cartão</h3>
					<form onSubmit={function validator(e){
						e.preventDefault();

						if(cardNumberInput.current.value == "5477 1831 6736 7405"){
							router.push('/success');
						}else{
							router.push(`/tryAgain/${router.query.id}`);
						}
					}} className="formMolecule">
			            <input 
							ref={cardNumberInput}
							onKeyUp={(i)=>cardNumberValidation(i)}
							type="text"
							className="inputAtom"
							placeholder="Número do cartão"
							maxLength="19"
							///required 
			            /><span id="cardNumberErr" className="errSpan">O número do cartão deve conter 16 dígitos</span>
			            <input
			            	id="dueDate" 
							ref={dueDateInput}
							onKeyUp={(i)=>dueDateValidation(i)}
							type="text"
							className="inputAtom"
							placeholder="Data de vencimento"
							maxLength="5"
							//required 
			            /><span id="dueDateErr" className="errSpan">Data de vencimento deve ser maior que a atual</span>
			            <input 
							ref={verificationCodeInput}
							onKeyUp={(i)=>verificationCodeValidation(i)}
							type="text"
							className="inputAtom"
							placeholder="CVV"
							maxLength="3"
							//required 
			            /><span id="verificationCodeErr" className="errSpan">Número de verificação deve ser os 3 dígitos atrás do cartão</span>
			            <input 
							ref={cardHolderNameInput}
							onKeyUp={(i)=>cardHolderNameValidation(i)}
							type="text"
							className="inputAtom"
							placeholder="Nome completo do portador do cartão"
							//required 
			            /><span id="cardHolderNameErr" className="errSpan">Nome do portador deve conter o nome completo</span>
	            		<button ref={buyButton} type="submit" className="disabledBuyButton" disabled>Finalizar Compra</button>
	          		</form>
	        	</div>        
	        	<Footer />
      		</main>
    	</div>
	)
}