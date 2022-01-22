<script>
    export let dayOfWeek;
    export let times;
</script>

<h2>{dayOfWeek} </h2>
{#each times as time, time_index (time.timeString) }
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
