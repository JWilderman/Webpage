let dogPic = document.createElement('img');
dogPic.src = "dog.jpg";

let message = document.createElement('p');
message.innerText = "Here is a picture of a dog."

document.getElementById('p2-main').appendChild(message);
document.getElementById('p2-main').appendChild(dogPic);