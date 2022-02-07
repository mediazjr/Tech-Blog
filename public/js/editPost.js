const editPosttHandler = async(event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const description = document.querySelector('#description').value.trim();
    const id = window.location.toString().split('/')[4]
    if (name && description) {
        const response = await fetch('/api/posts/' + id, {
            method: 'PUT',
            body: JSON.stringify({ name, description }),
            headers: { 'Content-Type': 'application/json' },
        });
        if(response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText)
        }
    }
};

document
.querySelector("#editBtn")
.addEventListener('click', editPosttHandler);