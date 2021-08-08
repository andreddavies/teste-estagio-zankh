import Head from 'next/head'
import MyApp from './_app.js';


export default function Home() {
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
          <form className="formMolecule">
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