const selectElement = document.getElementById("timeframe");
    
      // Define the available timeframes
      const timeframes = [
        "1s", "5s", "10s", "30s", "1m", "5m", "15m", "30m", "1h", "4h", "1d", "1w", "1M"
      ];
    
      // Generate the options dynamically
      timeframes.forEach(timeframe => {
        const option = document.createElement("option");
        option.value = timeframe;
        option.text = timeframe;
        selectElement.appendChild(option);
      });