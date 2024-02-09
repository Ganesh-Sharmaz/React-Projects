document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('myForm');

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);
        console.log(formObj);
    });
});