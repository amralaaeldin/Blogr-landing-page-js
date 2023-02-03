const headEle = [...document.querySelectorAll("header .container nav ul .head")];
const nav = document.querySelector("header .container nav");
const header = document.querySelector("header");
const group = document.querySelectorAll(
  "header .container nav ul .head .group"
);
const groupEle = [...group];
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
// rest is close when outside
headEle.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (!ele.classList.contains("active")) {
      headEle.forEach((ele) => {
        ele.classList.remove("active");
      });
      ele.classList.add("active");
    } else if (ele.classList.contains("active")) {
      ele.classList.remove("active");
    }
  });
});

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
