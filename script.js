//your JS code here. If required.
let option=document.getElementById("colorSelect");
let btn = document.querySelector("input");

btn.addEventListener("click", () => {
    const selectedValue = option.value;   
    const selectedOption = option.options[option.selectedIndex]; // <option> element

    // Hide the selected option
    if (selectedValue !== "") {
        selectedOption.style.display = "none";
        option.selectedIndex = 0; // reset dropdown to default
    }
});