//your code here

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    this.classList.add("was-validated");
});
