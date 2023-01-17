<script lang="ts">
  import AddModal from "./components/AddModal.svelte";
  import TodoItem from "./components/TodoItem.svelte";
  let showAddModal = false

  let items = ["primer"];

  function addItem(event) {
    items = [...items, event.detail.text]
  }
  function removeItem(event) {
    // items = items.splice(event.detail.index, 1)
    items = items.filter((e,i) => i!=event.detail.index)
  }
</script>

<main>
  <button on:click={() => showAddModal=true}> New... </button>
  {#each items as item, i}
    <TodoItem 
    value={item}
    index={i}
    on:removeValue={removeItem}
    />
  {/each}
  {#if showAddModal}
  <AddModal 
  bind:showModal={showAddModal} 
  on:addValue={addItem}
  />
  {/if}
</main>

<style>
</style>
