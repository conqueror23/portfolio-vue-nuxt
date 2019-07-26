<template>
    <div>
        <p v-bind="test">{{test}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            test:'thisis a test components'
        }
    }
}
</script>

<style>

</style>
