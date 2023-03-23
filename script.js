const sleep = ms => new Promise(r => setTimeout(r, ms));

document.addEventListener('DOMContentLoaded', function () {
    const keepFocusLinks = document.querySelectorAll('.keep-focus');

    keepFocusLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            // Remove the 'active' class from any other link with the 'keep-focus' class
            keepFocusLinks.forEach((otherLink) => {
                if (otherLink !== link) {
                    otherLink.classList.remove('active');
                    otherLink.classList.add('darken')
                }
            });

            // Add the 'active' class to the clicked link
            event.currentTarget.classList.add('active');
            event.currentTarget.classList.remove('darken');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const targetElementContact = document.getElementById('contact-wrap');
    const targetElementSkill = document.getElementById('skill-wrap');
    const getContact = document.getElementById('contact-button')
    const getSkill = document.getElementById('skill-button')

        const observerContact = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    getContact.classList.add('active')
                    getContact.classList.remove('darken')
                } else {
                    getContact.classList.remove('active')
                    getContact.classList.remove('darken')
                }
            });
        });

        const observerSkill = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    getSkill.classList.add('active')
                    getSkill.classList.remove('darken')
                } else {
                    getSkill.classList.remove('active')
                    getSkill.classList.remove('darken')
                }
            });
        });

        observerContact.observe(targetElementContact);
        observerSkill.observe(targetElementSkill);

});
