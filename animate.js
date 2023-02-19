let tl = gsap.timeline({
  defaults: { duration: 0.3 },
  repeat: -1,
  repeatDelay: 1,
  yoyo: true,
});

let mainContent = tl.from(".main-content", {
  y: 200,
});

let circle1 = tl.from(
  ".circle1",
  {
    x: 40,
    y: 40,
    scale: 0,
  },
  "<0.1"
);

let circle2 = tl.from(
  ".circle2",
  {
    x: 40,
    y: -10,
    scale: 0,
  },
  "<0.1"
);

let circle3 = tl.from(
  ".circle3",
  {
    x: 40,
    y: -20,
    scale: 0,
  },
  "<0.1"
);

let circle4 = tl.from(
  ".circle4",
  {
    x: 40,
    y: 30,
    scale: 0,
  },
  "<0.1"
);

let circle5 = tl.from(
  ".circle5",
  {
    x: 40,
    y: 20,
    scale: 0,
  },
  "<0.1"
);

let title = tl.from(
  ".title",
  {
    y: 20,
    opacity: 0,
  },
  "<0.1"
);

let content = document.querySelector(".list-content").children;
for (let i = 0; i < content.length; i++) {
  tl.from(
    content[i],
    {
      y: 20,
      opacity: 0,
    },
    "<0.1"
  );
}
