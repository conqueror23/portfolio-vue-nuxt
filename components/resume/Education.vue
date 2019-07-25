<template>
    <div>
        {{education}}
    <ul v-bind:key="edu.id" v-for=" edu  in education">
        <li>
            {{edu}}
        </li>

    </ul>

    </div>
</template>

<script>
import education from '../../assets/constants/education'
console.log(education);
export default {
    props:["education"],
    components:{
    }

}
</script>

<style>

</style>
