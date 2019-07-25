<template>
    <nav>
        <img src="/assets/logo.jpg" alt="pic not found">
        <nuxt-link to="/">HOME</nuxt-link>
        <nuxt-link to="projects">PROJECTS</nuxt-link>
        <nuxt-link to="resume">RESUME</nuxt-link>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
nav{
    width: 100%;
    display: flex;
    flex: 0;
    position: fixed;
    background: brown;
    border: 0.1em solid gray;
    justify-content: center;
}
nav a{
    display: block;
    border: 0.1em solid green;
    background: white;

    padding: 0.2em 0.2em;
    margin:0 0.2em;
}
nav a:hover{
    display: block;
    border: 0.1em solid green;
    background: blue;

    padding: 0.2em 0.2em;
    margin:0 0.2em;
}
</style>
