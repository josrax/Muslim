const body = document.querySelector("body");

var greatwords = [
  "الرَحْمَٰن",
  "الرحيم",
  "الملك",
  "القدوس",
  "السلام",
  "المؤمن",
  "المهيمن",
  "العزيز",
  "الجبار",
  "الْمُتَكَبِّرُ",
  "الخالق",
  "البارئ",
  "المصور",
  "الغفار",
  "القهار",
  "الوهاب",
  "الرزاق",
  "الفتاح",
  "العليم",
  "القابض",
  "الباسط",
  "الخافض",
  "الرافع",
  "المعز",
  "المذل",
  "السميع",
  "البصير",
  "الحكم",
  "العدل",
  "اللطيف",
  "الخبير",
  "الحليم",
  "العظيم",
  "الغفور",
  "الشكور",
  "العلي",
  "الكبير",
  "الحفيظ",
  "المقيت",
  "الحسيب",
  "الجليل",
  "الكريم",
  "الرقيب",
  "المجيب",
  "الواسع",
  "الحكيم",
  "الودود",
  "المجيد",
  "الباعث",
  "الشهيد",
  "الحق",
  "الوكيل",
  "القوي",
  "المتين",
  "الولي",
  "الحميد",
  "المحصي",
  "المبدئ",
  "المعيد",
  "المحيي",
  "المميت",
  "الحي",
  "القيوم",
  "الواجد",
  "الماجد",
  "الواحد",
  "الاحد",
  "الصمد",
  "القادر",
  "المقتدر",
  "المقدم",
  "المؤخر",
  "الأول",
  "الآخر",
  "الظاهر",
  "الباطن",
  "الوالي",
  "المتعالي",
  "البر",
  "التواب",
  "المنتقم",
  "العفو",
  "الرؤوف",
  "مالك الملك",
  "ذو الجلال و الإكرام",
  "المقسط",
  "الجامع",
  "الغني",
  "المغني",
  "المانع",
  "الضآر",
  "النافع",
  "النور",
  "الهادي",
  "البديع",
  "الباقي",
  "الوارث",
  "الرشيد",
  "الصبور",
];

document.querySelector("h1#great").innerHTML = greatwords[0];
if (document.querySelector("h1.big") !== null) {
  document.querySelector("h1.big").innerHTML = greatwords[0];
}

if (document.querySelector("h1.big") !== null) {
  document.querySelector("h1.big").innerHTML = greatwords[0];
}

const speedSpan = document.querySelector("span.btn"),
  speedOptions = document.querySelector("ul.options");
if (speedOptions !== null) {
  speedOptions.style.zIndex = "-1";

  speedOptions.querySelector(".slow").addEventListener("click", () => {
    clearInterval(interval);

    interval = setInterval(increment, 3000);
  });

  speedOptions.querySelector(".fast").addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(increment, 750);
  });

  speedOptions.querySelector(".reallyFast").addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(increment, 450);
  });

  speedOptions.querySelector(".normal").addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(increment, 1000);
  });

  speedSpan.onmouseover = () => {
    speedSpan.style.zIndex = "-1";
    speedOptions.style.zIndex = "1";
  };
}

interval = setInterval(increment, 1000);

let j = 0;
function increment() {
  j += 1;
  if (document.querySelector("h1.big") !== null) {
    document.querySelector("h1.big").style.fontSize = "5rem";
  }
  if (j >= 99) {
    j = 0;
  } else if (
    (j == 84 || j == 83) &&
    document.querySelector("h1.big") !== null
  ) {
    document.querySelector("h1.big").style.fontSize = "1.9rem";
  }

  var thegreatword = greatwords[j];
  document.querySelector("h1#great").innerHTML = thegreatword;
  if (document.querySelector("h1.big") !== null) {
    document.querySelector("h1.big").innerHTML = thegreatword;
  }
}

$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "All") {
      $(".post-box").show("1000");
    } else {
      $(".post-box")
        .not("." + value)
        .hide("1000");
      $(".post-box")
        .filter("." + value)
        .show("1000");
    }
  });
  $(".filter-item").click(function () {
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
  });
});
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});
