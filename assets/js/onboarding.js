// scrollar
var onboardingSteps = document.querySelector(".onboarding-scroll");
if(onboardingSteps !== null) {
  var trustPilotReviews = new Splide(onboardingSteps, {
    type   : 'loop',
    perPage: 1,
    arrows: true,
    pagination : true,
    drag: false,
  } );
  trustPilotReviews.mount();
}

// Slide mover
const SlideMover = () => {
    document.querySelector(".splide__arrow.splide__arrow--next").click()
}

// image picker
let userProfileSelector = document.querySelector(".user-photo-show");
if(userProfileSelector !== null) {
    userProfileSelector.addEventListener("click", ()=> {
        document.querySelector(".user-photo-selector").click()
    })
}

// image show
let userProfileURL = document.querySelector(".user-photo-selector");
if(userProfileURL !== null) {
    userProfileURL.addEventListener("change", (evt)=> {
        var tgt = evt.target || window.event.srcElement,
            files = tgt.files;

        // FileReader support
        if (FileReader && files && files.length) {
            var fr = new FileReader();
            fr.onload = function () {
                document.querySelector(".user-photo-show").querySelector("img").src = fr.result;
                document.querySelector(".user-photo-full").src = fr.result;
            }
            fr.readAsDataURL(files[0]);
        }
        
        // Not supported
        else {
            console.log("format not support");
        }
    })
}

// user name
let userName = document.getElementById("userNameInput");
if(userName !== null) {
    userName.addEventListener("keyup", (input)=> {
        let inputValueShow = document.getElementById("userNameInputShow");
        let whyYouHereShow = document.getElementById("whyYouHereShow");
        if(input.target.value.trim() != ""){
            whyYouHereShow.classList.remove("rs-hide");
            inputValueShow.classList.remove("rs-capsule");
            inputValueShow.classList.add("rs-name");
            inputValueShow.textContent = input.target.value;
        }
        else{
            if(inputValueShow.classList.contains("rs-name")){
                whyYouHereShow.classList.add("rs-hide");
                inputValueShow.classList.remove("rs-name");
                inputValueShow.classList.add("rs-capsule");
                inputValueShow.textContent = input.target.value;
            }
        }
    })
}


// how will you use
const RadioButtonChecked = (ele) => {
    let whyYouHereShow = document.getElementById("whyYouHereShow");
    if(ele.value.trim() != ""){
        whyYouHereShow.classList.add("rs-reason-for-use");
        whyYouHereShow.classList.remove("rs-capsule");
        whyYouHereShow.textContent = ele.value;
        // if(whyYouHereShow.classList.contains("rs-reason-for-use")) {
        //     whyYouHereShow.classList.remove("rs-reason-for-use");
        //     whyYouHereShow.classList.add("rs-capsule");
        //     whyYouHereShow.textContent = ele.value;
        // }
        // else{
        //     whyYouHereShow.classList.add("rs-reason-for-use");
        //     whyYouHereShow.classList.remove("rs-capsule");
        //     whyYouHereShow.textContent = ele.value;
        // }
    }
}


const DashBoardRedirection = () => {
    window.location.pathname = 'dissertation/workspace.html'
}
