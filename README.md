# **GreatPages Whatsapp Float**

### **Configurações**

O código abaixo adiciona um botão flutuante do Whatsapp a uma página na plataforma Greatpages. Copie e cole no menu de configurações da página.

```HTML
/* Whatsapp Float for GreatPages v. 3.0.1 - Ⓒ Copyright Claiton Lemes. */

<a href="https://api.whatsapp.com/send?phone=55XX000000000" target="_blank" class="float" aria-label="Botão para contato no WhatsApp" role="button">
  <svg class="icon" aria-hidden="true" viewBox="0 0 22 23" >
    <path d="M7.68912 8.20891C7.57438 11.4876 9.83005 14.5469 13.9408 14.3726M8.80688 7.53476V8.73039C8.80688 9.03883 8.55646 9.28925 8.24798 9.28925C7.93954 9.28925 7.68912 9.03883 7.68912 8.73039V7.53476C7.68912 7.22632 7.93954 6.9759 8.24798 6.9759C8.55646 6.9759 8.80688 7.22632 8.80688 7.53476ZM14.5589 14.3726H13.3633C13.0549 14.3726 12.8045 14.1222 12.8045 13.8137C12.8045 13.5053 13.0549 13.2548 13.3633 13.2548H14.5589C14.8674 13.2548 15.1178 13.5053 15.1178 13.8137C15.1178 14.1222 14.8674 14.3726 14.5589 14.3726ZM11.1215 1C16.6111 1 21.0679 5.45681 21.0679 10.9464C21.0679 16.4359 16.6111 20.8927 11.1215 20.8927C9.77124 20.8927 8.48348 20.6231 7.30912 20.1348C4.675 20.5158 3.96776 20.6064 1 21C1.77356 19.1434 2.13579 18.3382 2.88292 16.5179C1.80505 14.9279 1.17515 13.0101 1.17515 10.9464C1.17515 5.45681 5.63196 1 11.1215 1Z"/>
</svg>
</a>

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