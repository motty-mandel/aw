document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        fetch('http://localhost:5000/create-checkout-session', {
            method: 'POST'
        })
            .then(res => res.json)
            .then(({ url }) => {
                window.location = url
            })
            .catch(e => {
                console.error(e.error);
            })
    });
})