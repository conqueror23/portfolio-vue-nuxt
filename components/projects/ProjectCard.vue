<template>
    <div id="project-card">
      <div class="single-card" v-for="(item, index) in projectData" :key="index">
        <h2>{{index}}</h2>
        <hr>
        <table v-for="(value, att) in item" :key="att">
            <tr>
                <th>
                    {{att}}
                </th>
                <td>
                    {{value}}
                </td>
            </tr>
        </table>
        
      </div>
    </div>
</template>

<script>
import projects from '../../assets/constants/projects'
export default {
    components:{

    },
    data(){
        return{
            projectData:projects,
        }
    }

}
</script>

<style>
#project-card{
    display: flex;
    flex-wrap: wrap;
}
.single-card {
    width: 40%;
}
#project-card >div{
    border: 0.1em solid blue;

}
</style>
