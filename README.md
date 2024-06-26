# Social Float <br>

[<img src="https://github.com/GreatApps-LAB/Social_Float/assets/99222756/23ebf959-92e5-4898-96d8-4209fa265e7a" width="100%">](https://youtu.be/usZNgtIr2Sk "Now in Android: 55")        

> [!NOTE]
> Os códigos abaixo representam botões flutuantes personalizados para plataformas de mensagens distintas — `WhatsApp, Telegram e Instagram`, criados para serem incorporados na plataforma do `GreatPages`.
> Cada botão é projetado para facilitar o contato direto através da sua `Landing Page`, usando um link que direciona o usuário ao chat privado.
> Os ícones são incorporados como `gráficos vetoriais escaláveis (SVG)` para manter a clareza em diferentes resoluções de tela. Já os botões são animados com um efeito de pulsação e alteram a cor de fundo quando o mouse é passado sobre eles, melhorando a interatividade e atração visual.

> [!CAUTION]
> Adicione somente um modelo por página.

### Whatsapp Float Contact
https://github.com/GreatApps-LAB/Social_Float/assets/99222756/49ddb2c7-9b70-4194-b41f-b652caa70adc

  ```css
  /* Whatsapp Float for GreatPages v. 3.0.2 - Ⓒ Copyright Claiton Lemes. */

  <a href="https://api.whatsapp.com/send?phone=55XX000000000" target="_blank" class="float" aria-label="Botão para contato no WhatsApp" role="button">
  <svg class="icon" aria-hidden="true" viewBox="0 0 22 23" >

  <path d="M7.689 8.209c-.115 3.279 2.141 6.338 6.252 6.164M8.807 7.535V8.73a.56.56 0 01-1.118 0V7.535a.56.56 0 011.118 0zm5.752 6.838h-1.196a.56.56 0 010-1.118h1.196a.56.56 0 010 1.118zM11.12 1c5.49 0 9.947 4.457 9.947 9.946 0 5.49-4.457 9.947-9.947 9.947-1.35 0-2.638-.27-3.812-.758C4.5 21 4.5 21 1.5 22c.5-2.5.5-2.5 1.383-5.482a9.896 9.896 0 01-1.708-5.572C1.175 5.456 5.632 1 11.121 1z"/></svg></a>

  <style>

  :root {
  --icon: #ffffff;
  --background: #00c800;
  --background-hover: #009600;
  --pulse: #00c800;
  }
  .icon {
  width: 30px;
  height: 30px;
  fill: none;
  stroke: var(--icon);
  stroke-width: 2;
  stroke-miterlimit: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  }

  .float {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  cursor: pointer;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: var(--background);
  border-radius: 50px;
  z-index: 1000000;
  transition: background-color 1s;
  animation: pulse 3s infinite;
  }

  .float:hover {
  background-color: var(--background-hover);
  }

  @keyframes pulse {
  0% {
  box-shadow: 0 0 0 0 var(--pulse);
  }
  50% {
  box-shadow: 0 0 0 20px #ffffff00;
  }
  100% {
  box-shadow: 0 0 0 0 #ffffff00;
  }
  }

  </style>
  ```

### Telegram Float Contact
https://github.com/GreatApps-LAB/Social_Float/assets/99222756/035c0802-8175-4295-8192-5364e9398f27

```css

/* Telegram Float for GreatPages v. 3.0.2 - Ⓒ Copyright Claiton Lemes. */

<a href="Telegram_Link" target="_blank" class="float" aria-label="Botão para contato no Telegram" role="button">
<svg class="icon" aria-hidden="true" viewBox="0 0 50 40" >
<path d="M0,17.46A3.22,3.22,0,0,1,1.87,16q4.62-1.8,9.26-3.56L42.84.25A3.55,3.55,0,0,1,43.61,0,2,2,0,0,1,46,2.18a17.08,17.08,0,0,1-.45,2.91Q42.3,20.44,39,35.77a6.38,6.38,0,0,1-.53,1.52,1.79,1.79,0,0,1-2.27,1,4.87,4.87,0,0,1-1.36-.65c-3.3-2.39-6.58-4.8-9.87-7.21l-.42-.31c-.13.12-.26.22-.37.33l-5,4.81a2.46,2.46,0,0,1-1.83.75c0-.65.08-1.29.13-1.92.2-2.81.39-5.62.61-8.43a1,1,0,0,1,.3-.59Q27.9,16.42,37.47,7.84s.1-.07.13-.12L38,7.05a2.48,2.48,0,0,0-.82-.14,2.47,2.47,0,0,0-.89.41q-11.9,7.42-23.8,14.87a.85.85,0,0,1-.64.11Q6.73,20.76,1.68,19.17A2.72,2.72,0,0,1,0,18Z"/></svg></a>

<style>
:root {
--icon: #ffffff;
--background: #0088cc;
--background-hover: #006395;
--pulse: #0088cc;
}

.icon {
width: 30px;
height: 30px;
fill: var(--icon);


}

.float {
display: flex;
align-items: center;
justify-content: center;
position: fixed;
cursor: pointer;
width: 60px;
height: 60px;
bottom: 40px;
right: 40px;
background-color: var(--background);
border-radius: 50px;
z-index: 1000000;
transition: background-color 1s;
animation: pulse 3s infinite;
}

.float:hover {
background-color: var(--background-hover);
}

@keyframes pulse {
0% {
box-shadow: 0 0 0 0 var(--pulse);
}
50% {
box-shadow: 0 0 0 20px #ffffff00;
}
100% {
box-shadow: 0 0 0 0 #ffffff00;
}
}
</style>

```
### Instagram Float Contact

https://github.com/GreatApps-LAB/Social_Float/assets/99222756/feefc8f8-2acd-42d4-9693-f301b24e80d8

```CSS

/*Instagram Float for GreatPages v. 3.0.2 - Ⓒ Copyright Claiton Lemes.*/

<a href="Instagram_Link" target="_blank" class="float" aria-label="Botão para contato no Instagram" role="button">
<svg class="icon" aria-hidden="true" viewBox="0 0 18 18">
<path
d="M5 2C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V13C2 13.7956 2.31607 14.5587 2.87868 15.1213C3.44129 15.6839 4.20435 16 5 16H13C13.7956 16 14.5587 15.6839 15.1213 15.1213C15.6839 14.5587 16 13.7956 16 13V5C16 4.20435 15.6839 3.44129 15.1213 2.87868C14.5587 2.31607 13.7956 2 13 2H5ZM1.46447 1.46447C2.40215 0.526784 3.67392 0 5 0H13C14.3261 0 15.5979 0.526784 16.5355 1.46447C17.4732 2.40215 18 3.67392 18 5V13C18 14.3261 17.4732 15.5979 16.5355 16.5355C15.5979 17.4732 14.3261 18 13 18H5C3.67392 18 2.40215 17.4732 1.46447 16.5355C0.526784 15.5979 0 14.3261 0 13V5C0 3.67392 0.526784 2.40215 1.46447 1.46447ZM13.5 3.5C14.0523 3.5 14.5 3.94772 14.5 4.5V4.51C14.5 5.06228 14.0523 5.51 13.5 5.51C12.9477 5.51 12.5 5.06228 12.5 4.51V4.5C12.5 3.94772 12.9477 3.5 13.5 3.5ZM6.17157 6.17157C6.92172 5.42143 7.93913 5 9 5C10.0609 5 11.0783 5.42143 11.8284 6.17157C12.5786 6.92172 13 7.93913 13 9C13 10.0609 12.5786 11.0783 11.8284 11.8284C11.0783 12.5786 10.0609 13 9 13C7.93913 13 6.92172 12.5786 6.17157 11.8284C5.42143 11.0783 5 10.0609 5 9C5 7.93913 5.42143 6.92172 6.17157 6.17157ZM9 7C8.46957 7 7.96086 7.21071 7.58579 7.58579C7.21071 7.96086 7 8.46957 7 9C7 9.53043 7.21071 10.0391 7.58579 10.4142C7.96086 10.7893 8.46957 11 9 11C9.53043 11 10.0391 10.7893 10.4142 10.4142C10.7893 10.0391 11 9.53043 11 9C11 8.46957 10.7893 7.96086 10.4142 7.58579C10.0391 7.21071 9.53043 7 9 7Z"
/>
</svg>
</a>

<style>
:root {
--icon: #ffffff;
--gradient-normal: #e9a61d, #ef3738, #9d24ce;
--gradient-hover: #cb8f17, #bc2323, #721597;
--pulse: #ef3738;
}

.icon {
width: 30px;
height: 30px;
fill: var(--icon);
}

.float {
display: flex;
align-items: center;
justify-content: center;
position: fixed;
cursor: pointer;
width: 60px;
height: 60px;
bottom: 30px;
right: 30px;
transition: background 2s;
background: linear-gradient(45deg, var(--gradient-normal));
border-radius: 50px;
z-index: 1000000;
animation: pulse 3s infinite;
}

.float:hover {
background: linear-gradient(45deg, var(--gradient-hover));
}

@keyframes pulse {
0% {
box-shadow: 0 0 0 0 var(--pulse);
}
50% {
box-shadow: 0 0 0 20px #ffffff00;
}
100% {
box-shadow: 0 0 0 0 #ffffff00;
}
}
</style>
```
