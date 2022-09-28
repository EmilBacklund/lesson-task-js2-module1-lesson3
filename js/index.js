const url = "https://noroff.herokuapp.com/v1/books";
const bookContainer = document.querySelector(".book-container");
const search = document.querySelector(".search");

async function getBooks() {
  try {
    const response = await fetch(url);
    const books = await response.json();

    //   bookContainer.innerHTML = "";

    books.forEach(({ title, author, publisher }) => {
      bookContainer.innerHTML += `<div class="book">
            <h4>${title}</h4>
            <p><span class="bold">Author:</span> ${author}</p>
            <p><span class="bold">Publisher: </span>${publisher}</p>
            </div>
            `;
    });

    console.log(books);
  } catch (err) {
    console.log(err);
  }
}

getBooks();
