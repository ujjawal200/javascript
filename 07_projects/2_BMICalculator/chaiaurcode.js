const form = document.querySelector("form");
// stopping the default behaviour of the form

// thos usecase will give you empty
//     const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value) / 100;
  const weight = parseInt(document.querySelector("#Weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  } else {
    const ans = (weight / height ** 2).toFixed(2);
    let comment = "";
    if (ans < 18.6) {
      comment = "under weight";
    } else if (ans >= 18.6 && ans <= 24.9) {
      comment = "Normal range";
    } else {
      comment = "OverWeight";
    }
    results.innerHTML = `<span>${ans} ${comment}</span>`;
  }
});
