<template>
  <div id="info-container">
    <Test />
    <div id="infos">
      <div id="name">
        <span>
          <h1>Bolong Wang</h1>
        </span>
        <span id="en-name">
          <hr />
          <h3>Wayne</h3>
        </span>
      </div>
      <div id="habbit">
        <h3>Specialties</h3>
        <ul >
          <li>Front-End</li>
          <li>Back-End</li>
          <li>Database</li>
          <li>Communication Skils</li>
          <li>Problem Solving</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Test from "@/components/projects/test";
export default {
  name: "infos",
  components: {
    Test
  }
};
</script>

<style>
#info-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}
#infos {
  padding: 1em;
  background: #3498db;
  height: 50em;
  justify-content: center;
  align-content: center;
  display: grid;
  grid-template-columns: 40em 5em;
}
#name {
  padding: 1em;
  display: grid;
  grid-template-columns: 35% 0%;
}
#name span:nth-child(2) {
    color: red;
  transform: rotate(-90deg);
}
#name span:nth-child(2) hr {
  width: 4em;
}

#habbit {
  display: grid;
  grid-template-columns: 15% 60%;
}
#habbit ul{
    list-style: none;
    text-decoration: none;
}
#habbit h3 {
  transform: rotate(-90deg);
}
</style>
