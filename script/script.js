window.addEventListener('scroll', () => {
    if (scrollY >= 1)
        document.querySelector('.jumbotron').style.padding = "0rem 2rem"
    else if (scrollY <= 1)
        document.querySelector('.jumbotron').style.padding = "4rem 2rem"
})

const addButton = document.querySelector("#addNotes");
const mainNoteBody = document.querySelector('.__main-body-closer');

const addNewNote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('__card-main-container');

    const htmlData =   `<div class="__card-closer">
                            <div class="__card-header">
                                <button class="__edit">    
                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                </button>
                                <button class="__delete">
                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div class="__card-data ${text ? "" : "hidden"} ">${text}</div>
                            <textarea class="__textarea ${text ? "hidden" : ""} ">${text}</textarea>
                        </div>`

    note.insertAdjacentHTML('afterbegin', htmlData);
    mainNoteBody.appendChild(note);

    // references
    let editBtn = note.querySelector('.__edit');
    let delBtn = note.querySelector('.__delete');
    let main = note.querySelector('.__card-data')
    let textarea = note.querySelector('.__textarea');

    let updateLSDate = () => {
        const textAreaData = document.querySelectorAll('textarea');
        const noteSub = [];
        textAreaData.forEach((note) => {
            return noteSub.push(note.value);
        });
        localStorage.setItem('noteSub', JSON.stringify(noteSub));
    }

    // deleting noteSub
    delBtn.addEventListener('click', () => {
        note.remove();
        updateLSDate();
    });

    // toggle using edit button
    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    });

    textarea.addEventListener('change', (event) => {
        const value = event.target.value;
        main.innerHTML=  value;
        updateLSDate();
    });
}

// getting a data from local storage
const noteSub = JSON.parse(localStorage.getItem('noteSub'));
if(noteSub){
    noteSub.forEach((note) => addNewNote(note));
}

// Event for add note
addButton.addEventListener('click', () => addNewNote());