<script lang="ts">
  import AddModal from "./components/AddModal.svelte";
  import TodoItem from "./components/TodoItem.svelte";
  let showAddModal = false

  let items = ["primer"];

  function addItem(event) {
    console.log(event.detail.text)
    items = [...items, event.detail.text]
  }
  $: console.log(items)
</script>

<main>
  <button on:click={() => showAddModal=true}> New... </button>
  {#each items as item}
    <TodoItem value={item}/>
  {/each}
  {#if showAddModal}
  <AddModal bind:showModal={showAddModal} on:addValue={addItem}></AddModal>
  {/if}
</main>

<style>
</style>
