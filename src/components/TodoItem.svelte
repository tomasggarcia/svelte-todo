<script lang="ts">
  import { getEventValue } from "../utils/logic";

  let showInput = false;
  export let value = "";
</script>

<div>
  <button on:click={() => (showInput = true)}>
    {#if showInput}
      <input
        on:input={(e) => (value = getEventValue(e))}
        on:blur={() => {
          if(value==='')showInput=false
        }}
        type="text"
      />
    {:else}
      New...
    {/if}
  </button>
</div>
