// load entries on page load

function loadOnPage() {
  getEntries().then(parsedEntries => {
    createEntryFromStorage(parsedEntries);
  });
}

document.addEventListener("load", loadOnPage());


// locate and target submit button
const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", e => {
  //target each form field and grab the entered values
  const captureDate = document.querySelector("#journalDate").value;
  const captureConcepts = document.querySelector("#conceptsCovered").value;
  const captureText = document.querySelector("#textField").value;
  const captureMood = document.querySelector("#journalMood").value;

  if (
    captureDate === "" ||
    !captureConcepts ||
    !captureText ||
    captureMood === ""
  ) {
    alert("Please fill out all form fields before submitting.");
    /* insert code here and in HTML to show message in red */
  } else {
    //create new object from entry
    const newEntry = {
      dateOfEntry: captureDate,
      conceptsCovered: captureConcepts,
      textField: captureText,
      moodOfTheDay: captureMood
    };
    saveNewEntry(newEntry)
      .then(parsedResult => {
        document.querySelector("#mainForm").reset();
        document.querySelector("#publishedEntries").innerHTML = "";
        getEntries()
          .then(parsedEntries => {
            createEntryFromStorage(parsedEntries);
          });

      })
  }
})

const radioButtons = document.getElementsByName("moodButton");
radioButtons.forEach(button => {
  button.addEventListener("click", event => {
    let selectedMood = event.target.value;
    getFilteredEntries(selectedMood);
  })
})

const getFilteredEntries = (mood) => {
  document.querySelector("#publishedEntries").innerHTML = "";
  getEntries().then(fetchedEntries => {
    let filteredResults = fetchedEntries.filter(entry => {
      return entry.moodOfTheDay === `${mood}`;
    });
    createEntryFromStorage(filteredResults);
  });
}



