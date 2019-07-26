<template>
    <formHelper >
        <h2 slot="form-header"> Add new Projects
        </h2>
        <div slot='form-field'>
            <input type="text" placeholder="projectName">
            <input type="text" placeholder="projectTech">
            <input type="text" placeholder="projectDescription">
            <input type="text" placeholder="projectTime">
        </div>
        <div slot="form-control">
            <button>Submit</button>
        </div>
    </formHelper>
</template>

<script>
import formHelper from '../projects/FormHelper'
export default {
components:{
    formHelper,
}
}
</script>

<style>

</style>
