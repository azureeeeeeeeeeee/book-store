const addBook = async (book, url) => {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
};

const deleteBook = async (id, url) => {
  await fetch(url, {
    method: "DELETE",
  });
};

const updateBook = async (book, url) => {
  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
};

export { addBook, deleteBook, updateBook };
