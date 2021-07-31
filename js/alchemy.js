console.log("js loaded");

function emailTitle(name) {
    let guestName = document.getElementById('name');

    let nameText = guestName.value;

    let subjectLine = document.getElementById("subjectLine");

    let form = document.getElementById("form");

    subjectLine.value = `A new lead has been generated: ${nameText}`;

//    console.log(subjectLine)
    console.log(nameText)
}

function hasLoaded(img) {
  try {
    img.classList.add("loadedAnim");
    img.style.visibility = "visible"
  } catch (error) {
    hasLoaded(img);
  }
//    console.log(img);
}

function hideHolder() {

  try {
    let holder=document.getElementById("bannerHolder");
//    holder.style.paddingTop = "0px"
    console.log(holder);
  } catch (error) {
    hideHolder();
  }
    
}

/*
const images = document.getElementsByTagName("img");

for (const image of images) {
  if (!image.getAttribute('data-background-image')) {
    image.onload = function() {
      this.setAttribute('data-fully-loaded', true);
    };
  }
}
*/
