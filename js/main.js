var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get number of slides
var slideCounts = sliderImages.length

//Set current index
var currentSlide = 1

// slide number element
var slidNumberElement = document.getElementById('slide-number')

// next and previous buttons
var prevButton = document.getElementById('prev')
var nextButton = document.getElementById('next')

//handel next and prev Button
nextButton.onclick = slideNext;
prevButton.onclick = slidePrev;

// create ul element 
var paginationElement = document.createElement('ul')

//set id on ul element
paginationElement.setAttribute('id','pagination-ul')

// create list item based on slide count
for (let i = 1; i <= slideCounts; i++) {
    
    //create li
    paginationItem = document.createElement('li') 

    //set id on ul element
    paginationItem.setAttribute('data-index', i)

    //set item content
    paginationItem.appendChild(document.createTextNode(i))

    // append items to ul list
    paginationElement.appendChild(paginationItem)
}

// add the created ul element to the page
document.getElementById('indicators').appendChild(paginationElement)

// Get the new created ul
var paginationCreatedUl = document.getElementById('pagination-ul')

//Get pagination item
var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// loop through all bullets items
for(var i = 0 ; i < paginationBullets.length ; i++){
    paginationBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'))
        theChecker();
    }
}

//trigger the checker function
theChecker();

// next slide function
function slideNext(){
  if (nextButton.classList.contains('disabled')) {
    return false
  } else {
    currentSlide++
    theChecker();
  }
}

// previous slide function
function slidePrev(){
    if (prevButton.classList.contains('disabled')) {
        return false
      } else {
        currentSlide--
        theChecker();
      }
}

// Function Checker
function theChecker(){
    // set the slide number
    slidNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slideCounts)

    removeAllActive()
    
    // set active class on current slide
    sliderImages[currentSlide - 1].classList.add('active')

    // set active class on current pagination item
    paginationCreatedUl.children[currentSlide - 1 ].classList.add('active')

    // check if the current slide is the first
    if (currentSlide == 1) {
        // add disabled class to previous button
        prevButton.classList.add('disabled');
    }else{
        // remove disabled class to previous button
        prevButton.classList.remove('disabled');
    }

    // check if the current slide is the last
    if (currentSlide == slideCounts ) {
        // add disabled class to previous button
        nextButton.classList.add('disabled');
    }else{
        // remove disabled class to previous button
        nextButton.classList.remove('disabled');
    }
}

// remove all active class 
function removeAllActive(){

    // loop through images
    sliderImages.forEach(function (img){
        img.classList.remove('active')
    })

    //loop through pagination bullets
    paginationBullets.forEach(function (bullet){
        bullet.classList.remove('active')
    })
}