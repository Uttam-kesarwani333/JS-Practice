const states = document.getElementById("btn");
      const bulb = document.getElementById("bulb");
      const toggle = () => {
        if (states.innerText == "Turn On") {
          bulb.src = "/images/Bon.jpg";
          states.innerText = "Turn Off";
        } else {
          bulb.src = "/images/Boff.jpg";
          states.innerText = "Turn On";
        }
      };