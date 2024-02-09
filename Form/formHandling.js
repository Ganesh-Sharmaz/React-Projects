let form = document.getElementById('myForm');

form.addEventListener("submit", function(e) {

    e.preventDefault();
    let formData = new FormData(e.target);
    let formObj = Object.fromEntries(formData)
    console.log(formObj)

})