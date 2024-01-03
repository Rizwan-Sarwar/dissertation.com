// sidebar toggle
const sidebarToggle = () => {
  if(document.querySelector(".responsive-header").classList.contains("toggle")) {
    document.querySelector(".responsive-header").classList.remove("toggle");
    document.querySelector(".dark-shade").classList.remove("toggle");
  }
  else {
    document.querySelector(".responsive-header").classList.add("toggle");
    document.querySelector(".dark-shade").classList.add("toggle");
  }
}


// type writer effect
var BannerTypeWriter = document.getElementById('typeWriterEffect');
if (BannerTypeWriter !== null) {
  var typewriter = new Typewriter(BannerTypeWriter, {
    loop: true,
    delay: 75,
  });
  typewriter
    .pauseFor(2500)
    .typeString('A simple yet powerful native javascript')
    .pauseFor(300)
    .deleteChars(10)
    .typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
    .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
    .pauseFor(1000)
    .start();
}
// document.addEventListener('DOMContentLoaded', function () {})

// splide carousel
let universityAutoPlayCarousel = document.querySelector(".splide__scroll__ltr");
  if(universityAutoPlayCarousel !== null) {
    var SplideScrollLtr = new Splide(universityAutoPlayCarousel, {
      type   : 'loop',
      drag: 'free',
      perPage: 6,
      arrows: false,
      pagination: false,
      autoScroll: {
          speed: 1,
      },
      breakpoints: {
        1366: {
          perPage: 5,
        },
        1024: {
          perPage: 4,
        },
        768: {
          perPage: 3,
        },
        568: {
          perPage: 2,
        },
      }
  } );
  SplideScrollLtr.mount(window.splide.Extensions);
  }

var trustPilotReviewsCarousel = document.querySelector(".trustpilot__reviews");
if(trustPilotReviewsCarousel !== null) {
  var trustPilotReviews = new Splide(trustPilotReviewsCarousel, {
    type   : 'loop',
    // drag: 'free',
    perPage: 3,
    arrows: true,
    pagination : false,
    // arrowPath: 'M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z',
    // autoScroll: {
    //     speed: 1,
    // },
    breakpoints: {
      1024: {
        perPage: 2,
      },
      568: {
        perPage: 1,
      },
    }
  } );
  trustPilotReviews.mount();
}