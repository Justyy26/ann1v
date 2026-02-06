function loadMonth(monthName, shortName, totalPhotos) {

  const container = document.getElementById(monthName);

  if (container.dataset.loaded === "true") return;
  container.dataset.loaded = "true";

  let i = 1;

  function loadNext() {

    if (i > totalPhotos) return;

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

    i++;

    // small delay prevents rate limit
    setTimeout(loadNext, 120);
  }

  loadNext();
}

/* Intersection Observer */
const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      const id = entry.target.id;

      switch(id) {
        case "february": loadMonth("february","feb",12); break;
        case "march": loadMonth("march","mar",12); break;
        case "april": loadMonth("april","apr",45); break;
        case "may": loadMonth("may","may",21); break;
        case "june": loadMonth("june","june",23); break;
        case "july": loadMonth("july","jul",19); break;
        case "august": loadMonth("august","aug",19); break;
        case "september": loadMonth("september","sep",17); break;
        case "october": loadMonth("october","oct",25); break;
        case "november": loadMonth("november","nov",60); break;
        case "december": loadMonth("december","dec",14); break;
      }

      observer.unobserve(entry.target);
    }

  });

}, { threshold: 0.2 });

document.querySelectorAll(".carousel").forEach(section => {
  observer.observe(section);
});
