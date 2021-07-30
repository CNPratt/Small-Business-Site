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
  try{
        img.classList.add("loadedAnim");
      img.style.visibility = "visible"
  } catch{hasLoaded(img)};

//    console.log(img);
}

function hideHolder(img) {
  try{
    let holder=document.getElementById("bannerHolder");
    holder.style.paddingTop = "0px"
    hasLoaded(img);
    console.log(holder);
  } catch{hideHolder(img)}
    
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
