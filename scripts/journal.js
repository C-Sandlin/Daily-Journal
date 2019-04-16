/* Single Journal Entry
You defined form fields for the following bits of data to collect from a user of your application.

Date of the journal entry.
Concepts covered (which will be the title of the entry).
The long-form contents of the journal entry.
The mood of the journal entry.
In your JavaScript file, define an object that will represent a journal entry in your code.

/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today

const objectsJournalEntry = {

}

Journal Entry Collection
Eventually, you will have multiple journal entries, so you need to define an appropriately named variable that will have the value of an array.

Once you define that variable and give it a default value of a blank array, use the push() method to add the journalEntry object you defined above to the array.

More Journal Entries
Take a few minutes and define two or three more JavaScript objects to represent journal entries for some other things that you have learned about so far at NSS.

Add those new objects to your journal entries array. */

const objectsJournalEntry = {
    date: "April 11, 2019",
    concepts: "key-value pairs, intro to functions"
    textArea: "Today I learned a lot that I didn't know about objects and how they can be utilized",
    feeling: "🙂",
}

const journalEntries = [];


const journalEntry0= {
    dateOfEntry: "April 12, 2019",
    conceptsCoveres: "Beginning Functions",
    textArea: "today I learned about functions",
    moodOfTheDay: "🙂"
};

const journalEntry1= {
    dateOfEntry: "April 13, 2019",
    conceptsCoveres: "Working on loops",
    textArea: "today I learned a lot about loops and practiced with them.",
    moodOfTheDay: "🙂"
};

const journalEntry2= {
    dateOfEntry: "April 15, 2019",
    conceptsCoveres: "practicing Functions",
    textArea: "today I learned practiced functions even more",
    moodOfTheDay: "🙂"
};


journalEntries.push(journalEntry0, journalEntry1, journalEntry2);