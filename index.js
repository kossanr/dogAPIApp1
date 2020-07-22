function getImage() {
  let qty = Number($(".qty").val());
  if (qty <= 50) {
    fetch("https://dog.ceo/api/breeds/image/random/" + qty) //fetch API write sJavaScript code that makes asynchronous requests using any of the HTTP methods. The URL is a single argument passsed to fetch
      .then((res) => res.json())
      .then((responseJson) => displayDogImage(responseJson.message))
      .catch((error) => alert("Oops! Try again!"));
  } else {
    alert("Cannot be more than 50");
  }
}

function watchForInput() {
  //telling jQuery to look out for submit events on the form element in the HTML
  console.log("watching for input");
  $("form").submit((event) => {
    event.preventDefault();
    console.log("form submitted");

    getImage();
  });
}

function displayDogImage(photos) {
  $(".results .images").html("");
  //display the results section
  $(".results").removeClass("hidden");

  for (let i = 0; i < photos.length; i++) {
    $(".results .images").append(
      //replace the existing dog image with the new one that’s generated when user clicks the button
      `<img src="${photos[i]}" class="dog-image">` //responseJson.message gives URL of new image
    );
  }
}

function appLoaded() {
  console.log("App loaded, waiting for submit!"); // message to be printed when app initially loads
  watchForInput();
}
//initial function that runs when the DOM is loaded
$(appLoaded);

//Create an app that lets users choose to display between 1 and 50 random dog images, then prints the results to the console. The app should feature a form with a required input where users indicate the number of images to retrieve, and the input should default to 3.

//Building on the previous app, create an app that lets users choose to display between 1 and 50 random dog images, then loads the images in the DOM. This app should adhere to all of the requirements from the first one, in addition to displaying the images in the DOM.
