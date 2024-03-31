<template>
    <!-- Author: Jervin Macalawa -->
    <!-- Added on: 2023-10-31 -->
    <!-- Description: This section displays project section -->
    <div>
        <v-sheet height="100vh">
            <div class="carousel-container" @mouseenter="is_hovered = false" @mouseleave="is_hovered = true">
                <v-carousel hide-delimiter-background color="white" height="100vh" v-model="carousel_page" :interval="10000"
                    cycle>
                    <template v-slot:prev="{ props }">
                        <v-icon color="white" class="primary-pointer" @click="carouselController('previous')" size="150"
                            @mouseenter="is_hovered_left = false" @mouseleave="is_hovered_left = true">
                            mdi-chevron-left
                        </v-icon>
                    </template>
                    <template v-slot:next="{ props }">
                        <v-icon color="white" class="primary-pointer" @click="carouselController('next')" size="150"
                            @mouseenter="is_hovered_right = false" @mouseleave="is_hovered_right = true">
                            mdi-chevron-right
                        </v-icon>
                    </template>
                    <v-carousel-item v-for="(item, index) in items" :key="index">
                        <v-img height="100vh" :src="item.src" aspect-ratio="3/1"
                            class="darken-image align-center d-flex" align="center">
                            <v-row>
                                <v-col>
                                    <div class="text-container">
                                        <div class="text-white text-h3">
                                            <b>{{ item.title }}</b>
                                        </div>
                                        <div class="py-5">
                                            <v-btn class="button-text" rounded="lg" height="50" variant="outlined"
                                                color="white">
                                                <div class="text-h6">
                                                    Find out
                                                    more
                                                </div>
                                                <div class="pt-1">
                                                    <v-icon size="30">mdi-arrow-right</v-icon>
                                                </div>
                                            </v-btn>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-img>
                    </v-carousel-item>
                </v-carousel>
                <div class="overlay-right" :class="{ 'hovered-right': is_hovered_right }"></div>
                <div class="overlay-left" :class="{ 'hovered-left': is_hovered_left }"></div>
            </div>
        </v-sheet>
    </div>
</template>

<script>
export default {
    data() {
        return {
            is_hovered_right: true,
            is_hovered_left: true,
            is_hovered: true,
            carousel_page: 0,
            items: [
                { src: 'images/home/projects/UDelivery.svg', title: 'UDelivery' },
                { src: 'images/home/projects/man-2-coding.svg', title: 'URewards' },
                { src: 'images/home/projects/man-1-coding.svg', title: 'Fyre' }
            ]
        };
    },
    methods: {
        carouselController(action) {
            if (action === 'next' && this.carousel_page < 2) this.carousel_page++
            else if (action === 'previous' && this.carousel_page > 0) this.carousel_page--
        }
    }
};
</script>
  
<style scoped>
.carousel-container {
    position: relative;
}

.button-text {
    text-transform: none;
}

.text-container {
    position: relative;
    z-index: 2;
}

.primary-pointer {
    color: white;
    transition: transform 0.2s;
}

.primary-pointer:hover {
    color: #FEDC56;
    cursor: pointer;
    transform: scale(1.1);
}

.darken-image::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    pointer-events: none;
}

.text-brightness {
    filter: brightness(1);
}

.overlay-left {
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    bottom: 0;
    width: 10%;
    background: rgba(255, 255, 255, 0.2);
    pointer-events: none;
    transition: opacity 0.2s;
}

.overlay-right {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    bottom: 0;
    width: 10%;
    background: rgba(255, 255, 255, 0.2);
    pointer-events: none;
    transition: opacity 0.2s;
}

.overlay-right.hovered-right {
    opacity: 0;
}

.overlay-left.hovered-left {
    opacity: 0;
}
</style>
  