<template>
  <div id="individuals">
    <center>
      <h1>Individual Project</h1>
    </center>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div v-for="project in individualProjects" v-if="project.name != 'amazon3d'">
        <div v-for="pic in project.imgs">
          <b-carousel-slide :img-src="pic" img-alt="pic not found" img-width="100" img-height="200">
            <div class="pri-pro-details">
              <label>Project Status:</label>
              <span v-if="project.url">Online</span>
              <span v-else>Offline</span>
              <a :href="project.url">{{project.url}}</a>
            </div>
          </b-carousel-slide>
        </div>
      </div>
    </b-carousel>
  </div>
</template>

<script>
import individualProjects from "@/assets/constants/individuals";
console.log(individualProjects);

export default {
  data() {
    return {
      individualProjects,
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style>
#individuals {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
}
#individuals img {
  height: 35em;
}
.pri-pro-details {
  background: #eee;
  color: #30336b;
  font-weight: 500;
}
@media only  screen and (max-width: 768px) {
  #individuals img {
  height: 25em;
}
  
}
</style>
