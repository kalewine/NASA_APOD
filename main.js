// information to reach API
const apodUrl = 'https://api.nasa.gov/planetary/apod';
const date = '';
const key = '1Kjiz10UMmeaktP82YsXr6uCYIa1HOHkpqqAoYR0'

// selecting page elements
const apod = document.getElementById('apod'); 
const img_title = document.getElementById('img_title');
const description = document.getElementById('description');

// AJAX function
const xhr = new XMLHttpRequest();
xhr.open('GET', `${apodUrl}?api_key=${key}`);


// Do something with the requested data
xhr.onload = function() {
    const ourData = JSON.parse(xhr.responseText);    
        console.log(ourData);
        renderImageTitle(ourData.title);
        renderImageDescription(ourData.explanation);
        renderImage(ourData.url);
     
}
// Send the request
xhr.send();

// Add HTML to the page
function renderImageTitle(data) {
    img_title.insertAdjacentHTML('beforeend', data);
}

function renderImageDescription(data) {
    description.insertAdjacentHTML('beforeend', data);
}

// Add image to the page
function renderImage(data){
    apod.src = data; 
}

