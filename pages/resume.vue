<template>
  <div className='Resume'>
    <NavBar />
    <div id="resume">resume page</div>
    <Education />
    <div id="skills"></div>
    <Contacts />
  </div>
</template>

<script>
import Contacts from "../components/Contacts";
import NavBar from "../components/NavBar";
import Education from '../components/resume/Education'
export default {
  name: "resume",
  components: {
    Contacts,
    NavBar,
    Education
  },
  head: {
    title: "resume",
    meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }]
  }
};
</script>

<style>
.resume{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
