<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { getEventValue } from "../utils/logic";

  const dispatch = createEventDispatcher();

  function removeItem() {
    dispatch("removeValue", { index });
  }
  let showInput = false;
  export let value = "";
  export let index: number;
  let checked = false;
</script>

<div>
  <input type="checkbox" bind:checked />
  {#if checked}
    <p style="text-decoration: line-through">{value}</p>
  {:else}
    <p>{value}</p>
  {/if}
  <button on:click={removeItem}>x</button>
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
    margin: 0.3rem;
    justify-content: space-around;
  }
</style>
