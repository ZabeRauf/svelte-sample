<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()

    function myFirstEvent() {
        alert('My first event.')
    }

    function mySecondEvent() {
        dispatch('message', {
            text: 'I am a dispatched event.'
        });
    }
</script>

<button on:click={mySecondEvent}>Click Here</button>