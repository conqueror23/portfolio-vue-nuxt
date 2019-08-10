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
      background="#ababab"
      img-width="768"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div v-for="project in individualProjects" v-if="project.name != 'amazon3d'">
        <div v-for="pic in project.imgs">
          <b-carousel-slide :img-src="pic" :caption="project.name" img-width="768" img-height="480">
            <p>{{project.name}}</p>
            <button>Details</button>
          </b-carousel-slide>
        </div>
      </div>
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}
      <br />
      Sliding: {{ sliding }}
    </p>
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
</style>
