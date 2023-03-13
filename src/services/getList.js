export const getList = () => {
  return fetch("https://codeacademy-todo.vercel.app/api/list?user=mantas").then(
    (response) => response.json()
  );
};
