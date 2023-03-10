/*p1<-->p2*/
const nextpage1 = document.querySelector(".nextpage-1");
const page1 = document.querySelector(".page1-precaution");
const lastpage2 = document.querySelector(".lastpage-2");

nextpage1.addEventListener("click", function () {
  page1.classList.add("next-page-js");
  page1.classList.remove("last-page-js");
  page1.classList.add("next-page-js2");
});

lastpage2.addEventListener("click", function () {
  page1.classList.remove("next-page-js2");
  page1.classList.add("last-page-js");
});

/*p2<-->p3*/
const nextpage2 = document.querySelector(".nextpage-2");
const page2 = document.querySelector(".page2-input");
const lastpage3 = document.querySelector(".lastpage-3");

const form1 = document.querySelector(".input-content");

form1.addEventListener("submit", () => {
  page2.classList.add("next-page-js");
  page2.classList.remove("last-page-js");
  page2.classList.add("next-page-js2");
});

lastpage3.addEventListener("click", function () {
  page2.classList.remove("next-page-js2");
  page2.classList.add("last-page-js");
});

/*p3-dialog彈出*/
const opencaution = document.querySelector(".open-caution"); //設置觸發開啟視窗之文字
const diacaution = document.querySelector(".dia-precaution"); //設置彈出視窗的dialog
const closecaution = document.querySelector("#precaution-close"); //設置彈出視窗的關閉鈕
const diacautionbox = document.querySelector(".dia-precaution-box"); //設置彈出的dialog內的”視窗“

opencaution.addEventListener("click", function () {
  diacaution.classList.add("dia-open");
  diacautionbox.className =
    "dia-precaution-box caution-open-animation caution-open-position";
});

closecaution.addEventListener("click", function () {
  diacaution.classList.remove("dia-open");
  diacautionbox.className =
    "dia-precaution-box dia-comeout caution-close-animation caution-close-position";
});

/*p3按鈕與彈出窗設定*/
const cancelbutton = document.querySelector("#cancel-button"); //設置取消按鈕
const cancelalert = document.querySelector(".cancel-alert"); //設置取消彈出警告窗

cancelbutton.addEventListener("click", function () {
  diacaution.classList.add("dia-open");
  cancelalert.className = "cancel-alert alert-open";
});

document
  .querySelector("#cancel-alert-no")
  .addEventListener("click", function () {
    diacaution.classList.remove("dia-open");
    cancelalert.className = "cancel-alert  alert-close";
  });

const donatebutton = document.querySelector("#donate-button"); //設置捐贈按鈕
const donatealert = document.querySelector(".donate-alert"); //設置捐贈彈出提示窗

donatebutton.addEventListener("click", function () {
  diacaution.classList.add("dia-open");
  donatealert.className = "donate-alert alert-open";
});

document
  .querySelector("#donate-alert-no")
  .addEventListener("click", function () {
    diacaution.classList.remove("dia-open");
    donatealert.className = "donate-alert alert-close";
  });

/*p3器官click設定*/

document.querySelector(".icon-lung").addEventListener("click", function () {
  document.querySelector(".js-lung").classList.toggle("icon-solid-appear");
});

document.querySelector(".icon-tendon").addEventListener("click", function () {
  document.querySelector(".js-tendon").classList.toggle("icon-solid-appear");
});

document.querySelector(".icon-box-bone").addEventListener("click", function () {
  document.querySelector(".js-bone").classList.toggle("icon-solid-appear");
});

document.querySelector(".icon-blood").addEventListener("click", function () {
  document.querySelector(".js-blood").classList.toggle("icon-solid-appear");
});

document.querySelector(".icon-kidney").addEventListener("click", function () {
  document.querySelector(".js-kidney").classList.toggle("icon-solid-appear");
});

document.querySelector(".icon-liver").addEventListener("click", function () {
  document.querySelector(".js-liver").classList.toggle("icon-solid-appear");
});

document.querySelector(".icon-skin").addEventListener("click", function () {
  document.querySelector(".js-skin").classList.toggle("icon-solid-appear");
});

document.querySelector(".icon-cornea").addEventListener("click", function () {
  document.querySelector(".js-cornea").classList.toggle("icon-solid-appear");
});

document.querySelector(".icon-trachea").addEventListener("click", function () {
  document.querySelector(".js-trachea").classList.toggle("icon-solid-appear");
});

document.querySelector(".icon-heart").addEventListener("click", function () {
  document.querySelector(".js-heart").classList.toggle("icon-solid-appear");
});

document.querySelector(".icon-pancreas").addEventListener("click", function () {
  document.querySelector(".js-pancreas").classList.toggle("icon-solid-appear");
});

document.querySelector(".icon-smallin").addEventListener("click", function () {
  document.querySelector(".js-intesline").classList.toggle("icon-solid-appear");
});

document
  .querySelector(".icon-heart-valve")
  .addEventListener("click", function () {
    document
      .querySelector(".js-heart-valve")
      .classList.toggle("icon-solid-appear");
  });
