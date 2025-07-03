let TestLeftBox = document.querySelector(".test-box-left");
let TestCenterBox = document.querySelector(".test-box-center");
let TestRightBox = document.querySelector(".test-box-right");
let test_icon = document.querySelectorAll(".test-icon i");
let test_arrow_icon = document.querySelectorAll(
  ".ri-arrow-left-line,.ri-arrow-right-line"
);
let options = document.querySelector(".options");
//testimonial
let currentIndex = 0;
let intervalId;

//services start
let card = document.querySelectorAll(".card-part1");
// console.log(card);
card.forEach((c, id) => {
  c.addEventListener("click", (i) => {
    if (
      i.target.classList.contains("ri-arrow-right-up-line") ||
      i.target.tagName === "P"
    ) {
    }
  });
});

//services end
console.log(option_data);
//option
option_data.forEach((data, index) => {
  // Create elements
  let option_box = document.createElement("div");
  let top_box = document.createElement("div");
  let left = document.createElement("div");
  let serialNumber = document.createElement("h1");
  let heading3 = document.createElement("h5");
  let icon = document.createElement("i");
  let hidden_content = document.createElement("div");
  let paragraph = document.createElement("p");

  // Set attributes and content
  option_box.classList.add("option-box");
  top_box.classList.add("top-box");
  left.classList.add("left");
  serialNumber.innerText = data.serialNo;
  heading3.innerText = data.h5;
  icon.classList.add("ri-add-line");
  hidden_content.classList.add("option-hidden-content");
  hidden_content.style.display = "none";
  hidden_content.innerText = data.p;

  // Build the DOM structure
  left.appendChild(serialNumber);
  left.appendChild(heading3);
  top_box.appendChild(left);
  top_box.appendChild(icon);
  option_box.appendChild(top_box);
  option_box.appendChild(hidden_content);

  // Append to options container
  options.appendChild(option_box);

  // Add click event
  icon.addEventListener("click", (e) => {
    if (hidden_content.style.display === "block") {
      hidden_content.style.display = "none";
      e.target.style.rotate = "0deg";
    } else {
      document.querySelectorAll(".option-hidden-content").forEach((content) => {
        content.style.display = "none";
      });
      document.querySelectorAll(".ri-add-line").forEach((i) => {
        i.style.rotate = "0deg";
      });

      // Show the clicked icon's content and rotate the icon
      hidden_content.style.display = "block";
      e.target.style.rotate = "45deg";
      e.target.style.transition = "all ease 0.3s";
    }
  });
});

//testimonials
function updateBox(selector, { p, n, d }) {
  document.querySelector(`${selector} p`).innerText = p;
  document.querySelector(`${selector} .about h3`).innerText = n;
  document.querySelector(`${selector} .about p`).innerText = d;
}

function changeTestmonial(index) {
  const nextIndex = (index + 1) % testimonial.length;
  const prevIndex = (index - 1 + testimonial.length) % testimonial.length;

  // Update Center, Left, and Right Boxes
  updateBox(".test-box-center", testimonial[index]);
  updateBox(".test-box-left", testimonial[prevIndex]);
  updateBox(".test-box-right", testimonial[nextIndex]);

  // Update testimonial icons
  test_icon.forEach((icon) => (icon.style.color = "white"));
  test_icon[index].style.color = "#48b760";

  // GSAP Animations
  gsap.from(".test-box-center", {
    scale: 0.8,
    duration: 3,
    ease: "power4.out",
    stagger: 0.2,
  });

  gsap.from([".test-box-left", ".test-box-right"], {
    scale: 1.5,
    duration: 2,
    ease: "power4.out",
    stagger: 0.2,
  });
}

function autoChangeTestimonial() {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonial.length;
    changeTestmonial(currentIndex);
  }, 2000);
}

// stop auto change when hover on specific quote
TestCenterBox.addEventListener("mouseenter", () => {
  clearInterval(intervalId);
});
TestCenterBox.addEventListener("mouseleave", autoChangeTestimonial);

// arrow click features
test_arrow_icon.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    clearInterval(intervalId);
    if (arrow.className === "ri-arrow-left-line") {
      currentIndex =
        (currentIndex - 1 + testimonial.length) % testimonial.length;
    } else {
      clearInterval(intervalId);
      currentIndex = (currentIndex + 1) % testimonial.length;
    }
    changeTestmonial(currentIndex);
  });
});
autoChangeTestimonial();
//testimonial end
//contact us code start
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwi2Up82QFn00FvdLRQoT1HaEWkGocV2-avc2jtVwhz2JJ2We-sz2YE1vZX0FW6ra0/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
  form.reset();
});
//contact us code end
//service icon click action start
let serIcon = document.querySelectorAll(".card p");
let popupCont = document.querySelector(".popup");
let popupIcon = document.querySelector(".popup i");
let popupH = document.querySelector(".popup .para h2");
let popupP = document.querySelector(".popup .para p");

console.log(serIcon);
serIcon.forEach((icon, index) => {
  icon.addEventListener("click", (e) => {
    console.log(e, index);
    popupCont.style.display = "block";
    popupH.innerText = `${popupData[index].h2}`;
    popupP.innerText = `${popupData[index].p}`;

    gsap.from(".popup", {
      top: 0,
      opacity: 0,
      duration: 0.5,
      delay: 0.2,
    });
  });
});
function popupIconClose() {
  popupCont.style.display = "none";
}
//service icon click action end

// progressBAr start
// let fill = document.querySelector(".fill");
// console.log(fill);
// function fillUpdate() {
//   fill.style.width = `${
//     (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
//   }%`;
//   requestAnimationFrame(fillUpdate);
// }
// fillUpdate();
// progressBAr end

//Animation GSAP Start

function page1Animation() {
  var tl = gsap.timeline();
  tl.from("nav h2, .list a", {
    y: -30,
    duration: 0.6,
    delay: 1,
    opacity: 0,
    stagger: 0.1,
  });
  tl.from(".part1 h1,.part1 p", {
    x: -300,
    duration: 0.5,
    opacity: 0,
    stagger: 0.1,
  });
  tl.from(".part1 button", {
    opacity: 0, // Starting opacity
    duration: 0.5,
  });
  tl.from(
    ".part2",
    {
      opacity: 0,
      duration: 1,
    },
    "-=0.5" //this is another method to applydelay
  );
  tl.from(".hero-footer img", {
    y: +10,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  });
}

function page2Animation() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".service",
      scroller: "body",
      // markers: true,
      // start: "top 65%",
      end: "top 0",
      scrub: 2,
    },
  });
  tl2.from(".service .service-header", {
    y: 30,
    opacity: 0,
  });
  tl2.from(
    ".card.left.card1",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim1"
  );
  tl2.from(
    ".card.blackCard.right.card2",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim1"
  );
  tl2.from(
    ".card.left.card3",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "anim2"
  );
  tl2.from(
    ".card.right.card4",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "anim2"
  );
}

function page4Animation() {
  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".options",
      scroller: "body",
      // markers: true,
      // start: "top 65%",
      // end: "top 0",
      scrub: 2,
    },
  });
  tl4.from(".options .option-box", {
    y: 20,
    opacity: 0,
  });
}
page1Animation();
page2Animation();
page4Animation();
//Animation GSAP End
