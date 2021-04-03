import { writable } from "svelte/store";

export default function createTodoStore() {
  const { subscribe, set, update } = writable([
    { checked: false, info: "Mahmud" },
    { checked: true, info: "Ustura kamil" },
    { checked: false, info: "Mahmud Ters" }
  ]);

  const stored = localStorage.getItem("todoStore");
  if (stored) set(JSON.parse(stored));

  subscribe((value) => {
    localStorage.setItem("todoStore", JSON.stringify(value));
  });

  return {
    subscribe,
    addTodo: (newTodo) => update((current) => [...current, newTodo]),
    toggleCheck: (index) =>
      update((current) => {
        current[index].checked = !current[index].checked;
        return current;
      }),
    deleteTodo: (index) =>
      update((current) => {
        current.splice(index, 1);
        return current || [];
      })
  };
}
