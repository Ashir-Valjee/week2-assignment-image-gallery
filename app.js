console.log(`testing`);

// we are going to create a place to store our images in here

let images = [
  {
    src: `https://images.unsplash.com/photo-1455628508298-04cd1c1675f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGlnZW9ufGVufDB8fDB8fHwy `,
    alt: `a bunch of pigeons`,
    width: 300,
    height: 200,
  },
  {
    src: `https://images.unsplash.com/photo-1540382658444-5f53c7f12ac3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGlnZW9ufGVufDB8fDB8fHwy`,
    alt: `a bunch of pigeons`,
    width: 300,
    height: 200,
  },
];

// ======================
// !This is help for the arrowkeys stretch goal
// you need a global variable to keep track of the index value
// let currentIndex=0
// ======================================

//STEP1: select the DOM element that will contain my images
// select thumbnail container and
// select main image container

// STEP2: write a function to create the images in our thumbnail

function createThumbnails(theumbnailContainer) {
  // we need a loop to run through the array of images and create an instance of each of them
  theumbnailContainer.array.forEach(function (thumbnail, index) {
    //a document method to create a DOM element to contain my image information (<img>)
    // assign a value to the image attribute (src,alt,width,height)
    //eg img.src="value"
    // optional you can also give each img a class name
    // append the new images to teh DOM container we selected in step 1
    // add an event listener to each image, so when user clicks the big image shows on the screen
    // function eventHandler(){}
    //  when user clicks image we are going to call the function that creates the big image

    createLargeImage(thumbnail[index]);

    // thumbnail.addEventListener("click", event handler)
  });
}

// STEP3: we need to wrtie a function to create the big image
function createLargeImage(largeImage) {
  // you will find a problem here as old imgs dont dissapear.
  // your images will keep adding one after the other
  // solution is set innerHTML =""
  // create an image element
  // (optionsal) you could give this large image a classname
  // set src value
  // set alt value, width height etc
  // apend large image to DOM
}
