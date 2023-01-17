<script>
  import AddItem from "./AddItem.svelte";
import TodoItem from "./TodoItem.svelte";

  let items = [""]
  let addClicked = false

</script>
<table>
  <tr>
    <th>Todo</th>
  </tr>
  <tr>
    {#each items as item}
    <TodoItem value={item}/>
    {/each}
    <AddItem bind:clicked={addClicked}></AddItem>
  </tr>
</table>
