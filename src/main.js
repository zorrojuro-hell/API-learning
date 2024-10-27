
// API
/**
 * breeds list = https://dog.ceo/api/breeds/list/all
 * get single breed image : https://dog.ceo/api/breed/{breed}/images/random
 */

// DOM selection
const selectEl = document.querySelector("#dog-breeds");
const imageEl = document.querySelector("#dog-image");
console.log(selectEl)
console.log(imageEl)

// this funtion returns breed
function getdogsbreed(){
    return fetch(`https://dog.ceo/api/breeds/list/all`)
    .then((res) => res.json())
    .then((data) => Object.keys(data.message))
    .catch((err) => console.log(err));

}

// this function returns breed image
function getDogImage(breed){
    return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((res) => res.json())
    .then((data) => data.message)
    .catch((err) => console.lof(err))

}

// render breed

function renderOptions(){
    getdogsbreed().then((breeds) => {
        for (let breed of breeds){
            const option = document.createElement("option");
            option.textContent = breed[0].toUpperCase() + breed.slice(1);
            option.value = breed;
            selectEl.appendChild(option);
        }
    })
}



renderOptions();


// render image from breed render

selectEl.addEventListener("change",(e) => {
    const selectedValue = e.target.value;

    getDogImage(selectedValue).then((link) => (imageEl.src = link));

})