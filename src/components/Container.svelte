<div class="box">
  <slot />
</div>

<style>
  .box {
    display: flex;
    flex-direction: column;
    border: 1px solid #aaa;
    width: 60vw;
    border-radius: 2px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    padding-inline: 5rem;
    padding-top: 2rem;
    margin: 0 0 1em 0;
  }
</style>
