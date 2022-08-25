function getINputValue(inputId) {
    const getInputId = document.getElementById(inputId);
    const inputValue = getInputId.value;
    getInputId.value = "";
    return inputValue;
}

function generateTable(tableValue1, tableValue2, tableValue3) {
    const row = document.createElement("tr");
    // const td1 = document.createElement("td");
    // const td2 = document.createElement("td");
    // const td3 = document.createElement("td");

    // td1.innerText = tableValue1;
    // td2.innerText = tableValue2;
    // td3.innerText = tableValue3;

    // row.appendChild(td1);
    // row.appendChild(td2);
    // row.appendChild(td3);
    row.innerHTML = `
       <td>${tableValue1}</td>
       <td>${tableValue2}</td>
       <td>${tableValue3}</td>

        `;

    document.getElementById("tr").appendChild(row);
}

document.getElementById("submit-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const fNameValue = getINputValue("first_name");
    const lNameValue = getINputValue("last_name");
    const ideaValue = getINputValue("idea");

    generateTable(fNameValue, lNameValue, ideaValue);
});
