<template>
  <div id="info-container">
    <Test />
    <div id="infos">
      <div id="name">
        <div>
          <h1>Bolong Wang</h1>
          <p>Software Developer</p>
        </div>
        <h3>Wayne</h3>
      </div>
      <div id="habbit">
        <h3>Whats More</h3>
        <ul>
          <li>
            <nuxt-link to="/resume#FrontEnd">Front-End</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/resume#BackEnd">Back-End</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/resume#extras">Database</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/project#project-card">Projects</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/project#work-experience">Work Experience</nuxt-link>
          </li>
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
  height: 50.5em;
  justify-content: center;
  align-content: center;
  display: grid;
  grid-template-columns: 65% 35%;
}

#infos h3 {
  transform: rotate(-90deg);
}
#name {
  padding: 1em;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-around;
}
#name >div{
  padding: 0.5em;
  border:0.1em dotted green;
  height: fit-content;
  z-index: 2;
}
#name > div p {
  color: #7275d6;
  font-weight: 550;
}
#name span {
  display: inline-flex;
}
#name h1 {
  color:#30336b;
  background: inherit;
}

#name h3 {
  margin-top: 2em;
  height: 1em;
  color: #a7600fa6;
}
#habbit {
  margin-top: 10em;
  display: flex;
  flex-wrap: nowrap;
}
#habbit h3 {
  margin-top: 2.5em;
  height: 1em;
}
#habbit ul {
  overflow: hidden;
  font-size: 1.7em;
  padding: 0 0.1em;
  list-style: none;
  font-weight: 200;
  text-decoration: none;
  -webkit-animation-name: listExpand; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 3s; /* Safari 4.0 - 8.0 */
  animation-name: listExpand;
  animation-duration: 3s;
}

#habbit a {
  text-decoration: none;
  padding: 0.01em;
  color: #dff9fb;
  cursor: pointer;
}
#habbit a:hover {
  background: #c7ecee;
  border:0.1em solid #686de0;
  border-radius: 15%;
  font-weight: 400;
  color: #e056fd !important;
}
#habbit a:visited {
  color: #ff7979;
}
#habbit h3 {
  color: #686de0;
}

/* animations */
@-webkit-keyframes listExpand {
  0% {
    font-weight: 100;
  }
  50% {
    font-weight: 600;
  }
  100% {
    font-weight: 200;
  }
}
</style>
