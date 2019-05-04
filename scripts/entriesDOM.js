function createEntryFromStorage(parsedEntries) {
  const locaysh = document.querySelector("#publishedEntries");
  parsedEntries.forEach(entry => {
    locaysh.innerHTML += `
    <div  id="entry--${entry.id}" class="past-entry">
      <div id="entry-text--${entry.id}">
        <h3 class="entry-number">Journal Entry ${entry.id}</h3>
        <h5 class="entry-date">${entry.dateOfEntry}</h5>
        <aside class="mood">I feel: ${entry.moodOfTheDay}</aside>
        <p class="entry-concepts">Concepts Covered: <em>${
          entry.conceptsCovered
        }</em></p>
        <p class="entry-textField">Notes: <em>${entry.textField}</em></p>
        
      </div>
      <div id="entry-buttons--${entry.id}" class="button-container">
        <button class="edit" type="button" id="edit--${entry.id}">
          EDIT
        </button>
        <button class="delete" type="button" id="delete--${
          entry.id
        }">DELETE</button>
      </div>
    </div>
    `;
  });
}

function showFormIncomplete(location) {
  const alertHere = document.querySelector(`#${location}`);
  alertHere.innerHTML = `
  <p id="submit-warning">Please fill out all fields before submitting</p>`;
}

function showFormComplete(location) {
  const alertHere = document.querySelector(`#${location}`);
  alertHere.innerHTML = "";
}
