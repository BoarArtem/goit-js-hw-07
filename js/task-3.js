const addInput = document.querySelector("#name-input")
const addSpan = document.querySelector("#name-output")

addInput.addEventListener("input", (event) => {
    const targetValue = event.target.value.trim();

    addSpan.textContent = targetValue

    if(targetValue === "") {
        addSpan.textContent = "Anonymous";
    } else {
        addSpan.textContent = targetValue
    }
})
