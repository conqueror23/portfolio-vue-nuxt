<template>
    <formHelper >
        <h2 slot="form-header"> Add new Work Experience
        </h2>
        <div slot='form-field'>
            <input type="text" placeholder="companyName">
            <input type="text" placeholder="jobTitle">
            <input type="text" placeholder="workType">
            <input type="text" placeholder="workTime">
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
