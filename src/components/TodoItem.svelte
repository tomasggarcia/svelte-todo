<script lang="ts">
  import { getEventValue } from "../utils/logic";
  import {createEventDispatcher} from 'svelte';
  import { text } from "svelte/internal";

  const dispatch = createEventDispatcher()

  function removeItem() {
    dispatch('removeValue', {index})
  }
  let showInput = false;
  export let value = "";
  export let index


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
