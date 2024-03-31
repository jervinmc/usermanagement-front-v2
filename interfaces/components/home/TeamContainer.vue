<template>
    <!-- Author: John Doe -->
    <!-- Added on: 2023-10-31 -->
    <!-- Description: This section displays user team section -->
    <div>
        <v-sheet height="120vh" class="align-center justify-center d-flex">
            <div>
                <div align="center" class="pb-10">
                    <span class="text-h3 title-meet"><b>Meet the</b></span>&nbsp;&nbsp;<span
                        class="text-h3 title-team"><b>Team</b></span>
                </div>
                <div>
                    <v-row>
                        <v-col align="center" v-for="photo, index in photos" :key="photo" class="d-flex child-flex"
                            cols="3">
                            <v-img @mouseenter="selectedPage(index)" @mouseleave="is_hovered = false" height="150"
                                width="100" :src="photo" :lazy-src="`https://picsum.photos/10/6?image=${index * 5 + 10}`"
                                :class="is_hovered && selected_index === index ? 'bg-grey-lighten-2 main-img bordered-img' : 'bg-grey-lighten-2 bordered-img'">

                                <!-- Commented by: Jervin Macalawa -->
                                <!-- Added on: 2023-06-31 -->
                                <!-- Description: Need to maintain for adding particles animation. -->

                                <!-- <v-img v-if="is_hovered && selected_index === index" class="img-particles"
                                    src="images/home/team/particles.svg"></v-img> -->

                                <template v-slot:placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                        </v-col>
                    </v-row>
                </div>
            </div>
        </v-sheet>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            is_hovered: false,
            selected_index: false,
            photos: ['images/home/team/jervin_macalawa.jpeg',
                'images/home/team/irish_vargas.jpg',
                'images/home/team/janry_baguio.png',
                'images/home/team/john_dalogdog.jpg',
                'images/home/team/ron_dula.jpeg',
                'images/home/team/roniel_corpuz.jpg']
        }
    },
    methods: {
        selectedPage(index) {
            this.selected_index = index;
            this.is_hovered = true;
        }
    }
}
</script>
  
<style>
.bordered-img {
    border: 2px solid #FEDC56;
}

.title-meet {
    color: #194569
}

.title-team {
    color: #FEDC56;
}

@keyframes slideInFromBottom {
    from {
        transform: translateY(100%);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes zoomIn {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.2);
    }
}

.main-img {
    animation: zoomIn 4s ease;
    z-index: 2;
}

.img-particles {
    animation: slideInFromBottom 0.7s ease;
    z-index: 1;
}
</style>
  