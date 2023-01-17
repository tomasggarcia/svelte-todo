<script lang="ts">
  import { getEventValue } from "../utils/logic";

  let showInput = false;
  export let value = "";
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
</div>
