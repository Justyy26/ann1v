function loadMonth(monthName, shortName, totalPhotos) {

  const container = document.getElementById(monthName);

  if (container.dataset.loaded === "true") return;
  container.dataset.loaded = "true";

  for (let i = 1; i <= totalPhotos; i++) {

    const card = document.createElement("div");
card.className = "flip-card";

const inner = document.createElement("div");
inner.className = "flip-inner";

const front = document.createElement("div");
front.className = "flip-front";

const back = document.createElement("div");
back.className = "flip-back";
back.innerText = "Write your note here...";

const img = document.createElement("img");

/* IMPORTANT → Lazy loading setup */
img.dataset.srcJpg = `images/${monthName}/${shortName}${i}.jpg`;
img.dataset.srcJpeg = `images/${monthName}/${shortName}${i}.jpeg`;
img.dataset.srcPng = `images/${monthName}/${shortName}${i}.png`;

img.loading = "lazy";

/* CLICK → flip */
card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

/* DOUBLE CLICK → Messenger-style viewer */
img.addEventListener("dblclick", (e) => {
  e.stopPropagation();
  openViewer(img.src);
});

front.appendChild(img);
inner.appendChild(front);
inner.appendChild(back);
card.appendChild(inner);

container.appendChild(card);


  }

  lazyLoadImages(container);
}

function lazyLoadImages(container) {

  const imgObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        const img = entry.target;

        img.src = img.dataset.srcJpg;

        img.onerror = () => {
          img.onerror = () => {
            img.src = img.dataset.srcPng;
          };
          img.src = img.dataset.srcJpeg;
        };

        imgObserver.unobserve(img);
      }

    });

  }, { root: container, threshold: 0.1 });

  container.querySelectorAll("img").forEach(img => {
    imgObserver.observe(img);
  });
}

/* Month Observer */
const monthObserver = new IntersectionObserver(entries => {

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

      monthObserver.unobserve(entry.target);
    }

  });

}, { threshold: 0.2 });

document.querySelectorAll(".carousel").forEach(section => {
  monthObserver.observe(section);
});

function lazyLoadImages(container) {

  const imgObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        const img = entry.target;

        img.src = img.dataset.srcJpg;

        img.onerror = () => {
          img.onerror = () => {
            img.src = img.dataset.srcPng;
          };
          img.src = img.dataset.srcJpeg;
        };

        imgObserver.unobserve(img);
      }

    });

  }, { root: container, threshold: 0.1 });

  container.querySelectorAll("img").forEach(img => {
    imgObserver.observe(img);
  });
}

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


lazyLoadImages(container);
