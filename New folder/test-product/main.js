//chat
// function registerEvent() {
//     const addProductBtn = document.getElementById("addProductBtn");
//     const removeAllBtn = document.getElementById("removeAllBtn");

//     addProductBtn.addEventListener("click", addNewProduct);
//     removeAllBtn.addEventListener("click", removeAllProduct);
// }

// function addNewProduct() {
//     const productNameInput = document.getElementById("productNameInput").value.trim();

//     if (productNameInput !== "") {
//         const productList = document.getElementById("product-list");
//         const productItem = document.createElement("div");
//         const productName = document.createElement("p");
//         const removeButton = document.createElement("button");

//         productItem.id = productNameInput;
//         productItem.classList.add("product-item");
//         productName.textContent = productNameInput;
//         removeButton.textContent = "Remove";

//         removeButton.addEventListener("click", function() {
//             removeProduct(productItem.id);
//         });

//         productItem.appendChild(productName);
//         productItem.appendChild(removeButton);
//         productList.appendChild(productItem);

//         document.getElementById("productNameInput").value = "";
//     }
// }

// function removeProduct(productId) {
//     const productToRemove = document.getElementById(productId);
//     productToRemove.remove();
// }

// function removeAllProduct() {
//     const productList = document.getElementById("product-list");
//     productList.innerHTML = "";
// }

// registerEvent();

//kong
function addNewProduct() {
    const boxInput = document.getElementById('product-input').value.trim()
    const acessPl = document.getElementById('product-list')
    ///
    const createDiv = document.createElement('div')
    createDiv.setAttribute('id', boxInput)
    createDiv.setAttribute('class', 'product-item')
    ///
    const createP = document.createElement('p')
    createP.textContent = boxInput
    ///
    const createButton = document.createElement('button')
    createButton.setAttribute('id',boxInput)
    createButton.setAttribute('class','deleteOne')
    createButton.textContent = 'Delete'
    ////
    acessPl.appendChild(createDiv)
    createDiv.appendChild(createP)
    createDiv.appendChild(createButton)
    ///
    const addRemove = document.getElementById(boxInput)
    addRemove.addEventListener('click', () => {
        removeProduct(boxInput)
    })

}


function removeProduct(productId) {
    const acessDivpdl = document.getElementById('product-list')
    const acessDivForDelete = document.getElementById(productId)
    acessDivpdl.removeChild(acessDivForDelete)

}


function removeAllProduct() {
    const divProductlist = document.getElementById('product-list')
    divProductlist.textContent = ''

}

function registerEvent() {
    const addButton = document.getElementById('add-button')
    addButton.addEventListener('click', addNewProduct)
    const addRemoveAll = document.getElementById('removeAll-button')
    addRemoveAll.addEventListener('click', removeAllProduct)
}

registerEvent()