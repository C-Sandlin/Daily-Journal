const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", e => {
  const captureDate = document.querySelector("#journalDate").value;
  const captureConcepts = document.querySelector("#conceptsCovered").value;
  const captureText = document.querySelector("#textField").value;
  const captureMood = document.querySelector("#journalMood").value;

  console.log(captureDate, captureConcepts, captureMood, captureText);

  const newEntry = {
    dateOfEntry: captureDate,
    conceptsCovered: captureConcepts,
    textField: captureText,
    moodOfTheDay: captureMood
  };

  saveNewEntry(newEntry).then(parsedResult => {
    console.log("what is the new item", parsedResult);
  });

  getEntries();
});

const saveNewEntry = newEntry => {
  return fetch("http://localhost:8088/journalEntries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newEntry)
  }).then(response => response.json());
};

//need new fetch call to load all entries on page after new entry is saved
