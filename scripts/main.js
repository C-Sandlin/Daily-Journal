// load entries on page load
document.addEventListener("load", loadOnPage());

buttonArea.addEventListener("click", e => {
  if (event.target.id === "submitButton") {
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
      //create new object from entry
      const newEntry = {
        id: "",
        dateOfEntry: captureDate.value,
        conceptsCovered: captureConcepts.value,
        textField: captureText.value,
        moodOfTheDay: captureMood.value
      };
      saveNewEntry(newEntry).then(parsedResult => {
        refre$h();
        getEntries().then(parsedEntries => {
          createEntryFromStorage(parsedEntries);
        });
      });
    }
  }
});

const deleteOrEditEntry = () => {
  const entryContainer = document.querySelector("#publishedEntries");
  entryContainer.addEventListener("click", () => {
    let targetId = event.target.id.split("--");
    let idNumber = targetId[1];
    let action = targetId[0];
    if (action === "delete") {
      runDelete(idNumber);
    }
    if (action === "edit") {
      runEdit(idNumber);
    }
  });
};
deleteOrEditEntry();
