function loadMonth(monthName, shortName, totalPhotos) {
  const container = document.getElementById(monthName);

  for (let i = 1; i <= totalPhotos; i++) {
    const img = document.createElement("img");
    img.src = `images/${monthName}/${shortName}${i}.jpg`;
    img.loading = "lazy";
    container.appendChild(img);
  }
}

/* CHANGE PHOTO COUNTS HERE */
loadMonth("february", "feb", 10);
loadMonth("march", "mar", 10);
loadMonth("april", "apr", 10);
loadMonth("may", "may", 10);
loadMonth("june", "jun", 10);
loadMonth("july", "jul", 10);
loadMonth("august", "aug", 10);
loadMonth("september", "sep", 10);
loadMonth("october", "oct", 10);
loadMonth("november", "nov", 10);
loadMonth("december", "dec", 10);
