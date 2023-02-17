let mainContent = gsap.from(".main-content", {
  duration: 1,
  delay: 0,
  y: 200,
});

let circle1 = gsap.from(".circle1", {
  duration: 1,
  delay: 0.5,
  x: 40,
  y: 40,
  scale: 0,
});

let circle2 = gsap.from(".circle2", {
  duration: 1,
  delay: 0.6,
  x: 40,
  y: -10,
  scale: 0,
});

let circle3 = gsap.from(".circle3", {
  duration: 1,
  delay: 0.7,
  x: 40,
  y: -20,
  scale: 0,
});

let circle4 = gsap.from(".circle4", {
  duration: 1,
  delay: 0.8,
  x: 40,
  y: 30,
  scale: 0,
});

let circle5 = gsap.from(".circle5", {
  duration: 1,
  delay: 0.9,
  x: 40,
  y: 20,
  scale: 0,
});

let title = gsap.from(".title", {
  duration: 1,
  delay: 1.1,
  y: 20,
  opacity: 0,
});

let content = document.querySelector(".list-content").children;
for (let i = 0; i < content.length; i++) {
  gsap.from(content[i], {
    duration: 1,
    delay: 1.1 + i * 0.2,
    y: 20,
    opacity: 0,
  });
}
