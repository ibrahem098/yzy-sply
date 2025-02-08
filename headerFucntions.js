// listToggle
let listToggleElemnt = document.querySelector(".listToggle");
let listItemsElemnt = document.querySelector(".listItems")
listToggleElemnt.addEventListener("click", () => {
    if (listToggleElemnt.innerText === "=") {
        listToggleElemnt.innerText = "<"
        zoomInButton.classList.add("hidden")
        listItemsElemnt.classList.remove("hidden")
    } else {
        listToggleElemnt.innerText = "="
        zoomInButton.classList.remove("hidden")
        listItemsElemnt.classList.add("hidden")
    }
})

// zoom in / out
let zoomInButton = document.querySelector(".zoom");
let zoomOutButton = document.querySelector(".zoomOut")
let columnState = 9;
function zoomIn() {
    columnState -= 3;
}
function zoomOut() {
    columnState += 3;
}
zoomInButton.addEventListener("click", () => {
    listToggleElemnt.classList.add("hidden");
    zoomOutButton.classList.remove("hidden");
    if (columnState === 9) {
        zoomIn()
    } else if (columnState === 6) {
        zoomIn()
    } else if (columnState === 3) {
        columnState = 1
        zoomInButton.classList.add("hidden");
    }
    proudctsGridElemnt.style.gridTemplateColumns = `repeat(${columnState}, 1fr)`;
});

zoomOutButton.innerText = "<"
zoomOutButton.addEventListener("click", () => {
    if (columnState === 6) {
        zoomOut()
        zoomOutButton.classList.add("hidden");
        listToggleElemnt.classList.remove("hidden");
    } else if (columnState === 3) {
        zoomOut()
    } else if (columnState === 1) {
        zoomInButton.classList.remove("hidden");
        columnState = 3
    }
    proudctsGridElemnt.style.gridTemplateColumns = `repeat(${columnState}, 1fr)`;
})


// display Cart Toggle
let displayCart = false;
let cartToggleElemnt = document.querySelector(".cartToggle")
function updateHeader() {
    if (displayCart) {
        backArrowElemnt.classList.remove("hidden")
        zoomOutButton.classList.add("hidden")
        zoomInButton.classList.add("hidden")
        listToggleElemnt.classList.add("hidden")
    } else {
        backArrowElemnt.classList.add("hidden")
        zoomInButton.classList.remove("hidden")
        listToggleElemnt.classList.remove("hidden")
        if (columnState < 9) {
            zoomOutButton.classList.remove("hidden")
            listToggleElemnt.classList.add("hidden")
        }
    }
}

// cartToggle
cartToggleElemnt.addEventListener("click", () => {
    if (displayCart) {
        displayCart = false;
    } else {
        displayCart = true;
    }
    updatePage()
})
// back arrow 
let backArrowElemnt = document.querySelector(".backArrow")
backArrowElemnt.innerText = "<"
backArrowElemnt.addEventListener("click", () => {
    displayCart = false
    backArrowElemnt.classList.add("hidden")
    updatePage()
})

function updatePage() {
    if (displayCart) {
        cartContinerElemnt.classList.remove("hidden")
        proudctsGridElemnt.classList.add("hidden")
    } else {
        cartContinerElemnt.classList.add("hidden")
        proudctsGridElemnt.classList.remove("hidden")
    }
    updateHeader()
}

