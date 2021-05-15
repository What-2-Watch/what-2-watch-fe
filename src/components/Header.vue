<template>
    <header>
        <h1 class='app-title'>Watch to What</h1>
        <img class='prof-img' src='https://icons-for-free.com/iconfiles/png/512/avatar+human+man+profile+icon-1320085876716628234.png' />
    </header>
</template>

<script>

export default {
    name: 'Header'
}
</script>

<style scoped>

    header {
        height: 150px; 
        background-color: whitesmoke; 
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
    .prof-img {
        height: 50px;
        margin: 20px; 
    }

</style>