const images = document.querySelectorAll(".image");
const Nextbtn = document.querySelector(".next");
const Prevbtn = document.querySelector(".prev");

let currentIndex = 0;

// function definitions
function handleNextBtnClick() {
	// increase the currentIndex by 1
	currentIndex = currentIndex + 1;
	if (currentIndex >= images.length) currentIndex = 0;

	// obtain the active image
	let currentImage = images[currentIndex];
	let prevImage;
	if (currentIndex === 0) {
		prevImage = images[images.length - 1];
	} else {
		prevImage = images[currentIndex - 1];
	}

	// add the desired class name to the current image
	currentImage.classList.add("current-img");
	// remove the desired class
	prevImage.classList.remove("current-img");
	// console.log(currentIndex);
	console.log(prevImage);
}

function handlePrevBtnClick() {
	// decrease the currentIndex by 1
	currentIndex = currentIndex - 1;
	if (currentIndex < 0) currentIndex = images.length - 1;

	// obtain the active image
	let currentImage = images[currentIndex];
	let prevImage;
	if (currentIndex === images.length - 1) {
		prevImage = images[0];
	} else {
		prevImage = images[currentIndex + 1];
	}
	// add the desired class name to the current image
	currentImage.classList.add("current-img");
	// remove the desired class
	prevImage.classList.remove("current-img");
	// console.log(currentIndex);
	console.log(prevImage);
}

Nextbtn.addEventListener("click", handleNextBtnClick);
Prevbtn.addEventListener("click", handlePrevBtnClick);
