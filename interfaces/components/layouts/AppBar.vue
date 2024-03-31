<template>
    <!-- Author: Jervin Macalawa -->
    <!-- Added on: 2023-10-24 -->
    <!-- Updated on: 2023-11-04 by Jervin Macalawa -->
    <!-- Description: This components will use for AppBar -->
    <div>
        <v-app-bar :color="color_class.app_bar" height="100" elevation="0">
            <v-row>
                <v-col align-self="center">
                    <v-img :src="color_class.logo" height="80" width="150" />
                </v-col>
                <v-col align-self="center">
                    <v-row>
                        <v-col>
                            <span :class="color_class.title">HOME</span>
                        </v-col>
                        <v-col>
                            <span :class="color_class.title" @click="callLinkHandler('blogs')">BLOGS</span>
                        </v-col>
                        <v-col>
                            <span :class="color_class.title">SERVICES</span>
                        </v-col>
                        <v-col>
                            <span :class="color_class.title">WORKS</span>
                        </v-col>
                        <v-col>
                            <span :class="color_class.title">CONTACTS</span>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            secondary_logo: "images/general/header/main-logo.svg",
            primary_logo: "images/general/header/logo_official.svg",
            color_class: {
                title: 'primary-pointer',
                app_bar: '#194569',
                logo: "images/general/header/logo_official.svg"
            }
        }
    },
    created() {
        this.colorAppBarHandler();
    },
    methods: {
        colorAppBarHandler() {
            const route_name = this.$route.name;
            switch (route_name) {
                case 'index':
                    this.color_class = {
                        title: "primary-pointer",
                        app_bar: "#194569",
                        logo: this.primary_logo
                    }
                    break;
                case 'blogs':
                    this.color_class = {
                        title: "black",
                        app_bar: "#194569",
                        logo: this.primary_logo
                    }
                    break;
                case 'services':
                    this.color_class = {
                        title: "black",
                        app_bar: "white",
                        logo: this.secondary_logo
                    }
                    break;
                default:
                    break;
            }
        },
        callLinkHandler(link_name) {
            location = `/${link_name}`;
        }
    }
}
</script>

<style>
.primary-pointer {
    color: white;
}

.primary-pointer:hover {
    color: #FEDC56;
    cursor: pointer;
    transform: scale(1.1);
}
</style>