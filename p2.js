let dogPic = document.createElement('img');     //Creates an image element
dogPic.src = "dog.jpg";     //Sets the image source to be dog.jpg

let message = document.createElement('p');      //Creates an paragraph element
message.innerText = "Here is a picture of a dog."       //Changes the inner text of the message

document.getElementById('p2-main').appendChild(message);        //Adds the message to the element with the id "p2-main"
document.getElementById('p2-main').appendChild(dogPic);        //Adds the image to the element with the id "p2-main"