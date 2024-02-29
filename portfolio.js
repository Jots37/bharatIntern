const images = [
  {
    collection1: [
      "/Images/portrait/portrait-01.jpg",
      "/Images/nature/nature-01.jpg",
      "/Images/animal/animal-01.jpg",
      "/Images/building/building-01.jpg",
      "/Images/portrait/portrait-02.jpg",
      "/Images/nature/nature-02.jpg",
      "/Images/animal/animal-02.jpg",
      "/Images/building/building-02.jpg",
    ],
  },
  {
    collection2: [
      "/Images/portrait/portrait-03.jpg",
      "/Images/nature/nature-03.jpg",
      "/Images/animal/animal-03.jpg",
      "/Images/building/building-03.jpg",
      "/Images/portrait/portrait-04.jpg",
      "/Images/nature/nature-04.jpg",
      "/Images/animal/animal-04.jpg",
      "/Images/building/building-04.jpg",
    ],
  },
  {
    collection3: [
      "/Images/portrait/portrait-05.jpg",
      "/Images/nature/nature-05.jpg",
      "/Images/animal/animal-05.jpg",
      "/Images/building/building-05.jpg",
      "/Images/portrait/portrait-06.jpg",
      "/Images/nature/nature-06.jpg",
      "/Images/animal/animal-06.jpg",
      "/Images/building/building-06.jpg",
    ],
  },
  {
    collection4: [
      "/Images/portrait/portrait-07.jpg",
      "/Images/nature/nature-07.jpg",
      "/Images/animal/animal-07.jpg",
      "/Images/building/building-07.jpg",
      "/Images/portrait/portrait-08.jpg",
      "/Images/nature/nature-08.jpg",
      "/Images/animal/animal-08.jpg",
      "/Images/building/building-08.jpg",
    ],
  },
];

const images2 = {
  all: [
    "/Images/portrait/portrait-03.jpg",
    "/Images/nature/nature-03.jpg",
    "/Images/animal/animal-03.jpg",
    "/Images/building/building-03.jpg",
    "/Images/portrait/portrait-04.jpg",
    "/Images/nature/nature-04.jpg",
    "/Images/animal/animal-04.jpg",
    "/Images/building/building-04.jpg",
  ],

  portraits: [
    "/Images/portrait/portrait-01.jpg",
    "/Images/portrait/portrait-02.jpg",
    "/Images/portrait/portrait-03.jpg",
    "/Images/portrait/portrait-04.jpg",
    "/Images/portrait/portrait-05.jpg",
    "/Images/portrait/portrait-06.jpg",
    "/Images/portrait/portrait-07.jpg",
    "/Images/portrait/portrait-08.jpg",
  ],

  nature: [
    "/Images/nature/nature-01.jpg",
    "/Images/nature/nature-02.jpg",
    "/Images/nature/nature-03.jpg",
    "/Images/nature/nature-04.jpg",
    "/Images/nature/nature-05.jpg",
    "/Images/nature/nature-06.jpg",
    "/Images/nature/nature-07.jpg",
    "/Images/nature/nature-08.jpg",
  ],

  animals: [
    "/Images/animal/animal-01.jpg",
    "/Images/animal/animal-02.jpg",
    "/Images/animal/animal-03.jpg",
    "/Images/animal/animal-04.jpg",
    "/Images/animal/animal-05.jpg",
    "/Images/animal/animal-06.jpg",
    "/Images/animal/animal-07.jpg",
    "/Images/animal/animal-08.jpg",
  ],

  buildings: [
    "/Images/building/building-01.jpg",
    "/Images/building/building-02.jpg",
    "/Images/building/building-03.jpg",
    "/Images/building/building-04.jpg",
    "/Images/building/building-05.jpg",
    "/Images/building/building-06.jpg",
    "/Images/building/building-07.jpg",
    "/Images/building/building-08.jpg",
  ],
};

function toIntro() {
  document.getElementById("intro").style.display = "block";
}

function toReturn() {
  document.getElementById("intro").style.display = "none";
}
function showCollection(collectionIndex) {
  const collectionKey = Object.keys(images[collectionIndex])[0];
  const imageCollection = images[collectionIndex][collectionKey]
    .map((image) => `<img src="${image}" />`)
    .join("");
  document.querySelector(".images").innerHTML = imageCollection;

  const collectionButtons = document.querySelectorAll(".next-btns button");
  collectionButtons.forEach((button) => button.classList.remove("active"));

  const activeButton = document.querySelector(
    `.next-btns button:nth-child(${collectionIndex + 1})`
  );
  if (activeButton) {
    activeButton.classList.add("active");
  }

  const categoryLinks = document.querySelectorAll(".div2 a");
  categoryLinks.forEach((link) => link.classList.remove("active"));
}

function toGallery() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("testimonial").style.display = "none";
  document.getElementById("gallery").style.display = "block";
}
function toHome() {
  document.getElementById("gallery").style.display = "none";
}
function toTestimonials() {
  document.getElementById("gallery").style.display = "none";
  document.getElementById("intro").style.display = "none";
  document.getElementById("testimonial").style.display = "block";
}
function fromT() {
  document.getElementById("testimonial").style.display = "none";
}

function toAbout() {
  document.getElementById("gallery").style.display = "none";
  document.getElementById("intro").style.display = "none";
  document.getElementById("testimonial").style.display = "none";
  document.getElementById("about").style.display = "block";
}
function fromAb() {
  document.getElementById("about").style.display = "none";
}

function toContact() {
  document.getElementById("gallery").style.display = "none";
  document.getElementById("intro").style.display = "none";
  document.getElementById("testimonial").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("contact").style.display = "block";
}
function fromCon() {
  document.getElementById("contact").style.display = "none";
}

function showCategory(category) {
  const categoryImages = images2[category];

  const categoryLinks = document.querySelectorAll(".div2 a");
  categoryLinks.forEach((link) => link.classList.remove("active"));

  if (categoryImages) {
    const activeLink = document.querySelector(
      `.div2 a[data-category="${category}"]`
    );
    if (activeLink) {
      activeLink.classList.add("active");
    }

    const categoryLinks = document.querySelectorAll(".next-btns button");
    categoryLinks.forEach((link) => link.classList.remove("active"));

    const imageCollection = categoryImages
      .map((image) => `<img src="${image}" />`)
      .join("");
    document.querySelector(".images").innerHTML = imageCollection;
  } else {
    console.error(`Category "${category}" does not exist.`);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showCategory("all");
});
