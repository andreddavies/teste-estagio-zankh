import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import MyApp from './_app.js';


export default function Home() {
  const router = useRouter();
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

    if(justNumbers){
      cardNumberInput.current.className = "errorInput";
    }else{
      !cardNumberExpression.test(cardNumberInput.current.value)
      ? cardNumberInput.current.className = "inputAtom"
      : cardNumberInput.current.className = "acceptedInput"
    }
    
    if (v.length == 4 || v.length == 9 || v.length == 14) i.currentTarget.value += " ";
    validationAll();
  }

  const dueDateValidation = (i) => {
    const dueDateExpression = /\d{2}\/\d{2}/;
    const v = i.currentTarget.value;
    const justNumbers = justNumbersMask(i);  

    if(justNumbers){
      dueDateInput.current.className = "errorInput";
    }else{
      !dueDateExpression.test(dueDateInput.current.value)
      ? dueDateInput.current.className = "inputAtom"
      : dueDateInput.current.className = "acceptedInput"
    }
    if (v.length == 2) i.currentTarget.value += "/";
    validationAll();
  }

  const verificationCodeValidation = (i) => {
    const verificationCodeExpression = /\d{3}$/;
    const v = i.currentTarget.value;
    const justNumbers = justNumbersMask(i);  

    if(justNumbers){
      verificationCodeInput.current.className = "errorInput";
    }else{
      !verificationCodeExpression.test(verificationCodeInput.current.value)
      ? verificationCodeInput.current.className = "inputAtom"
      : verificationCodeInput.current.className = "acceptedInput"
    }
    validationAll();
  }

  const cardHolderNameValidation = (i) => {
    const cardHolderNameExpression = /^[a-zA-Z\u00C0-\u017F´]+(\s+[a-zA-Z\u00C0-\u017F´]{0,})+$/;
    const v = i.currentTarget.value;
      
      if(!cardHolderNameExpression.test(cardHolderNameInput.current.value)){
        cardHolderNameInput.current.className = "errorInput";
        console.log("Digitar nome corretamente");
      }else{
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
        <div style={{margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column"}}>
        <h1>Cadastro</h1>
          <form onSubmit={function validator(e){
            e.preventDefault();

            if(cardNumberInput.current.value == "5477 1831 6736 7405"){
              router.push('/success');
            }else{
              router.push('/tryAgain');
            }
          }} className="formMolecule">
            <input 
              ref={cardNumberInput}
              onKeyDown={(i)=>cardNumberValidation(i)}
              type="text"
              className="inputAtom"
              placeholder="Número do cartão"
              maxLength="19"
              ///required 
            />
            <input 
              ref={dueDateInput}
              onKeyDown={(i)=>dueDateValidation(i)}
              type="text"
              className="inputAtom"
              placeholder="Data de vencimento"
              maxLength="5"
              //required 
            />
            <input 
              ref={verificationCodeInput}
              onKeyDown={(i)=>verificationCodeValidation(i)}
              type="text"
              className="inputAtom"
              placeholder="CVV"
              maxLength="3"
              //required 
            />
            <input 
              ref={cardHolderNameInput}
              onKeyDown={(i)=>cardHolderNameValidation(i)}
              type="text"
              className="inputAtom"
              placeholder="Nome completo do portador do cartão"
              //required 
            />
            <button ref={buyButton} type="submit" className="disabledBuyButton" disabled>Finalizar Compra</button>

          </form>
        </div>        
      </main>

      <footer>
        
      </footer>
    </div>
  )
}