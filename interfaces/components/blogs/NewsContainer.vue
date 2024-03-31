<template>
    <v-app>
        <v-container fluid>
            <v-row>
                <v-col cols="8">
                    <v-card class="custom-card" rounded="lg" @mouseenter="animateCard(index, true)"
                        @mouseleave="animateCard(index, false)">
                        <v-img class="card-image" src="images/blogs/carousel-item-watching.svg" alt="Card Image"></v-img>
                        <v-card-title class="overlay" :class="{ active: animatedCard === index }">
                            <div class="card-title">Card Title</div>
                            <div class="card-description">Card description goes here.</div>
                        </v-card-title>
                    </v-card>
                </v-col>
                <v-col class="px-10" align-self="center">
                    <div class="text-h5">
                        Catch up us on our Socials
                    </div>
                    <div class="py-2">
                        <v-btn elevation="0" v-for="icon in footer_icons" :key="icon" class="mx-1 mb-5 icon-button"
                            size="35px" icon>
                            <a href="">
                                <img :src="icon" alt="">
                            </a>
                        </v-btn>
                    </div>
                    <v-divider class="py-2" />
                    <div class="text-h5">
                        Don't miss out on our offers!
                    </div>
                    <div>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field outlined label="Name:" rounded="lg" />
                            </v-col>
                            <v-col cols="12">
                                <v-text-field outlined label="Email Address:" rounded="lg" />
                            </v-col>
                        </v-row>
                    </div>
                    <div align="center">
                        <v-btn color="#194569">Subscribe <v-icon>mdi-arrow-right</v-icon> </v-btn>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col :cols="(index + 1) % 4 == 0 ? 8 : 4" v-for="(card, index) in news" :key="index">
                    <v-card height="150" class="custom-card" rounded="lg" @mouseenter="animateCard(index, true)"
                        @mouseleave="animateCard(index, false)">
                        <v-img class="card-image" :src="card.image" alt="Card Image"></v-img>
                        <v-card-title class="overlay" :class="{ active: animatedCard === index }">
                            <div class="card-title">{{ card.title }}</div>
                            <div class="card-description">{{ card.description }}</div>
                        </v-card-title>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
  
<script>
import FacebookIcon from '/images/blogs/facebook.svg';
import InstagramIcon from '/images/blogs/instagram.svg';
import LinkedinIcon from '/images/blogs/linkedin.svg';
export default {
    data() {
        return {
            animatedCard: null,
            footer_icons: [
                FacebookIcon,
                InstagramIcon,
                LinkedinIcon,
            ],
            cards: [1, 2, 3],
        };
    },
    props: [
        'news'
    ],
    methods: {
        animateCard(index, shouldAnimate) {
            if (shouldAnimate) {
                this.animatedCard = index;
            } else {
                this.animatedCard = null;
            }
        },
    },
};
</script>
  
<style>
.icon-button {
    background-color: transparent;
}

.custom-card {
    position: relative;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s;
    min-height: 300px;
}

.custom-card:hover {
    transform: scale(1.05);
}

.card-image {
    object-fit: cover;
    min-height: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
}

.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: rgba(0, 0, 0, 0.95);
    color: #fff;
    padding: 16px;
    transition: transform 0.3s, opacity 0.3s;
    transform: translateY(50%);
    opacity: 0.7;
}

.overlay.active {
    transform: translateY(0);
    opacity: 0.7;
}

.card-title {
    font-size: 24px;
    margin: 0;
    margin-bottom: 8px;
}

.card-description {
    font-size: 16px;
    margin: 0;
}
</style>
  