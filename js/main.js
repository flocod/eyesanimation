setInterval(() => {
  gsap.to(".cristalin", .5, {
    x: "100%",
    y: "-10%",
    yoyo: true,
    repeat: 1,
    ease: "power1.inOut",
    delay: 1,
    stagger: {
      amount: 1.5,
      grid: "auto",
      from: "center",
    },
  });
}, 3000);

setInterval(() => {
  gsap.to(".paupiere", .2, {
    y: "-15%",
    yoyo: true,
    repeat: 1,
    ease: "none",
    delay: 1,
    stagger: {
      amount: 1.5,
      grid: "auto",
      from: "center",
    },
  });

  gsap.to(".eye", .15, {
  background:"black",
    yoyo: true,
    repeat: 1,
    ease: "none",
    delay: 1
  });
}, 4000);

