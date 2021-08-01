# Estágio Zankh - Developer Test

Este documento contém as instruções para a realização do teste para estágio na Zankh Ecom.

## Sobre o teste

O teste consiste na validação de um formulário de checkout, onde o usuário poderá preencher os dados do cartão de crédito em um formulário e o mesmo deve realizar uma validação. A linguagem/framework é de livre escolha.


A página deve conter os seguintes campos:
- Número do cartão de crédito;
- Data de vencimento do cartão;
- Código de verificação (CVV);
- Nome completo do portador do cartão;


## Sobre a validação dos campos
A página deve conter um botão "Finalizar compra" e, enquanto os todos os campos não forem válidos, este botão deve ficar desabilitado, impossibilitando o usuário de avançar com a compra.

Caso o número do cartão não seja exatamente **5477 1831 6736 7405**, mas todos os outros campos obedeçam à validação, uma página de erro deve ser apresentada, com um link para "Tentar novamente".

Caso o número esteja correto, e todos os outros campos também obedeçam a validação, uma página de sucesso deve ser apresentada.

### Número do cartão de crédito
- O campo não de pode ser vazio;
- O campo deve ter um limite de 16 caracteres;
- O campo deve conter uma máscara separando por espaços a cada 4 dígitos;
- Não deve ser possível digitar letras ou caracteres especiais;

### Data de vencimento do cartão
- O campo não pode ser vazio;
- O campo deve conter uma máscara no formato (MM/AA);
- Não deve ser possível digitar letras ou caracteres especiais;
- A data informada não pode ser menor do que a data atual;

### Código de verificação
- O campo não pode ser vazio;
- O campo deve ter um limite de 3 caracteres;
- Não deve ser possível digitar letras ou caracteres especiais;

### Nome completo do portador do cartão
- O campo não pode ser vazio;

## Sobre a avaliação
Abaixo está a lista do que será considerado por nós como características essenciais, além é claro do cumprimento do objetivo do teste.Ç
- Boas práticas;
- Código limpo e legível;
- Força de vontade;

**Notas:** O design/layout das páginas **não será** considerado na avaliação;

## Sobre os próximos passos
O teste deve ser realizado em um prazo de até 2 dias e após a finalização, o link do repositório deve ser enviado para os e-mails [felipe.mathais@zankh.com.br](felipe.mathais@zankh.com.br) e [victor.zampieri@zankh.com.br](victor.zampieri@zankh.com.br).

Após a confirmação do recebimento, será marcada a apresentação do teste para a nossa equipe.

Good lucky and have a nice coding ;)
