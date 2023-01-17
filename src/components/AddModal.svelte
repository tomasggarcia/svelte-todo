<script lang="ts">
  export let showModal = false;
  import { createEventDispatcher } from "svelte";
  import { getEventValue } from "../utils/logic";

  const dispatch = createEventDispatcher();

  function handleAddItem() {
    if (value)
      dispatch("addValue", {
        text: value,
      });
  }
  function handleCloseModal() {
    console.log("cerrar");
    showModal = false;
  }

  let value = "";
</script>

<dialog on:blur={() => (showModal = false)}>
  <div id="closeContainer">
    <button id="close" on:click={handleCloseModal}>x</button>
  </div>
  <form on:submit|preventDefault={() => handleAddItem}>
  <input type="text" on:input={(e) => (value = getEventValue(e))} />
  <button on:click={handleAddItem}>Add</button>
  </form>
</dialog>

<style>
  dialog {
    top: 10%;
    display: flex;
    flex-direction: column;
  }
  #closeContainer {
    display: flex;
    justify-content: flex-end;
  }
  #close {
    display: flex;
    justify-content: center;
    width: 10px;
  }
</style>
