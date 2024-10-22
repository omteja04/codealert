let notifications = document.querySelector('.notifications');

function createToast(type, icon, title, text) {
    let newToast = document.createElement('div');
    newToast.innerHTML = `
        <div class="toast ${type}">
            <i class="${icon}"></i>
            <div class="content">
                <div class="title">${title}</div>
                <span>${text}</span>
            </div>
            <i class="fa-solid fa-xmark" onclick="(this.parentElement).remove()"></i>
        </div>`;
    notifications.appendChild(newToast);
    setTimeout(() => newToast.remove(), 5000);
}

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const emailInput = document.getElementById('mail-address').value.trim();

    if (emailInput === "") {
        createToast('warning', 'fa-solid fa-triangle-exclamation', 'Warning', 'Please enter your email address.');
    } else if (validateEmail(emailInput)) {
        createToast('success', 'fa-solid fa-circle-check', 'Success', 'You have successfully subscribed.');
    } else {
        createToast('error', 'fa-solid fa-circle-exclamation', 'Error', 'Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
