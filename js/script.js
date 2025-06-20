const myName = "Ojwengle";
console.log(myName);
const h1 = document.querySelector(".heading-primary");
console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "blue";
//   h1.style.padding = "5rem";
// });

//Setting current year
const currentYear = new Date().getFullYear();
const year = document.querySelector(".year");
year.textContent = currentYear;
// document.querySelector(".year").textContent = new Date().getFullYear();

//Making mobile navigation work.
const buttonNavigation = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

buttonNavigation.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//////////////////////////////////
//smooth scrolling animation for safari browser compatibility
const allLinks = document.querySelectorAll("a:link"); //selects anchor elements with links
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    const href = link.getAttribute("href");

    //Scroll back to the top
    if (href === "#") {
      event.preventDefault(); //prevents default page action behavior
      window.scrollTo({
        top: 0, //scroll to works with specific pixel number(0 pixels in this case)
        behavior: "smooth",
      });
    }

    //Scroll to specific section
    if (href !== "#" && href.startsWith("#")) {
      event.preventDefault(); //prevents default page action behavior
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    } //scrollintoview involves defining a target element
    //In this case the element has been selected using its id

    //Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.remove("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////////
//Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHeroEl);

//////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
