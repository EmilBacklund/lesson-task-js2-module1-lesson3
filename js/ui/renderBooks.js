export function renderBooks(booksToRender) {
  const bookContainer = document.querySelector(".book-container");

  bookContainer.innerHTML = "";

  booksToRender.forEach(({ title, author, publisher }) => {
    bookContainer.innerHTML += `<div class="book">
              <h4>${title}</h4>
              <p><span class="bold">Author:</span> ${author}</p>
              <p><span class="bold">Publisher: </span>${publisher}</p>
              </div>
              `;
  });
}
