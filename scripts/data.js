function getEntries() {
  fetch("http://localhost:8088/journalEntries") // Fetch from the API
    .then(entries => entries.json()) // Parse as JSON
    .then(parsedEntries => {
      console.table(parsedEntries);

      parsedEntries.forEach(entry => {
        createEntryFromStorage(entry);
      });
    });
}
