function doesNotPassAllValidation(name, msg) {
    if(!name && !msg) {
        alert('Name and Message should be filled')
    }

    if (!name) {
        alert('You forgot to tell us your name!');
        return true;
    }

    if (!msg) {
        alert('You forgot to type your comment!');
        return true;
    }

    if (msg.length>280) {
        alert('Your message should be uo to 280 characters long!');
        return true;
    }
    
    if (name.length>30) {
        alert('Your name should be up to 30 characters long!');
        return true;
    }

    return false;
}

function submitComment() {
    const inputField = document.getElementById('name');
    const name = inputField.value;
    
    const textArea = document.getElementById('msg');
    const msg = textArea.value;

    if (doesNotPassAllValidation(name, msg)) {
        return null;
    }


    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);
    console.log(comment);
    const commentSection = document.getElementById('comments');
    console.log(commentSection);
    commentSection.appendChild(comment);
     
    textArea.value = null;
    inputField.value = null;
}