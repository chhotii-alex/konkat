<script>
import { time_ranges_to_array } from "svelte/internal";
import App from "./App.svelte";
import { dayOfWeekName } from "./datetime";
import OneDay from "./OneDay.svelte";

    export let schedule;
</script>

<h2> Here is the schedule! </h2>
{#each schedule as day, index (day.dayOfWeek) }
    {#if index}
        <hr/>
    {/if}
    <OneDay {...day } />
{/each}
