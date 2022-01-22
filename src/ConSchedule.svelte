<script>
import { time_ranges_to_array } from "svelte/internal";
import { dayOfWeekName } from "./datetime";

    export let schedule;
</script>

<h2> Here is the schedule! </h2>
{#each schedule as day, index (day.dayOfWeek) }
    {#if index}
        <hr/>
    {/if}
    {day.dayOfWeek} <br/>
    {#each day.times as time, time_index (time.timeString) }
        { time.timeString }
        {#each time.sessions as session, session_index (session.id)}
            <div class="session_info" >
                { session.title }
                <p class="description" >
                    { session.desc }
                </p>
            </div>
        {/each}
    {/each}
{/each}
