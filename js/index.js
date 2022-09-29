import { searchBooks } from "./ui/searchBooks.js";
import { renderBooks } from "./ui/renderBooks.js";

const url = "https://noroff.herokuapp.com/v1/books";

async function getBooks() {
  try {
    const response = await fetch(url);
    const books = await response.json();

    renderBooks(books);
    searchBooks(books);

    console.log(books);
  } catch (err) {
    console.log(err);
  }
}

getBooks();
