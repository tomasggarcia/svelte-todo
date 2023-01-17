<script>
  import { each } from "svelte/internal";
  import TodoItem from "./TodoItem.svelte";

  let items = [""]

  $: console.log(items)
</script>
<table>
  <tr>
    <th>Todo</th>
  </tr>
  <tr>
    {#each items as item}
    <TodoItem value={item}/>
    {/each}

  </tr>
</table>
