function loadMonth(monthName, shortName) {

  const container = document.getElementById(monthName);

  for (let i = 1; i <= 200; i++) { // max photos per month

    const img = document.createElement("img");
    img.loading = "lazy";

    img.src = `images/${monthName}/${shortName}${i}.jpg`;

    img.onerror = () => {

      img.src = `images/${monthName}/${shortName}${i}.jpeg`;

      img.onerror = () => {

        img.src = `images/${monthName}/${shortName}${i}.png`;

        img.onerror = () => {
          img.remove(); // skip missing numbers
        };

      };

    };

    container.appendChild(img);
  }
}

/* LOAD MONTHS */
loadMonth("february", "feb");
loadMonth("march", "mar");
loadMonth("april", "apr");
loadMonth("may", "may");
loadMonth("june", "june"); // FIXED
loadMonth("july", "jul");
loadMonth("august", "aug");
loadMonth("september", "sep");
loadMonth("october", "oct");
loadMonth("november", "nov");
loadMonth("december", "dec");
