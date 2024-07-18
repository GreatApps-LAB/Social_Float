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
/* Whatsapp Float for GreatPages v. 3.1.0 - Ⓒ Copyright Claiton Lemes. */

<a
href="https://api.whatsapp.com/send?phone=55XX000000000"
target="_blank"
class="whatsapp-float"
aria-label="Botão para contato no WhatsApp"
role="button"
>
<svg class="icon" aria-hidden="true" viewBox="0 0 173 173">
  <path
    stroke-width="14"
    d="M60 68.6c0 2.5 2 4.4 4.4 4.4 2.4 0 4.4-1.9 4.4-4.4v-8.8c0-2.5-2-4.4-4.4-4.4-2.5 0-4.4 2-4.4 4.4v8.8Zm0 0a44.2 44.2 0 0 0 44.1 44.2m0 0h8.8c2.5 0 4.4-2 4.4-4.4 0-2.5-1.9-4.5-4.4-4.5h-8.8c-2.5 0-4.4 2-4.4 4.5 0 2.4 2 4.4 4.4 4.4ZM7 165.8l14.6-33.6a79.5 79.5 0 1 1 30 25.7L7 165.7Z"
  />
</svg>
</a>

<style>
:root {
--icon: #ffffff;
--icon-hover: #ffffff;
--background: #00c800;
--background-hover: #009600;
--pulse: #00c800;
--pulse-duration: 3s;
--transition-duration: 0.2s;
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
transition: stroke var(--transition-duration);
}

.whatsapp-float {
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
transition: background-color var(--transition-duration);
animation: pulse var(--pulse-duration) infinite;
}

.whatsapp-float:hover {
background-color: var(--background-hover);
}

.whatsapp-float:hover .icon {
stroke: var(--icon-hover);
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

/* Telegram Float for GreatPages v. 3.1.0 - Ⓒ Copyright Claiton Lemes. */

<a
  href="Telegram_Link"
  target="_blank"
  class="telegram-float"
  aria-label="Botão para contato no Telegram"
  role="button"
>
  <svg class="icon" aria-hidden="true" viewBox="0 0 241 199">
    <path
      d="m15 87 143-59 63-26s22-9 20 12l-11 71-15 97s-1 14-12 17c-10 2-27-9-30-11s-47-30-63-43c-4-4-9-12 1-20l65-62c7-7 14-24-16-3l-87 58s-10 6-29 1L4 106s-14-9 11-19Z"
    />
  </svg>
</a>

<style>
:root {
  --icon: #ffffff;
  --icon-hover: #ffffff;
  --background: #0088cc;
  --background-hover: #006395;
  --pulse: #0088cc;
  --pulse-duration: 3s;
  --icon-hover-duration: 0.5s;
  --background-hover-duration: 0.5s;
}

.icon {
  width: 25px;
  height: 25px;
  fill: var(--icon);
  transition: fill var(--icon-hover-duration);
  margin-top: 0px;
  margin-left: -4px;
}

.telegram-float {
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
  transition: background-color var(--background-hover-duration);
  animation: pulse var(--pulse-duration) infinite;
}

.telegram-float:hover {
  background-color: var(--background-hover);
}

.telegram-float:hover .icon {
  fill: var(--icon-hover);
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

/*Instagram Float for GreatPages v. 3.1.0 - Ⓒ Copyright Claiton Lemes.*/

<a
  href="Instagram_Link"
  target="_blank"
  class="instagram-float"
  aria-label="Botão para contato no Instagram"
  role="button"
>
  <svg class="icon" aria-hidden="true" viewBox="0 0 18 18">
    <path
      d="M5 2C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V13C2 13.7956 2.31607 14.5587 2.87868 15.1213C3.44129 15.6839 4.20435 16 5 16H13C13.7956 16 14.5587 15.6839 15.1213 15.1213C15.6839 14.5587 16 13.7956 16 13V5C16 4.20435 15.6839 3.44129 15.1213 2.87868C14.5587 2.31607 13.7956 2 13 2H5ZM1.46447 1.46447C2.40215 0.526784 3.67392 0 5 0H13C14.3261 0 15.5979 0.526784 16.5355 1.46447C17.4732 2.40215 18 3.67392 18 5V13C18 14.3261 17.4732 15.5979 16.5355 16.5355C15.5979 17.4732 14.3261 18 13 18H5C3.67392 18 2.40215 17.4732 1.46447 16.5355C0.526784 15.5979 0 14.3261 0 13V5C0 3.67392 0.526784 2.40215 1.46447 1.46447ZM13.5 3.5C14.0523 3.5 14.5 3.94772 14.5 4.5V4.51C14.5 5.06228 14.0523 5.51 13.5 5.51C12.9477 5.51 12.5 5.06228 12.5 4.51V4.5C12.5 3.94772 12.9477 3.5 13.5 3.5ZM6.17157 6.17157C6.92172 5.42143 7.93913 5 9 5C10.0609 5 11.0783 5.42143 11.8284 6.17157C12.5786 6.92172 13 7.93913 13 9C13 10.0609 12.5786 11.0783 11.8284 11.8284C11.0783 12.5786 10.0609 13 9 13C7.93913 13 6.92172 12.5786 6.17157 11.8284C5.42143 11.0783 5 10.0609 5 9C5 7.93913 5.42143 6.92172 6.17157 6.17157ZM9 7C8.46957 7 7.96086 7.21071 7.58579 7.58579C7.21071 7.96086 7 8.46957 7 9C7 9.53043 7.21071 10.0391 7.58579 10.4142C7.96086 10.7893 8.46957 11 9 11C9.53043 11 10.0391 10.7893 10.4142 10.4142C10.7893 10.0391 11 9.53043 11 9C11 8.46957 10.7893 7.96086 10.4142 7.58579C10.0391 7.21071 9.53043 7 9 7Z"
    />
  </svg>
</a>


<style>
:root {
  --icon: #ffffff;
  --icon-hover: #ffffff;
  --gradient-normal: #e9a61d, #ef3738, #9d24ce;
  --gradient-hover: #cb8f17, #bc2323, #721597;
  --pulse: #ef3738;
  --icon-hover-speed: 0.5s;
  --background-hover-speed: 0.5s;
  --pulse-speed: 3s;
}

.icon {
  width: 30px;
  height: 30px;
  fill: var(--icon);
  transition: fill var(--icon-hover-speed);
}

.instagram-float {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  cursor: pointer;
  width: 60px;
  height: 60px;
  bottom: 30px;
  right: 30px;
  transition: background var(--background-hover-speed);
  background: linear-gradient(45deg, var(--gradient-normal));
  border-radius: 50px;
  z-index: 1000000;
  animation: pulse var(--pulse-speed) infinite;
}

.instagram-float:hover {
  background: linear-gradient(45deg, var(--gradient-hover));
}

.instagram-float:hover .icon {
  fill: var(--icon-hover);
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

```
