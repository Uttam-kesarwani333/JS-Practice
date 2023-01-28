const ColorGenerator = () => {
    const num = Math.floor(Math.random() * 16777216);
    const Ccode = "#" + num.toString(16);
    console.log(Ccode);
    document.body.style.background = Ccode;
    document.getElementById("Color-Code").innerText = Ccode;
    navigator.clipboard.writeText(Ccode);
  };

  ColorGenerator();