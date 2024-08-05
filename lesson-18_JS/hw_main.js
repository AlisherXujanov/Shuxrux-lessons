let buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    let text = button.textContent;
    button.innerHTML = '';

    for(let letter of text){
        // '\u00A0'   ===>>>   is special character for space

        // let span = document.createElement('span');
        // span.textContent = letter === ' ' ? '\u00A0' : letter;
        // button.appendChild(span);

        let span = `<span>${letter === ' ' ? '\u00A0' : letter}</span>`
        button.innerHTML += span;
    }
    let spans = button.querySelectorAll('span');

    button.addEventListener('mouseenter', () => {
        spans.forEach((span,index) => {
            setTimeout(() => {
                span.classList.add('hover');
            }, index * 50);
        })
    })

    button.addEventListener('mouseleave', () => {
        spans.forEach((span,index) => {
            setTimeout(() => {
                span.classList.remove('hover');
            }, index * 50);
        })
    })
})