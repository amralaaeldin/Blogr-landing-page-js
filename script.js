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
  if (e.target.classList.contains('head') || e.target.parentElement.classList.contains('head')) {
    headEle.forEach((ele) => {
      if ((e.target.nodeName.toLowerCase() !== 'img' && ele !== e.target) || (e.target.nodeName.toLowerCase() === 'img' && ele !== e.target.parentElement)) {
        ele.classList.remove("active")
      }
    });
    if (e.target.nodeName.toLowerCase() === 'img') return e.target.parentElement.classList.toggle("active");
    e.target.classList.toggle("active");
  }
})

// mobile
// rest is close when outside
// search in classlist array or string about the class name
// make closing [not sure]
openIcon.addEventListener("click", () => {
  if (header.className != "active" && nav.className != "active") {
    header.classList.add("active");
    nav.classList.add("active");
  }
});

headEle.forEach((ele, index) => {
  ele.addEventListener("click", () => {
    // here
    if (
      header.className == "active" &&
      nav.className == "active" &&
      !groupEle[index].classList.contains("active")
    ) {
      groupEle.forEach((ele) => {
        ele.classList.remove("active");
      });
      groupEle[index].classList.add("active");
    } else if (
      header.className == "active" &&
      nav.className == "active" &&
      groupEle[index].classList.contains("active")
    ) {
      groupEle[index].classList.remove("active");
    }
  });
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
  if (header.className == "active" && nav.className == "active") {
    close();
  }
});

// close group when click outside (mobile)
nav.addEventListener("click", (e) => {
  if (e.target.tagName != "UL" && e.target.tagName != "LI") {
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
    e.target.tagName != "LI"
  ) {
    close();
  }
});

// close all when click outside (desktop)
document.addEventListener("click", (e) => {
  if (
    !e.target.classList.contains("group") &&
    !e.target.classList.contains("active")
  ) {
    // close all when click outside (desktop)
    headEle.forEach((ele) => {
      ele.classList.remove("active");
    });
  }
});
