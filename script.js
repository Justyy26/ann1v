function loadMonth(monthName, shortName, totalPhotos) {
  const container = document.getElementById(monthName);

  for (let i = 1; i <= totalPhotos; i++) {

    const img = document.createElement("img");
    img.loading = "lazy";

    // Try JPG first
    img.src = `images/${monthName}/${shortName}${i}.jpg`;

    // If JPG fails → try JPEG
    img.onerror = () => {
      img.onerror = () => {
        // If JPEG fails → try PNG
        img.src = `images/${monthName}/${shortName}${i}.png`;
      };

      img.src = `images/${monthName}/${shortName}${i}.jpeg`;
    };

    container.appendChild(img);
  }
}

/* CHANGE PHOTO COUNTS HERE */
loadMonth("february", "feb", 12);
loadMonth("march", "mar", 20);
loadMonth("april", "apr", 20);
loadMonth("may", "may", 20);
loadMonth("june", "jun", 20);
loadMonth("july", "jul", 20);
loadMonth("august", "aug", 20);
loadMonth("september", "sep", 20);
loadMonth("october", "oct", 20);
loadMonth("november", "nov", 20);
loadMonth("december", "dec", 20);
