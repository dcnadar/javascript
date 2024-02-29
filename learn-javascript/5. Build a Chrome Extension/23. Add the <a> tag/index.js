let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // Wrap the lead in an anchor tag (<a>) inside the <li>
        // ulEl.innerHTML += "<li>" + "<a href='new.html>" + myLeads[i] + "</a>" + "</li>"
        // Can you make the link open in a new tab?
        // listItems += "<li>" + myLeads[i] + "</li>"
        listItems += "<a href='new.html'>" + "<li>" + myLeads[i] + "</li>" + "</a>"
        listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>"
    }
    ulEl.innerHTML = listItems
}