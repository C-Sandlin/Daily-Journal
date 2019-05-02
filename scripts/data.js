const baseURL = "http://localhost:8088/";

const getEntries = () => {
  fetch(`${baseURL}journalEntries`) // Fetch from the API
    .then(entries => entries.json()) // Parse as JSON
    .then(parsedEntries => {
      parsedEntries.forEach(entry => {
        createEntryFromStorage(entry);
      });
    });
};

const saveNewEntry = newEntry => {
  return fetch(`${baseURL}journalEntries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newEntry)
  }).then(response => response.json());
};


