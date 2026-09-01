// ===============================
// SELECT ELEMENTS
// ===============================

let btn = document.querySelector("#addBtn");

let noteForm = document.querySelector("#noteForm");

let title = document.querySelector("#title");

let text = document.querySelector("#content");

let save = document.querySelector("#saveBtn");

let cancel = document.querySelector("#cancelBtn");

let notesContainer =
    document.querySelector("#notesContainer");

let search = document.querySelector("#search");

let notFound =
    document.querySelector("#notFound");


// ===============================
// GET NOTES FROM LOCAL STORAGE
// ===============================

let notes =
    JSON.parse(localStorage.getItem("notes")) || [];


// ===============================
// ADD NOTE BUTTON
// ===============================

btn.addEventListener("click", function () {

    noteForm.style.display = "block";

});


// ===============================
// CANCEL BUTTON
// ===============================

cancel.addEventListener("click", function () {

    noteForm.style.display = "none";

    title.value = "";

    text.value = "";

});


// ===============================
// SAVE NOTE
// ===============================

save.addEventListener("click", function () {

    let titleValue = title.value.trim();

    let textValue = text.value.trim();


    // Empty input check

    if (titleValue === "" || textValue === "") {

        alert("Please enter title and note!");

        return;
    }


    // Create new note object

    let newNote = {

        id: Date.now(),

        title: titleValue,

        text: textValue

    };


    // Add note to array

    notes.push(newNote);


    // Save array to localStorage

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );


    // Show notes on screen

    showNotes(notes);


    // Clear inputs

    title.value = "";

    text.value = "";


    // Close form

    noteForm.style.display = "none";


    // Check saved data in console

    console.log(
        JSON.parse(localStorage.getItem("notes"))
    );

});


// ===============================
// SHOW NOTES
// ===============================

function showNotes(notesArray) {

    notesContainer.innerHTML = "";


    // If no notes

    if (notesArray.length === 0) {

        notFound.style.display = "block";

        return;
    }


    notFound.style.display = "none";


    // Loop through notes

    notesArray.forEach(function (note) {

        let noteDiv =
            document.createElement("div");


        noteDiv.classList.add("note");


        noteDiv.innerHTML = `

            <h2>${note.title}</h2>

            <p>${note.text}</p>

            <button
                class="deleteBtn"
                data-id="${note.id}">
                Delete
            </button>

        `;


        notesContainer.appendChild(noteDiv);

    });

}


// ===============================
// DELETE NOTE
// ===============================

notesContainer.addEventListener(
    "click",
    function (e) {

        if (
            e.target.classList.contains("deleteBtn")
        ) {

            let id =
                Number(e.target.dataset.id);


            notes = notes.filter(function (note) {

                return note.id !== id;

            });


            localStorage.setItem(
                "notes",
                JSON.stringify(notes)
            );


            showNotes(notes);

        }

    }
);


// ===============================
// SEARCH NOTES
// ===============================

search.addEventListener("input", function () {

    let searchValue =
        search.value.trim().toLowerCase();


    let filteredNotes =
        notes.filter(function (note) {

            return (
                note.title
                    .toLowerCase()
                    .includes(searchValue)

                ||

                note.text
                    .toLowerCase()
                    .includes(searchValue)
            );

        });


    showNotes(filteredNotes);

});


// ===============================
// SHOW SAVED NOTES ON PAGE LOAD
// ===============================

showNotes(notes);