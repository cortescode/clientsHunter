<script>
    export let title;
</script>

<a class="logo-container site-title" href="/">
    <img class="logo-image" src="/logo.png" alt="">
    <h1 class="logo logo-header">{title}</h1>
</a>


<style>
    .logo-container {
        text-align: center;
        display: grid;
        grid-template-columns: auto 1fr;
        max-width: fit-content;
        place-items: center;
    }
    /* .logo {
        font-family: 'comfortaa';
        font-weight: 900;
        color: #341B4D;
        width: max-content;
    }

    .logo-container {
        display: grid;
        grid-template-columns: auto auto;
        justify-self: left;
        align-items: center;
        height: fit-content;
        border-radius: 18px;
        background-color: white;
        padding: 4px 10px;
        width: fit-content;
    }
 */
    .logo-container h1 {
        max-width: fit-content;
        font-size: 20px;
        margin: 0;
        padding: 0;
        outline-bottom: none !important;
    }

    .logo-image {
        width: 44px;
        margin: 10px 10px 10px 0;
    }

</style>



