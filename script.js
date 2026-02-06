function openViewer(src) {
  const overlay = document.createElement("div");
  overlay.className = "viewer-overlay";

  const img = document.createElement("img");
  img.src = src;

  overlay.appendChild(img);

  overlay.addEventListener("click", () => {
    overlay.remove();
  });

  document.body.appendChild(overlay);
}

function loadMonth(monthName, shortName, totalPhotos) {

  const container = document.getElementById(monthName);

  for (let i = 1; i <= totalPhotos; i++) {

    const card = document.createElement("div");
    card.className = "flip-card";

    const inner = document.createElement("div");
    inner.className = "flip-inner";

    const front = document.createElement("div");
    front.className = "flip-front";

    const back = document.createElement("div");
    back.className = "flip-back";
    back.innerText = "Add your note here...";

    const img = document.createElement("img");

    img.src = `images/${monthName}/${shortName}${i}.jpg`;

    img.onerror = () => {
      img.onerror = () => {
        img.src = `images/${monthName}/${shortName}${i}.png`;
      };
      img.src = `images/${monthName}/${shortName}${i}.jpeg`;
    };

    /* Flip card */
    let holdTimer;

/* HOLD → Viewer */
img.addEventListener("mousedown", (e) => {
  e.stopPropagation();

  holdTimer = setTimeout(() => {
    openViewer(img.src);
  }, 800); // 0.8 second hold
});

img.addEventListener("mouseup", () => {
  clearTimeout(holdTimer);
});

img.addEventListener("mouseleave", () => {
  clearTimeout(holdTimer);
});

/* MOBILE HOLD */
img.addEventListener("touchstart", (e) => {
  e.stopPropagation();

  holdTimer = setTimeout(() => {
    openViewer(img.src);
  }, 800);
});

img.addEventListener("touchend", () => {
  clearTimeout(holdTimer);
});

/* NORMAL CLICK → Flip */
card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});


    front.appendChild(img);
    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);

    container.appendChild(card);
  }
}

/* LOAD MONTHS */
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
