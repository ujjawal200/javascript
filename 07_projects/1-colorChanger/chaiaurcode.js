const buttons = document.querySelectorAll(".button"); // class name
const body = document.querySelector("body"); // tag name

// button is a  nodelist as seen while console print of button we can use foreach
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    // if (e.target.id === "grey") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "white") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "blue") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "yellow") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "orange") {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === "purple") {
    //   body.style.backgroundColor = e.target.id;
    // }

    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "lavender":
        body.style.backgroundColor = e.target.id;
        break;

      case "blue":
        body.style.backgroundColor = e.target.id;
        break;

      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;

      case "orange":
        body.style.backgroundColor = e.target.id;
        break;

      case "purple":
        body.style.backgroundColor = e.target.id;
        break;

        default:
            body.style.backgroundColor = "white"
        break;
    }
  });
});
