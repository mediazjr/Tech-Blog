const editPosttHandler = async(event) => {
    event.preventDefault();

    const data = document.querySelector('#newComment').ariaValueMax.trim();
    const post_id = window.location.toString().split('/')[4]
    if (data) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ content, post_id }),
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
.querySelector("#newCommentBtn")
.addEventListener('click', newCommentHandler);