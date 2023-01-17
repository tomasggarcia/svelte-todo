<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { getEventValue } from "../utils/logic";

  const dispatch = createEventDispatcher()

  function removeItem() {
    dispatch('removeValue', {index})
  }
  let showInput = false;
  export let value = "";
  export let index: number
</script>

<div>
  <button on:click={() => (showInput = true)}
        on:input={(e) => (value = getEventValue(e))}
        on:blur={() => {
          if(value==='')showInput=false
        }}
  >
  {value}
  </button>
  <button on:click={removeItem}>x</button>
</div>


<style>
  div {
    margin: 0.3rem
  }
</style>