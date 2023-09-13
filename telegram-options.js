import { allPairs } from './pairs.js'

      let telegram = window.Telegram.WebApp;
      telegram.expand()
      let submitButton = document.getElementById('sendButton');

      submitButton.addEventListener("click", () => {
        let pair = document.getElementById('pair');
        let timeframe = document.getElementById('timeframe');
        let longMA = document.getElementById('longMA-value');
        let shortMA = document.getElementById('shortMA-value');
        let longX = document.getElementById('longX-value');
        let shortX = document.getElementById('shortX-value');
        
        let data = {
          pair: pair.value,
          timeframe: timeframe.value,
          longMA: longMA.value,
          shortMA: shortMA.value,
          longX: longX.value,
          shortX: shortX.value,

        }
        alert(JSON.stringify(data))
        if (!timeframe.value || !longMA.value || !shortMA.value || !longX.value || !shortX.value) {
          alert('Заполните все поля')
          return
        }

        if (!pair.value || !allPairs.includes(pair.value.toUpperCase())) {
          alert('Вы не выбрали пару или она указана некорректно');
          return;
        }
        telegram.sendData(JSON.stringify(data))

        telegram.close()
      })

