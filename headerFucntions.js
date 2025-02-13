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
let zoomOutButton = document.querySelector(".zoomOutButton")
let columnState = 9;

let addButtonContinerElemnts = document.querySelectorAll(".addButtonContiner")
function toggleAddButton(buttonState) {
    addButtonContinerElemnts.forEach(addButton => {
        if (buttonState === "visible") {
            addButton.classList.remove("hidden")
        } else {
            addButton.classList.add("hidden")
        }

    })
}
let proudctImgs = document.querySelectorAll(".proudctImg");
let toggle100w = true;
function updateGrid(columnState, zoomState) {
    // setTimeout(() => {
    //     proudctsGridElemnt.classList.remove(`gridGap${columnState}`)
    // }, 200)

    if (zoomState === "in") {
        if (columnState === 9) {
            columnState = 6
        } else if (columnState === 6) {
            columnState = 3
            setTimeout(() => {
                toggleAddButton("visible")
            }, 400)
        } else if (columnState === 3) {
            zoomInButton.classList.add("hidden");
            columnState = 1
            toggle100w = false
        }
    } else {
        if (columnState === 6) {
            columnState = 9
            zoomOutButton.classList.add("hidden");
            listToggleElemnt.classList.remove("hidden");
        } else if (columnState === 3) {
            columnState = 6
            toggleAddButton("hidden")
        } else if (columnState === 1) {
            zoomInButton.classList.remove("hidden");
            columnState = 3
            toggle100w = true
        }
    }
    setTimeout(() => {
        if (toggle100w) {
            proudctImgs.forEach(proudctImg => {
                proudctImg.classList.remove("proudctImgGrid1")
            })
        } else {
            proudctImgs.forEach(proudctImg => {
                proudctImg.classList.add("proudctImgGrid1")
            })
        }
    }, 400)


    setTimeout(() => {
        proudctsGridElemnt.classList.add(`gridGap${columnState}`)
    }, 400)
    return columnState;
}
function zoomIn(columnState) {

    proudctsGridElemnt.classList.add("zoomIn");
    setTimeout(() => {
        proudctsGridElemnt.classList.remove("zoomIn");
        proudctsGridElemnt.classList.add("fadeIn", "show");
        setTimeout(() => {
            proudctsGridElemnt.classList.remove("fadeIn", "show");
        }, 800);
        proudctsGridElemnt.classList.remove(`gridGap${columnState}`)
    }, 400);

}

zoomInButton.addEventListener("click", () => {
    listToggleElemnt.classList.add("hidden");
    zoomOutButton.classList.remove("hidden");
    zoomIn(columnState)
    columnState = updateGrid(columnState, "in");
    setTimeout(() => {
        proudctsGridElemnt.style.gridTemplateColumns = `repeat(${columnState}, 1fr)`;
    }, 400);
});



function zoomOut(columnState) {
    proudctsGridElemnt.classList.add("zoomOut");
    setTimeout(() => {
        proudctsGridElemnt.classList.remove("zoomOut");
        proudctsGridElemnt.classList.add("fadeIn", "show");
        setTimeout(() => {
            proudctsGridElemnt.classList.remove("fadeIn", "show");
        }, 800);
        proudctsGridElemnt.classList.remove(`gridGap${columnState}`)
    }, 400);
}

zoomOutButton.innerText = "<"
zoomOutButton.addEventListener("click", () => {
    zoomOut(columnState)
    columnState = updateGrid(columnState, "out");
    setTimeout(() => {
        proudctsGridElemnt.style.gridTemplateColumns = `repeat(${columnState}, 1fr)`;
    }, 400);
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

