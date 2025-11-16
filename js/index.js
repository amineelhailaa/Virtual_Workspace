const addWorker= document.getElementById("addWorker");
const cancelAdding = document.getElementById("btnAnnulerSubmit")
const formSection = document.getElementById("form_section");
const imageProfile = document.getElementById("profileImage")
const imageInput = document.getElementById("inputProfile");
const experienceContainer = document.getElementById("experienceContainer");
const addExperience = document.getElementById("btnExper");








imageInput.addEventListener('input', e => {
    imageProfile.src = imageInput.value
    imageProfile.onerror = error => {
        imageProfile.src = "./assets/emptyProfile.jpg"
    }
})


addWorker.addEventListener('click', () => {
formSection.classList.toggle("hidden");
})

cancelAdding.addEventListener('click', () => {
    formSection.classList.toggle("hidden");
})


formSection.addEventListener('click', (e) => {
    if (e.target === formSection) {
    formSection.classList.toggle("hidden");
    }
})

addExperience.addEventListener('click', () => {
    const experienceTemplate = document.createElement("div")
    experienceTemplate.innerHTML = `<div class=" flex gap-4">
                    <input type="text" placeholder="Titre" class="   min-w-0  outline-1 outline-amber-400 rounded-md px-4 py-1">
                    <input type="text" placeholder="Duree" value="" class="  min-w-0  outline-1 outline-amber-400 rounded-md px-4 py-1">
            <svg  viewBox="0 0 512 512"  class=" h-10 aspect-square deleteExperience cursor-pointer" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#f44336"/><path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/></svg>

                </div>`

experienceTemplate.querySelector(".deleteExperience").addEventListener("click", e => {
    experienceTemplate.remove();
})
    experienceContainer.append(experienceTemplate);
})

