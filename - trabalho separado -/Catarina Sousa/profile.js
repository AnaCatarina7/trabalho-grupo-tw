function changeUserLoginHTML(event) {
    event.preventDefault()
    
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value;

    let signInElement = document.querySelector('.signIn');

    signInElement.innerHTML = `Welcome, ${username}`;
}
