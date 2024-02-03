const tl = gsap.timeline();

tl.fromTo(
  ".heading h1",
  {
    y: 0,
    duration: 5,
  },
  {
    y: -100,
    stagger: 0.06,
    opacity: 1,
    fontWeight: 200,
  }
);

let cursor = document.querySelector(".cursor");
let client = { x: 0, y: 0 };

cursor.style.backgroundColor = "white";
cursor.style.width = "20px";
cursor.style.height = "20px";
cursor.style.borderRadius = "10px";
cursor.style.opacity = "0";
cursor.style.position = "fixed";
cursor.style.transform = `translate(${client.x}px ,${client.y}px)`;

const body = document.querySelector("body");
const nav = document.querySelectorAll("nav div");

const nav1 = document.querySelector(".nav_01");
const nav2 = document.querySelector(".nav_02");
const nav3 = document.querySelector(".nav_03");
const nav4 = document.querySelector(".nav_04");
const new_word = document.querySelector("#new_word");
const new_word_01 = document.querySelector("#new_word_01");
const new_word_02 = document.querySelector("#new_word_02");
const new_word_03 = document.querySelector("#new_word_03");
const right_braces = document.querySelector("#right_braces");
const right_braces1 = document.querySelector("#right_braces_01");
const right_braces2 = document.querySelector("#right_braces_02");
const right_braces3 = document.querySelector("#right_braces_03");

gsap.set(new_word, { autoAlpha: 0, x: 0 });
gsap.set(right_braces, { autoAlpha: 1, x: 0 });

nav2.addEventListener("mouseenter", function () {
  gsap.to(right_braces, {
    autoAlpha: 1,
    x: "10%",
    duration: 1,
    ease: "power3.out",
  });
  gsap.to(new_word, { autoAlpha: 1, x: 2, duration: 1 });

  new_word.classList.remove("hidden");
});

nav2.addEventListener("mouseleave", function () {
  gsap.to(right_braces, { autoAlpha: 1, x: "0%", duration: 1 });
  gsap.to(new_word, { autoAlpha: 0, x: 0, duration: 0.5 });

  new_word.classList.add("hidden");
});

gsap.set(new_word_01, { autoAlpha: 0, x: 0 });
gsap.set(right_braces1, { autoAlpha: 1, x: 0 });

nav1.addEventListener("mouseenter", function () {
  gsap.to(right_braces1, {
    autoAlpha: 1,
    x: "10%",
    duration: 1,
    ease: "power3.out",
  });
  gsap.to(new_word_01, { autoAlpha: 1, x: 2, duration: 1 });

  new_word_01.classList.remove("hidden");
});

nav1.addEventListener("mouseleave", function () {
  gsap.to(right_braces1, {
    autoAlpha: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
  });
  gsap.to(new_word_01, { autoAlpha: 0, x: 2, duration: 1 });

  new_word_01.classList.add("hidden");
});

gsap.set(new_word_02, { autoAlpha: 0, x: 0 });
gsap.set(right_braces2, { autoAlpha: 1, x: 0 });

nav3.addEventListener("mouseenter", function () {
  gsap.to(right_braces2, {
    autoAlpha: 1,
    x: "10%",
    duration: 1,
    ease: "power3.out",
  });
  gsap.to(new_word_02, { autoAlpha: 1, x: 2, duration: 1 });

  new_word_02.classList.remove("hidden");
});

nav3.addEventListener("mouseleave", function () {
  gsap.to(right_braces2, {
    autoAlpha: 1,
    x: "0%",
    duration: 1,
    ease: "power3.out",
  });
  gsap.to(new_word_02, { autoAlpha: 0, x: 2, duration: 1 });

  new_word_02.classList.add("hidden");
});

gsap.set(new_word_03, { autoAlpha: 0, x: 0 });
gsap.set(right_braces3, { autoAlpha: 1, x: 0 });

nav4.addEventListener("mouseenter", function () {
  gsap.to(right_braces3, {
    autoAlpha: 1,
    x: "10%",
    duration: 1,
    ease: "power3.out",
  });
  gsap.to(new_word_03, { autoAlpha: 1, x: 2, duration: 1 });

  new_word_03.classList.remove("hidden");
});

nav4.addEventListener("mouseleave", function () {
  gsap.to(right_braces3, {
    autoAlpha: 1,
    x: "0%",
    duration: 1,
    ease: "power3.out",
  });
  gsap.to(new_word_03, { autoAlpha: 0, x: 2, duration: 1 });

  new_word_03.classList.add("hidden");
});

nav.forEach((item) => {
  item.addEventListener("mouseenter", function () {
    console.log("mouse enter event trigger");

    cursor.style.backgroundColor = "blue";
    cursor.style.height = "60px";
    cursor.style.width = "60px";
    cursor.style.borderRadius = "30px";
    cursor.style.zIndex = "-1";
  });

  item.addEventListener("mouseleave", function () {
    cursor.style.backgroundColor = "white";
    cursor.style.height = "20px";
    cursor.style.width = "20px";
    cursor.style.borderRadius = "10px";
  });
});

document.addEventListener("mousemove", function (e) {
  client.x = e.clientX;
  client.y = e.clientY;

  console.log("event", e);

  cursor.style.transform = `translate(${client.x}px, ${client.y}px)`;
  cursor.style.opacity = "1";
});

const studioText = document.querySelector(".studio_parent");

const studioHeading = document.createElement("h3");
studioHeading.textContent = "STUDIO";
studioText.appendChild(studioHeading);
studioHeading.classList.add("heading");

studioText.addEventListener("mouseenter", function (params) {
  console.log("mouse enter");

  tl.to(cursor, {
    backgroundColor: "blue",
    width: "60px",
    height: "60px",
    borderRadius: "30px",
  });
});

studioText.addEventListener("mouseleave", function (params) {
  tl.to(cursor, {
    backgroundColor: "white",
    width: "20px",
    height: "20px",
    borderRadius: "10px",
  });
});

// scroll trigger

const scrollTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".new_section",
    start: "20% 120%", // Adjust the start position as needed
    end: "40% center", // Adjust the end position as needed
    scrub: true, // Smoothly updates animation as you scroll
    // markers: true,
  },
});

scrollTimeline.from(".new_section h3", {
  opacity: 0,
  duration: 1,
});

var video = document.querySelector(".video");

document.addEventListener("DOMContentLoaded", function () {
  // Define the video_timeline
  var master_timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".video_parent",
      start: "50% center",
      end: "100% top",
      scrub: 5,
      markers: true,
      pin: true,
      duration: 0.2,
    },
  });

  // Animation for video size
  master_timeline.to(".video", {
    width: "100vw",
    height: "100vh",
  });

  // Animation for text position
  master_timeline.from(
    ".left_text",
    {
      x: "-200%",
    },
    0
  ); // Start both animations at the same time (0 seconds into the timeline)

  master_timeline.from(
    ".right_text",
    {
      x: "250%",
    },
    0
  );
});
