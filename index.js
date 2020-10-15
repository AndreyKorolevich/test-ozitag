const check = document.querySelector('.menu__check');
const subs = document.querySelectorAll('.fa');

check.addEventListener('click', (event) => {
    const bars = document.getElementById('bars')
    bars.classList.toggle('fa-times');
    bars.classList.toggle('fas');
    bars.classList.toggle('fa-bars');
    bars.classList.toggle('fa');
})

subs.forEach(e => e.addEventListener('click', (event) => {
    const parent = event.target.closest('ul').classList.value;
    const sub = document.querySelectorAll(`.${parent} > li > .first-floor__sub`);
    sub.forEach(e => {
        const targetInput = event.target.closest('li').firstElementChild;
        if (e.id !== targetInput.id && e.id.trim() !== '' && e.checked) {
            e.checked = !e.checked;
            const event = new Event('change');
            e.dispatchEvent(event);
        }
    })
    event.target.scrollIntoView();
}))

