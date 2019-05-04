//target each form field and grab the entered values
const captureDate = document.querySelector("#journalDate");
const captureConcepts = document.querySelector("#conceptsCovered");
const captureText = document.querySelector("#textField");
const captureMood = document.querySelector("#journalMood");
const submitButton = document.querySelector("#submitButton");
const saveButton = document.querySelector("#saveButton");
const buttonArea = document.querySelector("#button-area");

const listenForInput = (input, location) => {
  input.addEventListener("input", () => {
    showFormComplete(`${location}`);
  });
};

const runDelete = idNumber => {
  let confirmation = confirm("Are you sure you want to delete this entry?");
  if (confirmation) {
    deleteOldEntry(idNumber).then(() => {
      refre$h();
      getEntries().then(parsedEntries => {
        createEntryFromStorage(parsedEntries);
      });
    });
  }
};

const refre$h = () => {
  document.querySelector("#mainForm").reset();
  document.querySelector("#publishedEntries").innerHTML = "";
};

const radioButtons = document.getElementsByName("moodButton");
radioButtons.forEach(button => {
  button.addEventListener("click", event => {
    let selectedMood = event.target.value;
    getFilteredEntries(selectedMood);
  });
});

const getFilteredEntries = mood => {
  document.querySelector("#publishedEntries").innerHTML = "";
  getEntries().then(fetchedEntries => {
    let filteredResults = fetchedEntries.filter(entry => {
      return entry.moodOfTheDay === `${mood}`;
    });
    createEntryFromStorage(filteredResults);
  });
};

function loadOnPage() {
  getEntries().then(parsedEntries => {
    createEntryFromStorage(parsedEntries);
  });
}

const createSaveChangesBtn = () => {
  let buttonArea = document.querySelector("#button-area");
  buttonArea.innerHTML = `<button class="bigBox" type="button" id="saveButton">
              SAVE CHANGES
            </button>`;
};

const recreateSubmitBtn = () => {
  let buttonArea = document.querySelector("#button-area");
  buttonArea.innerHTML = `<button class="bigBox" type="button" id="submitButton">
              SUBMIT
            </button>`;
};

const runEdit = idNumber => {
  console.log("runEdit");
  createSaveChangesBtn();
  getSingleEntry(idNumber).then(parsedEntry => {
    for (key in parsedEntry) {
      if (parsedEntry.hasOwnProperty(key)) {
        captureDate.value = `${parsedEntry.dateOfEntry}`;
        captureConcepts.value = `${parsedEntry.conceptsCovered}`;
        captureText.value = `${parsedEntry.textField}`;
        captureMood.value = `${parsedEntry.moodOfTheDay}`;
      }
    }
  });
  buttonArea.addEventListener("click", e => {
    if (event.target.id === "saveButton") {
      console.log(event.target.id);
      // Listen for data added to form to clear "empty" messages
      listenForInput(captureDate, "empty-date");
      listenForInput(captureConcepts, "empty-concepts");
      listenForInput(captureText, "empty-journal");
      listenForInput(captureMood, "empty-mood");

      //check form field values - if empty, give warning that all need to be filled
      if (captureDate.value === "") {
        showFormIncomplete("empty-date");
      }
      if (!captureConcepts.value) {
        showFormIncomplete("empty-concepts");
      }
      if (!captureText.value) {
        showFormIncomplete("empty-journal");
      }
      if (captureMood.value === "") {
        showFormIncomplete("empty-mood");
      } else {
        const newEntry = {
          id: idNumber,
          dateOfEntry: captureDate.value,
          conceptsCovered: captureConcepts.value,
          textField: captureText.value,
          moodOfTheDay: captureMood.value
        };
        editOldEntry(idNumber, newEntry).then(() => {
          refre$h();
          getEntries().then(parsedEntries => {
            createEntryFromStorage(parsedEntries);
            recreateSubmitBtn();
          });
        });
      }
    }
  });
};
