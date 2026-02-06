function loadMonth(monthName, shortName) {

  const container = document.getElementById(monthName);
  let i = 1;

  function tryLoad() {

    const img = document.createElement("img");
    img.loading = "lazy";

    img.src = `images/${monthName}/${shortName}${i}.jpg`;

    img.onerror = () => {

      img.src = `images/${monthName}/${shortName}${i}.jpeg`;

      img.onerror = () => {

        img.src = `images/${monthName}/${shortName}${i}.png`;

        img.onerror = () => {
          // STOP when no image exists
          img.remove();
          return;
        };

      };

    };

    container.appendChild(img);
    i++;

    // keep trying next photo
    setTimeout(tryLoad, 10);
  }

  tryLoad();
}

/* AUTO LOAD ALL MONTHS */
loadMonth("february", "feb");
loadMonth("march", "mar");
loadMonth("april", "apr");
loadMonth("may", "may");
loadMonth("june", "june");
loadMonth("july", "jul");
loadMonth("august", "aug");
loadMonth("september", "sep");
loadMonth("october", "oct");
loadMonth("november", "nov");
loadMonth("december", "dec");
