function createEntryFromStorage(entry) {
  const locaysh = document.querySelector("#publishedEntries");

  locaysh.innerHTML += `
      <div  id="entry-${entry.id}" class="past-entry">
          <h1 class="entry-number">Journal Entry ${entry.id}</h1>
          <h3 class="entry-date">${entry.dateOfEntry}</h3>
          <p class="entry-concepts">Concepts Covered: ${
            entry.conceptsCovered
          }</p>
          <p class="entry-textField">Notes: ${entry.textField}</p>
          <aside class="mood">I feel: ${entry.moodOfTheDay}</aside>
      </div>
      `;
}
