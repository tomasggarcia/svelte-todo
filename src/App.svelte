<script lang="ts">
  import AddModal from "./components/AddModal.svelte";
  import Container from "./components/Container.svelte";
  import TodoItem from "./components/TodoItem.svelte";
  let showAddModal = false;

  let items = [];

  function addItem(event) {
    items = [...items, event.detail.text];
    showAddModal = false;
  }
  function removeItem(event) {
    // items = items.splice(event.detail.index, 1)
    items = items.filter((e, i) => i != event.detail.index);
  }
</script>

<main>
  <Container>
    <div id="titleContainer">
      <h2>TODO</h2>
    </div>
    <div>
      <button on:click={() => (showAddModal = true)}> New... </button>
    </div>
    <div>
      {#each items as item, i}
      <TodoItem value={item} index={i} on:removeValue={removeItem} />
      {/each}
    </div>
      {#if showAddModal}
      <AddModal bind:showModal={showAddModal} on:addValue={addItem} />
    {/if}
  </Container>
</main>

<style>
  div {
    margin: 0.5rem;
  }
  #titleContainer {
    display: flex;
    text-align: left;
  }
</style>
