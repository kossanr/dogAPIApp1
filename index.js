function getImage() {
  let qty = Number($(".qty").val());
  if (qty <= 50) {
    fetch("https://dog.ceo/api/breeds/image/random/" + qty)
      .then((response) => response.json())
      .then((responseJson) => console.log(responseJson))
      .catch((error) => alert("Oops! Try again!"));
  } else {
    alert("Cannot be more than 50");
  }
}

function watchForInput() {
  console.log("watching for input");
  $("form").submit((event) => {
    event.preventDefault();
    console.log("form submitted");

    getImage();
  });
}

function appLoaded() {
  console.log("App loaded, waiting for submit!"); // message to be printed when app initially loads
  watchForInput();
}

$(appLoaded);

//Create an app that lets users choose to display between 1 and 50 random dog images, then prints the results to the console. The app should feature a form with a required input where users indicate the number of images to retrieve, and the input should default to 3.

//Building on the previous app, create an app that lets users choose to display between 1 and 50 random dog images, then loads the images in the DOM. This app should adhere to all of the requirements from the first one, in addition to displaying the images in the DOM.

//Create an app that loads a single random image for a specific breed, based on a user input. This app should account for the happy case when the breed is found, as well as the unhappy case when it is not.
