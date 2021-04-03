<script>
  import { todoStore } from "../stores";
  let info;

  const handleClick = () => {
    if (info.trim() === "") return;
    todoStore.addTodo({ checked: false, info: info.trim() });
    info = "";
  };
</script>

<div>
  <input
    bind:value={info}
    type="text"
    on:keyup={(e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleClick();
      }
    }}
  />
  <button on:click={handleClick}>Add</button>
</div>

<style>
  div {
    text-align: center;
  }
</style>
