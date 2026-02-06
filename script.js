function loadMonth(monthName, shortName, totalPhotos) {

  const container = document.getElementById(monthName);

  for (let i = 1; i <= totalPhotos; i++) {

    const img = document.createElement("img");
    img.loading = "lazy";

    img.src = `images/${monthName}/${shortName}${i}.jpg`;

    img.onerror = () => {
      img.onerror = () => {
        img.src = `images/${monthName}/${shortName}${i}.png`;
      };

      img.src = `images/${monthName}/${shortName}${i}.jpeg`;
    };

    container.appendChild(img);
  }
}

/* MONTH PHOTO COUNTS */
loadMonth("february", "feb", 12);
loadMonth("march", "mar", 12);
loadMonth("april", "apr", 45);
loadMonth("may", "may", 21);
loadMonth("june", "june", 23);
loadMonth("july", "jul", 19);
loadMonth("august", "aug", 19);
loadMonth("september", "sep", 17);
loadMonth("october", "oct", 25);
loadMonth("november", "nov", 60);
loadMonth("december", "dec", 14);
