function getINputValue(inputId) {
    const getInputId = document.getElementById(inputId);
    const inputValue = getInputId.value;
    // getInputId.value = "";
    return inputValue;
}

function generateTable(tableValue1, tableValue2, tableValue3, tableValue4, tableValue5, tableValue6, tableValue7) {
    const row = document.createElement("tr");
    row.style.border = "1px solid white";
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
       <td>${tableValue4}</td>
       <td>${tableValue5}</td>
       <td>${tableValue6}</td>
       <td>${tableValue7}</td>

        `;
    const tableRow = document.getElementById("tr");
    tableRow.appendChild(row);
}

document.getElementById("submit-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const nameValue = getINputValue("name-field");
    const departmentValue = getINputValue("department-field");
    const batchValue = getINputValue("batch-field");
    const phoneValue = getINputValue("phone-field");
    const projectTitleValue = getINputValue("project-title-field");
    const technicalValue = getINputValue("technical-field");
    const ideaTextValue = getINputValue("idea-text-field");

    generateTable(nameValue, departmentValue, batchValue, phoneValue, projectTitleValue, technicalValue, ideaTextValue);
});
