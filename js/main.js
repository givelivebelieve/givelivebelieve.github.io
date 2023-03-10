let lastPos = 0;

document.addEventListener("scroll", function () {
  let currentPos = window.scrollY;
  if (currentPos > 10) {
    document.querySelector(".part0-lightanime").classList.remove("appear");
    document.querySelector(".part0-titleanime").classList.remove("appear");
    document.querySelector(".part0-lightanime").classList.add("disappear");
    document.querySelector(".part0-titleanime").classList.add("disappear");
  }
  if (currentPos < 10) {
    document.querySelector(".part0-lightanime").classList.add("appear");
    document.querySelector(".part0-titleanime").classList.add("appear");

    document.querySelector(".part0-lightanime").classList.remove("disappear");
    document.querySelector(".part0-titleanime").classList.remove("disappear");
  }
});

const part5openbutton = document.getElementById("part4-button");
const outerwrapper = document.getElementById("outer-wrapper");

part5openbutton.addEventListener("click", function () {
  outerwrapper.classList.remove("stop-scroll");
});

const part0 = document.querySelector(".part0");
const navorange = document.querySelector(".nav-orange");

const nav = document.querySelector("nav");
const navfix = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navorange.classList.add("fixed");
      document.querySelector(".nav-white").classList.add("fixed2"); //開場動畫觸發後顯示nav並固定
      part0.style = "display:none"; //開場動畫觸發後將隱藏
      document.querySelector(".mobile-nav").classList.add("fixed");
    } else {
      nav.classList.remove("fixed");
    }
  });
};
let observer = new IntersectionObserver(navfix);
observer.observe(part0);

//*控制桌機nav變色
const NavChangecolor = (entries, NavColorObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      document.querySelector(".nav-white").classList.remove("appear");
      document.querySelector(".nav-white").classList.add("disappear");
      document.querySelector(".nav-white").classList.add("nav-tab-appear");
      navorange.classList.add("appear");
      navorange.classList.remove("disappear");
    } else {
      document.querySelector(".nav-white").classList.add("appear");
      document.querySelector(".nav-orange").classList.remove("nav-tab-appear");
      document.querySelector(".nav-white").classList.remove("nav-tab-appear");
      document.querySelector(".nav-white").classList.remove("disappear");
      navorange.classList.add("disappear");
      navorange.classList.remove("appear");
    }
  });
};
let NavColorObserver = new IntersectionObserver(NavChangecolor);
NavColorObserver.observe(document.getElementById("tabnavs-trigger"));

const navwhite = document.querySelector(".nav-white");
const introbody = document.querySelector("#part4-trigger");
const introbuttoncolor = (entries, observer2) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      part5openbutton.classList.add("disappear");
      part5openbutton.classList.remove("appear");
    } else {
      part5openbutton.classList.add("appear");
      part5openbutton.classList.remove("disappear");
      outerwrapper.classList.add("no-background");
      outerwrapper.classList.remove("orange-background");
    }
  });
};
let observer2 = new IntersectionObserver(introbuttoncolor);
observer2.observe(introbody);

const chagebgtrigger = document.querySelector("#intro-trigger2");
const part4bgorange = (entries, observer3) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
    } else {
      outerwrapper.classList.remove("no-background");
      outerwrapper.classList.add("orange-background");
      navorange.classList.add("nav-tab-appear");
      navwhite.classList.add("nav-tab-appear");
    }
  });
};
let observer3 = new IntersectionObserver(part4bgorange);
observer3.observe(chagebgtrigger);

const part4bgorange2 = (entries, observer4) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
    } else {
      outerwrapper.classList.remove("no-background");
      outerwrapper.classList.add("orange-background");
      navorange.classList.add("nav-tab-appear");
      navwhite.classList.add("nav-tab-appear");
    }
  });
};
let observer4 = new IntersectionObserver(part4bgorange2);
observer4.observe(document.getElementById("intro-trigger3"));

const dialogmask = document.querySelector(".process-dialog-mask");
dialogmask.addEventListener("click", function () {
  dialogmask.classList.remove("dialog-appear");
  document.querySelector(".dialog-lung").className =
    "process-dialog dialog-lung dialog-close";

  document.querySelector(".dialog-liver").className =
    "process-dialog dialog-liver dialog-close";

  document.querySelector(".dialog-heart").className =
    "process-dialog dialog-heart dialog-close";

  document.querySelector(".dialog-small-intesline").className =
    "process-dialog dialog-small-intesline dialog-close";

  document.querySelector(".dialog-kidney").className =
    "process-dialog dialog-kidney dialog-close";
});

document.querySelector("#process-lung").addEventListener("click", function () {
  dialogmask.classList.add("dialog-appear");
  document.querySelector(".dialog-lung").className =
    "process-dialog dialog-lung dialog-open";
});

document.querySelector("#process-liver").addEventListener("click", function () {
  dialogmask.classList.add("dialog-appear");
  document.querySelector(".dialog-liver").className =
    "process-dialog dialog-liver dialog-open";
});

document.querySelector("#process-heart").addEventListener("click", function () {
  dialogmask.classList.add("dialog-appear");
  document.querySelector(".dialog-heart").className =
    "process-dialog dialog-heart dialog-open";
});

document
  .querySelector("#process-kidney")
  .addEventListener("click", function () {
    dialogmask.classList.add("dialog-appear");
    document.querySelector(".dialog-kidney").className =
      "process-dialog dialog-kidney dialog-open";
  });

document
  .querySelector("#process-small-intesline")
  .addEventListener("click", function () {
    dialogmask.classList.add("dialog-appear");
    document.querySelector(".dialog-small-intesline").className =
      "process-dialog dialog-small-intesline dialog-open";
  });

//手機版nav
document
  .querySelector("#mobile-nav-open")
  .addEventListener("click", function () {
    document
      .querySelector(".mobile-navlist")
      .classList.add("mobile-nav-appear");
  });

document
  .querySelector("#mobile-nav-close")
  .addEventListener("click", function () {
    document
      .querySelector(".mobile-navlist")
      .classList.remove("mobile-nav-appear");
  });

document
  .querySelector(".mobile-navlist-box")
  .addEventListener("click", function () {
    document
      .querySelector(".mobile-navlist")
      .classList.remove("mobile-nav-appear");
  });

document
  .querySelector(".mobile-navlist-box2")
  .addEventListener("click", function () {
    document
      .querySelector(".mobile-navlist")
      .classList.remove("mobile-nav-appear");
  });

document
  .querySelector(".mobile-navlist-box3")
  .addEventListener("click", function () {
    document
      .querySelector(".mobile-navlist")
      .classList.remove("mobile-nav-appear");
  });

const ChangePageStopScroll = (entries, ChangePagetricker) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      document.body.classList.remove("stop-scrolling");
    } else {
      document.body.classList.add("stop-scrolling");
      document.getElementById("fillup-anime").classList.add("spin");
      document.getElementById("shine").classList.add("shine");
      document.getElementById("click-me-a").classList.add("change-clickme");
    }
  });
};
let ChangePagetricker = new IntersectionObserver(ChangePageStopScroll);
ChangePagetricker.observe(document.getElementById("stop-scroll-trigger"));
