const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let current = 0;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove('active');
    });

    slides[index].classList.add('active');
}

nextBtn.addEventListener('click',()=>{

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);
});

prevBtn.addEventListener('click',()=>{

    current--;

    if(current < 0){
        current = slides.length - 1;
    }

    showSlide(current);
});

setInterval(()=>{

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);

},5000);
// Mobile Navigation
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Contact Form
const form = document.getElementById("enquiry-form");
const successMsg = document.getElementById("success-msg");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("f-name").value.trim();
    const phone = document.getElementById("f-phone").value.trim();

    if (!name || !phone) {
      alert("Please enter Name and Phone Number");
      return;
    }

    successMsg.style.display = "block";

    form.reset();

    setTimeout(() => {
      successMsg.style.display = "none";
    }, 5000);
  });
}

// Animated Counters
const counters = document.querySelectorAll(".stat-num");

const animateCounter = (counter) => {
  const target = parseInt(counter.innerText);

  if (isNaN(target)) return;

  let count = 0;

  const increment = target / 50;

  const update = () => {
    count += increment;

    if (count < target) {
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;

    }
  };

  update();
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
});

counters.forEach((counter) => {
  observer.observe(counter);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const projects = {

pump:[
"images/pump1.jpeg",
"images/pump2.jpeg",
"images/pump3.jpeg",
"images/pump4.jpeg"
],

electrical:[
"images/slides1.jpeg",
"images/slides2.jpeg",
"images/slides3.jpeg",
"images/slides4.jpeg"
],

pipeline:[
"images/pipe1.jpeg",
"images/pipe2.jpeg",
"images/pipe3.jpeg",
"images/pipe4.jpeg"
],

crane:[
"images/crane1.jpg",
"images/crane2.jpg",
"images/crane3.jpg"
],

spares:[
"images/spares1.jpeg",
"images/spares2.jpeg",
"images/spares3.jpeg",
"images/spares4.jpeg"
]

};

function showProject(project){

const gallery =
document.getElementById("galleryContainer");

gallery.innerHTML = "";

projects[project].forEach(img => {

gallery.innerHTML += `
<img src="${img}" alt="">
`;

});

}

showProject("pump");

const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    links.classList.toggle('active');
});
