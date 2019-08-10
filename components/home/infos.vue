<template>
  <div id="info-container">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div id="name">
            <div>
              <h1>Bolong Wang</h1>
              <p>Software Developer</p>
              <div id="secret">
                <center>Secret is Here</center>
              </div>
            </div>
            <h3>(Wayne)</h3>
          </div>
        </div>
        <div class="flip-card-back">
          <div id="habbit">
            <h2>More about me</h2>
            <hr>
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
                <nuxt-link to="/project# individuals">Individual Project</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/project#project-card">Commerical Projects</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/project#work-experience">Work Experience</nuxt-link>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "infos",
  components: {
  }
};
</script>

<style>
#info-container {
  width: 100%;
  height: 50em;
  display: flex;
  flex-direction: column;
}
#infos {
  padding: 1em;
  height: 50.5em;
  justify-content: center;
  align-content: center;
  display: grid;
}

#name {
  margin-top: 10%;
  padding: 1em;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
}
#name > div {
  padding: 0.5em;
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
  font-family: "Saira Stencil One", cursive;
  color: #30336b;
  background: inherit;
}

#name h3 {
  margin-top: 2em;
  height: 1em;
  color: #a7600fa6;
}
#secret {
  font-weight: 100;
  color: #30336b;
  -webkit-animation-name: listExpand; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration:3s; /* Safari 4.0 - 8.0 */
  animation-name: listExpand;
  animation-duration:3s;
  animation-iteration-count:infinite;
}
#habbit {
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
#habbit h2 {
  height: 1em;
  color: #c7ecee;
}
#habbit ul {
  margin-top: 1em;
  font-size: 1.7em;
  padding: 0 0.1em;
  list-style: none;
  font-weight: 200;
  text-decoration: none;
}
#habbit hr{
  margin: auto;
  width: 70%;
}

#habbit a {
  text-decoration: none;
  padding: 0.01em;
  color: #dff9fb;
  cursor: pointer;
}
#habbit a:hover {
  background: #c7ecee;
  border: 0.1em solid #686de0;
  border-radius: 15%;
  font-weight: 400;
  color: #e056fd !important;
}
#habbit a:visited {
  color: #c7ecee;
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
    font-weight: 100;
  }
}
/* flip div */
.flip-card {
  border-radius: 20%;
  background-color: transparent;
  width: 60%;
  height: 30em;
  perspective: 60em;
  margin: auto;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card:hover .flip-card-front {
  display: none;
}
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #c7ecee;
  color: black;
}
.flip-card-back {
  background-color: #4d9ed4;
  color: white;
  transform: rotateY(180deg);
}
</style>
