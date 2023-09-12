let telegram = window.Telegram.WebApp;
      let logo = document.getElementById('logo');
      telegram.expand()
      let submitButton = document.getElementById('sendButton');

      submitButton.addEventListener("click", () => {
        let pair = document.getElementById('pair');
        let timeframe = document.getElementById('timeframe');
        let longMA = document.getElementById('longMA-value');
        let shortMA = document.getElementById('shortMA-value');
        let longX = document.getElementById('longX-value');
        let shortX = document.getElementById('shortX-value');
        console.log(longMA.value)
        if (isNaN(longMA.value)) {
          showError(longMA, 'Input must be a number');
          return; // Stop the function execution if the validation fails
        }
        //  
        let data = {
          pair: pair.value,
          timeframe: timeframe.value,
          longMA: longMA.value,
          shortMA: shortMA.value,
          longX: longX.value,
          shortX: shortX.value,

        }

        telegram.sendData(JSON.stringify(data))

        telegram.close()
      })

