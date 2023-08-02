let isDown = false;
let startX;
let scrollLeft;
const slider1 = document.querySelector(".slider1");
const slider2 = document.querySelector(".slider2");
const slider3 = document.querySelector(".slider3");

drag(slider1);
drag(slider2);
drag(slider3);

function drag(item) {
  const end = () => {
    isDown = false;
    item.classList.remove("active");
  };

  const start = (e) => {
    isDown = true;
    item.classList.add("active");
    startX = e.pageX || e.touches[0].pageX - item.offsetLeft;
    scrollLeft = item.scrollLeft;
  };

  const move = (e) => {
    if (!isDown) return;

    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - item.offsetLeft;
    const dist = x - startX;
    item.scrollLeft = scrollLeft - dist;
  };

  (() => {
    item.addEventListener("mousedown", start);
    item.addEventListener("touchstart", start);

    item.addEventListener("mousemove", move);
    item.addEventListener("touchmove", move);

    item.addEventListener("mouseleave", end);
    item.addEventListener("mouseup", end);
    item.addEventListener("touchend", end);
  })();
}
