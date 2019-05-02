const getEntries = () => {
  return fetch("http://localhost:8088/journalEntries") // Fetch from the API
    .then(entries => entries.json()) // Parse as JSON
};

const saveNewEntry = newEntry => {
  return fetch("http://localhost:8088/journalEntries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newEntry)
  }).then(response => response.json());
};

