const newCommentHandler = async(event) => {
    event.preventDefault();

    const comment = document.querySelector('#newComment').ariaValueMax.trim();
    const post_id = window.location.toString().split('/')[4]
    if (comment) {
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