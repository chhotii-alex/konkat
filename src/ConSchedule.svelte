<script>
    export let schedule;
</script>

<h2> Here is the schedule! </h2>
{#each schedule as thing, index}
    {#if index}
        <hr/>
    {/if}
    {thing.title} <br/>
    {thing.desc}
{/each}
{schedule}
