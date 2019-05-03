const baseURL = "http://localhost:8088/";

const getEntries = () => {
  return fetch(`${baseURL}journalEntries`) // Fetch from the API
    .then(entries => entries.json()); // Parse as JSON
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

const deleteOldEntry = entryId => {
  return fetch(`${baseURL}journalEntries/${entryId}`, {
    method: "DELETE"
  })
    .then(response => response.json())
    .then(parsedResults => {
      console.log("Did it work?");
    });
};

const editOldEntry = (entryId, entryObj) => {
  return fetch(`${baseURL}journalEntries/${entryId}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(entryObj)
  })
    .then(response => response.json())
    .then(parsedResult => {
      console.log("Updated Entry", parsedResult);
    });
};

const getSingleEntry = entryId => {
  return fetch(`${baseURL}journalEntries/${entryId}`) // Fetch from the API
    .then(entries => entries.json()); // Parse as JSON
};
