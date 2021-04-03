<script>
  import { todoStore } from "../stores";

  export let info;
  export let index;
  export let checked;

  const handleDelete = () => {
    todoStore.deleteTodo(index);
  };
</script>

<div>
  <input
    type="checkbox"
    bind:checked
    on:change={() => {
      todoStore.toggleCheck(index);
      console.log($todoStore);
    }}
  />
  <span>
    {info}
  </span>
  <span on:click={handleDelete}>-</span>
</div>

<style>
  div {
    padding: 2px;
  }
</style>
