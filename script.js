document.addEventListener('DOMContentLoaded', () => {

    const input1 = document.querySelector('.add_book')
    const input2 = document.querySelector('.add_author')
    const input3 = document.querySelector('.add_year')
    const btn = document.querySelector('.btn')
    const lib = document.querySelector("ul");

 

    function createItem() {

        if (input1.value === '' || input2.value === '' || input3.value === '') {
            alert('Заполните все поля!')
        } else {
            const newBook = document.createElement('li')
            newBook.classList.add('new-book', 'wrapper')

            newBook.innerHTML = `
                <div class="new-name">${input1.value}</div>
                <div class="new-author">${input2.value}</div>
                <div class="new-year">${input3.value}</div>
                <button class="del">&times;</button>
            `;
            document.querySelector('.lib').append(newBook)

            input1.value = ''
            input2.value = ''
            input3.value = ''

            toLocal()
        }

    }
    btn.addEventListener("click", createItem)

    lib.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            e.target.parentNode.remove()
            toLocal()
        }
    })

    function toLocal() {
        const library = lib.innerHTML
        localStorage.setItem('library', library)
    }
    if (localStorage.getItem('library')) {
        lib.innerHTML = localStorage.getItem('library')
    }
})

