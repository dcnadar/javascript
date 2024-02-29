let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const svEl = document.getElementById("save-el")

// Get the leads from the localStorage
// Store it in a variable, leadsFromLocalStorage

// localStorage.clear()
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// Log out the variable
svEl.addEventListener("click", function () {
    let listItems = JSON.stringify(leadsFromLocalStorage)
    for (let i = 0; i < localStorage.length; i++) {
        listItems += `
            <li>
                    ${listItems[i]}
            </li>
        `
        ulEl.innerHTML = listItems
    }
})


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()

    // To verify that it works:
    console.log(localStorage.getItem("myLeads"))
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}
