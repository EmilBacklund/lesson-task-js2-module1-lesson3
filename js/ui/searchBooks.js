import { renderBooks } from "./renderBooks.js";

export function searchBooks(books) {
  const search = document.querySelector(".search");

  search.onkeyup = () => {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredBooks = books.filter(({ author, publisher }) => {
      if (
        author.toLowerCase().startsWith(searchValue) ||
        publisher.toLowerCase().startsWith(searchValue)
      ) {
        return true;
      }
    });

    renderBooks(filteredBooks);
  };
}
