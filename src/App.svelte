<script>
  import AddToDo from "./components/AddToDo.svelte";

  import ToDoItem from "./components/ToDoItem.svelte";
  import { todoStore } from "./stores.js";
</script>

<main>
  <AddToDo />
  {#each $todoStore as todo, index}
    <ToDoItem {...todo} {index} />
  {/each}
</main>

<style>
  main {
    padding: 1em;
    max-width: 50%;
    margin: 0 auto;
  }
</style>
