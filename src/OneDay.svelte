<script>
    export let dayOfWeek;
    export let times;
</script>

<h2> This is the schedule for {dayOfWeek}. </h2>
{times.length}
{#if times.length}
    There are events
{:else}
    There are no events
{/if}
