<script lang="ts">
  export let showModal = false;
  import { createEventDispatcher } from "svelte";
  import { getEventValue } from "../utils/logic";

  const dispatch = createEventDispatcher();

  function handleAddItem() {
    if(value)
    dispatch("addValue", {
      text: value,
    });
  }
  function handleCloseModal() {
    console.log("cerrar");
    showModal = false;
  }

  let value = ""
</script>

<div class="modal" role="dialog" on:blur={() => (showModal = false)}>
  <button on:click={handleCloseModal}>x</button>
  <input type="text" on:input={(e) => (value = getEventValue(e))} />
  <button on:click={handleAddItem}>Add</button>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
  }
</style>
