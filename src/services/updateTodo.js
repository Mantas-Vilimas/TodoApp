export const updateTodo = (todo) => {
  return fetch("https://codeacademy-todo.vercel.app/api/todo?user=mantas", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  }).then((response) => response.json());
};
