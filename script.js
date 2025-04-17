const arr = [
  { id: "name", errorId: "error-name" },
  { id: "age", errorId: "error-age" },
  { id: "about", errorId: "error-about" },
  { id: "email", errorId: "error-email" },
  { id: "js", errorId: "error-js" },
  { id: "html", errorId: "error-html" },
  { id: "css", errorId: "error-css" }
];

const inps = document.querySelectorAll("input");

function updateCounter(successCount, errorCount) {
  const total = inps.length;
  const need = arr.length;
  document.getElementById("counter").textContent =
    "All: " + total + " | Need: " + need + " | Success: " + successCount + " | Error: " + errorCount;
}

document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let success = 0;
  let error = 0;

  arr.forEach(field => {
    const input = document.getElementById(field.id);
    const errorMeseg = document.getElementById(field.errorId);

    if (input.value.trim() === "") {
      input.parentElement.classList.add("error");
      errorMeseg.textContent = "Please enter your email address";
      error++;
    } else {
      input.parentElement.classList.remove("error");
      errorMeseg.textContent = "";
      success++;
    }
  });

  updateCounter(success, error);

  if (error === 0) {
    alert("Form submitted successfully!");
  }
});

// Initial counter setup
updateCounter(0, arr.length);
