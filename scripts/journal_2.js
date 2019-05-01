// load entries on page load
document.addEventListener("load", getEntries());

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
    saveNewEntry(newEntry).then(parsedResult => {
      console.log("what is the new item", parsedResult);
      getEntries();
    });
    document.querySelector("#mainForm").reset();
    document.querySelector("#publishedEntries").innerHTML = "";
  }
});
