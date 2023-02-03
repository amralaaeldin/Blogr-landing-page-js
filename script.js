const headEle = [...document.querySelectorAll("header .container nav ul .head")];
const nav = document.querySelector("header .container nav");
const header = document.querySelector("header");
const groupEle = [...document.querySelectorAll("header .container nav ul .head .group")];
const openIcon = document.querySelector(".list-open");
const closeIcon = document.querySelector(".list-close");

// make sections responsive to images
const imgBox = document.querySelectorAll(".img-desktop");
const section = document.querySelectorAll(
  "section:nth-of-type(1),section:nth-of-type(3)"
);

for (let i = 0; i < imgBox.length; i++) {
  if (section[i].offsetHeight < imgBox[i].offsetHeight) {
    let height = imgBox[i].offsetHeight;
    section[i].style.height = height + "px";
  }
}

// desktop
nav.addEventListener('click', (e) => {
  if (e.target.classList.contains('head') ||
    e.target.parentElement.classList.contains('head')) {
    headEle.forEach((ele) => {
      if ((e.target.nodeName.toLowerCase() !== 'img' && ele !== e.target) ||
        (e.target.nodeName.toLowerCase() === 'img' && ele !== e.target.parentElement)) {
        ele.classList.remove("active")
      }
    });
    if (e.target.nodeName.toLowerCase() === 'img')
      return e.target.parentElement.classList.toggle("active");
    e.target.classList.toggle("active");
  }
})

// close all when click outside (desktop)
document.addEventListener("click", (e) => {
  if (
    !e.target.classList.contains("group") &&
    !e.target.classList.contains("active") &&
    !e.target.classList.contains("arrow-light") &&
    !e.target.classList.contains("arrow-dark") &&
    e.target.tagName != "LI" &&
    e.target.tagName != "UL"
  ) {
    headEle.forEach((ele) => {
      ele.classList.remove("active");
    });
  }
});

// mobile
openIcon.addEventListener("click", () => {
  if (header.className != "active" && nav.className != "active") {
    header.classList.add("active");
    nav.classList.add("active");
  }
});

function close() {
  header.classList.remove("active");
  nav.classList.remove("active");
  headEle.forEach((ele) => {
    ele.classList.remove("active");
  });
  groupEle.forEach((ele) => {
    ele.classList.remove("active");
  });
}

closeIcon.addEventListener("click", () => {
  if (header.classList.contains("active") && nav.classList.contains("active")) {
    close();
  }
});

nav.addEventListener('click', (e) => {
  if (e.target.classList.contains('head') || e.target.parentElement.classList.contains('head')) {
    if (header.className == "active" && nav.className == "active") {
      groupEle.forEach((ele) => {
        if ((e.target.nodeName.toLowerCase() !== 'img' && ele !== e.target.querySelector('.group')) ||
          (e.target.nodeName.toLowerCase() === 'img' && ele !== e.target.parentElement.querySelector('.group')))
          ele.classList.remove("active");
        else ele.classList.toggle("active")
      });
    }
  }
})

// close group when click outside (mobile)
nav.addEventListener("click", (e) => {
  if (e.target.tagName != "UL" &&
    e.target.tagName != "LI" &&
    !e.target.classList.contains("arrow-light") &&
    !e.target.classList.contains("arrow-dark")
  ) {
    headEle.forEach((ele) => {
      ele.classList.remove("active");
    });
    groupEle.forEach((ele) => {
      ele.classList.remove("active");
    });
  }
});

// close all when click outside (mobile)
document.addEventListener("click", (e) => {
  if (
    !e.target.classList.contains("group") &&
    !e.target.classList.contains("active") &&
    !e.target.classList.contains("list-open") &&
    !e.target.classList.contains("btns") &&
    !e.target.classList.contains("btn") &&
    !e.target.classList.contains("divider") &&
    !e.target.classList.contains("arrow-light") &&
    !e.target.classList.contains("arrow-dark") &&
    e.target.tagName != "LI"
  ) {
    close();
  }
});
