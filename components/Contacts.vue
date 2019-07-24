<template>
    <table id="contact" >
        <tr>
            <th>Phone</th>
        </tr>
        <tr>
            <td>0481222149</td>
        </tr>
        <tr>
            <th>Email</th>
        </tr>
        <tr>
            <td>
                wayneborong@gmail.com
            </td>
        </tr>
    </table>
</template>

<script>
export default {
    name:'contacts',


}
</script>

<style>
#contact{
    position: fixed;
    top:30%;
    left:65%;
    display: flex;
    flex-direction: column;
    background: green;
    border: 0.5em solid blue;
    border-radius: 15%;
}

</style>
