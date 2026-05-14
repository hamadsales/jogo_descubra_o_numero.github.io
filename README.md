# 🍄 Jogo Descubra o Número - Super Mario Edition

Este projeto é um jogo interativo e temático do Super Mario desenvolvido para aplicar conceitos de lógica de programação, manipulação de elementos HTML via JavaScript (DOM) e estilização responsiva com CSS.

## 🚀 Funcionalidades
* **Geração Aleatória:** O sistema gera um número secreto randômico a cada nova partida.
* **Validação de Chutes:** Interface interativa para o usuário tentar adivinhar o número correto.
* **Controle de Estado:** Botão "Novo Jogo" dinâmico que ativa apenas após o término da partida atual.
* **Estilização Temática:** Interface personalizada com elementos visuais, paleta de cores e tipografia baseadas na franquia Super Mario.

## 🧠 Como o Código Funciona (Lógica de Programação)
O projeto foi estruturado seguindo um fluxo lógico de entrada, processamento e saída:
* **Entrada:** O usuário insere um valor numérico no campo de texto e clica no botão "Chutar".
* **Processamento:** O JavaScript captura o valor digitado através do DOM e o compara com o número secreto gerado aleatoriamente no início do jogo.
* **Saída:** O programa retorna se o número secreto é maior, menor ou igual ao chute do jogador, atualizando os textos da tela. Ao acertar, o botão "Novo jogo" é desbloqueado.

## 🎨 Design e Layout
A interface gráfica simula um menu de videogame clássico. Utiliza CSS Flexbox para centralização absoluta na tela, bordas nas cores icônicas do Mario (vermelho) e do Luigi (verde), efeitos dinâmicos de clique (`active` e `hover`) nos botões e uma fonte pixelada no estilo 8-bits.

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Estruturação dos campos de entrada e botões.
* **CSS3:** Estilização estilizada, fontes externas (Press Start 2P) e gerenciamento de espaçamentos com `gap`.
* **JavaScript (ES6):** Manipulação de eventos de clique e lógica matemática do jogo.

## 💻 Como Executar o Projeto
1. Faça o download ou clone este repositório.
2. Certifique-se de que os arquivos `index.html`, `style.css`, `app.js` e a imagem `mario-bg.jpg` estejam na mesma pasta.
3. Abra o arquivo `index.html` em qualquer navegador moderno.

---
Desenvolvido por **Hamad Sales** como parte dos meus estudos de Desenvolvimento Web.