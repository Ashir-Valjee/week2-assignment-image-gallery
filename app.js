// we are going to create a place to store our images in here

let images = [
  {
    src: "./assets/image1.avif",
    alt: `image of a galaxy`,
  },
  {
    src: "./assets/image2.avif",
    alt: `image of a sattelite`,
  },
  {
    src: "./assets/image3.webp",
    alt: `image of a poker table`,
  },
  {
    src: "./assets/image4.avif",
    alt: `image of a pair of dice on a table`,
  },
  {
    src: "./assets/image5.avif",
    alt: `image of a labrador dog`,
  },
  {
    src: "./assets/image6.avif",
    alt: `image of a small white dog`,
  },
  {
    src: "./assets/image7.avif",
    alt: `image of  the northern lights`,
  },
  {
    src: "./assets/image8.avif",
    alt: `image of a large crater`,
  },
  {
    src: "./assets/image9.avif",
    alt: `image of a rocket launch at night`,
  },
];
// found this index adding code online. is there a better way to do this?
// https://www.freecodecamp.org/news/javascript-map-how-to-use-the-js-map-function-array-method/#:~:text=The%20syntax%20for%20the%20map,whole%20array%20object%20to%20it.
const imagesWithIndex = images.map((image, index) => {
  return { ...image, index: index };
});

//STEP1: select the DOM element that will contain my images
// select thumbnail container and
// select main image container
let thumbnailContainer = document.getElementById(`thumbnail-container`);
let mainContainer = document.getElementById(`main-container`);

let imageInit = document.createElement(`img`);
imageInit.setAttribute(`src`, imagesWithIndex[0].src);
imageInit.setAttribute(`alt`, imagesWithIndex[0].alt);
imageInit.classList.add(`current-large-image`);
mainContainer.append(imageInit);

let currentAlt = `desc1`;
let currentIndex = 0;
// let currentIndex2 = images.findIndex((image) => image.alt == `desc4`);
let newIndex = 0;
currentImage = mainContainer.querySelector(`img`);
currentAlt = currentImage.alt;
currentIndex = images.findIndex((image) => image.alt === currentAlt);

// create button that hides/shows thumbnail container
hideButton = document.getElementById(`thumbnail-visibility-button`);
function hideThumbnails() {
  if (thumbnailContainer.style.display === `none`) {
    hideButton.innerHTML = `X`;
    thumbnailContainer.style.display = `flex`;
  } else {
    hideButton.innerHTML = `O`;
    thumbnailContainer.style.display = `none`;
  }
}

hideButton.addEventListener("click", function () {
  hideThumbnails();
});

// STEP2: write a function to create the images in our thumbnail

function createThumbnails() {
  // we need a loop to run through the array of images and create an instance of each of them
  for (let i = 0; i < images.length; i++) {
    //a document method to create a DOM element to contain my image information (<img>)
    let thumbnailImage = document.createElement(`img`);

    // assign a value to the image attribute (src,alt,width,height)
    thumbnailImage.setAttribute(`src`, imagesWithIndex[i].src);
    thumbnailImage.setAttribute(`alt`, imagesWithIndex[i].alt);
    thumbnailImage.setAttribute(`width`, imagesWithIndex[i].width);
    thumbnailImage.setAttribute(`height`, imagesWithIndex[i].height);

    //eg img.src="value"
    // optional you can also give each img a class name
    thumbnailImage.classList.add(`thumbnail-image`);
    // append the new images to teh DOM container we selected in step 1
    thumbnailContainer.appendChild(thumbnailImage);

    // createLargeImage(thumbnail[index]);
    // add an event listener to each image, so when user clicks the big image shows on the screen
    //  when user clicks image we are going to call the function that creates the big image
    // thumbnail.addEventListener("click", event handler)
    thumbnailImage.addEventListener("click", function () {
      createLargeImage(imagesWithIndex[i]);
      currentIndex = imagesWithIndex[i].index;
    });
  }
}

createThumbnails();

// STEP3: we need to wrtie a function to create the big image
function createLargeImage(largeImage) {
  // you will find a problem here as old imgs dont dissapear.
  // your images will keep adding one after the other
  // solution is set innerHTML =""
  // create an image element

  let currentLargeImage = document.createElement("img");
  // (optionsal) you could give this large image a classname
  // set src value
  currentLargeImage.setAttribute(`src`, largeImage.src);
  // set alt value, width height etc
  currentLargeImage.setAttribute(`alt`, largeImage.alt);
  currentLargeImage.classList.add(`current-large-image`);
  // apend large image to DOM
  mainContainer.innerHTML = ``;
  mainContainer.append(currentLargeImage);
  document.getElementById("aria-announcer").textContent = largeimage.alt;
}

function selectNextImage() {
  currentImage = mainContainer.querySelector(`img`);
  currentAlt = currentImage.alt;
  // currentIndex = images.findIndex((image) => image.alt === currentAlt);
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
    console.log(currentIndex);
    createLargeImage(imagesWithIndex[currentIndex]);
  } else {
    currentIndex++;
    createLargeImage(imagesWithIndex[currentIndex]);
  }
}
function selectPreviousImage() {
  currentImage = mainContainer.querySelector(`img`);
  currentAlt = currentImage.alt;
  // currentIndex = images.findIndex((image) => image.alt === currentAlt);
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
    console.log(currentIndex);
    createLargeImage(imagesWithIndex[currentIndex]);
  } else {
    currentIndex--;
    createLargeImage(imagesWithIndex[currentIndex]);
  }
}

const nextButton = document.getElementById(`next-image`);

const previousButton = document.getElementById(`previous-image`);

nextButton.addEventListener("click", function () {
  selectNextImage();
});
previousButton.addEventListener("click", function () {
  selectPreviousImage();
});

// keyboard controls
window.addEventListener("keydown", arrowNavigation);

function arrowNavigation(keyPress) {
  if (keyPress.key === "ArrowRight") {
    selectNextImage();
  } else if (keyPress.key === "ArrowLeft") {
    selectPreviousImage();
  }
}

// ======================================================================================================
// Touch screen swipes for mobile
// code from https://stackoverflow.com/questions/62823062/adding-a-simple-left-right-swipe-gesture

let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

document.body.addEventListener(
  "touchstart",
  function (event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
  },
  false
);

document.body.addEventListener(
  "touchend",
  function (event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
  },
  false
);

function handleGesture() {
  if (touchendX < touchstartX) {
    selectNextImage();
    console.log("Swiped Left");
  }

  if (touchendX > touchstartX) {
    selectPreviousImage();
    console.log("Swiped Right");
  }
}
