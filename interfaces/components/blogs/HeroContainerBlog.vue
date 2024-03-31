<template>
    <v-app>
        <v-container fluid>
            <v-sheet height="80vh" class="d-flex align-center justify-center" align="center">
                <v-row justify="center" @mouseenter="expandMenu" @mouseleave="collapseMenu">
                    <v-col cols="12" sm="12" md="12">
                        <div class="text-h5 pb-5">
                            Here share the latest updates and trends in our field.
                        </div>
                        <div>
                            <b>
                                <p class="hoverable-text text-h4">Dive into our blog to discover a world of knowledge</p>
                            </b>
                            <transition-group name="radial-menu">
                                <div v-show="showMenu" class="radial-menu" :key="icon.icon"
                                    v-for="(icon, index) in menuIcons" :style="getIconStyle(index)">
                                    <v-img :src="icon.icon" width="100" />
                                </div>
                            </transition-group>
                        </div>
                    </v-col>
                </v-row>
            </v-sheet>
        </v-container>
    </v-app>
</template>
  
<script>
export default {
    data() {
        return {
            showMenu: false,
            menuIcons: [
                { icon: './images/blogs/popup/circle.svg', color: 'blue' },
                { icon: './images/blogs/popup/signal.svg', color: 'red' },
                { icon: './images/blogs/popup/cog.svg', color: 'green' },
                { icon: './images/blogs/popup/star.svg', color: 'orange' },
                { icon: './images/blogs/popup/star.svg', color: 'yellow' },
                { icon: './images/blogs/popup/target.svg', color: 'purple' },
                { icon: './images/blogs/popup/circle.svg', color: 'pink' },
                { icon: './images/blogs/popup/cog.svg', color: 'brown' },
            ],
        };
    },
    methods: {
        expandMenu() {
            this.showMenu = true;
        },
        collapseMenu() {
            this.showMenu = false;
        },
        handleClick(icon) {
            console.log(`Clicked ${icon.icon}`);
        },
        getIconStyle(index) {
            const numberOfIcons = this.menuIcons.length;
            const angle = (2 * Math.PI) / numberOfIcons;
            const radius = 350;
            const rotateBy = angle * index;
            const translateX = Math.round(radius * Math.cos(rotateBy));
            const translateY = Math.round(radius * Math.sin(rotateBy));
            return {
                transform: `translate(${translateX}px, ${translateY}px)`,
                animationDelay: `${index * 0.05}s`
            };
        }
    }
};
</script>
  
<style>
.text-container {
    position: relative;
    text-align: center;
}

.radial-menu {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
}

.radial-btn {
    margin: 0;
    animation: iconAnimation 0.5s ease-in-out forwards;
    opacity: 0;
    transition: transform 0.3s ease-in-out;
}

.radial-btn:hover {
    transform: scale(1.1);
}

@keyframes iconAnimation {
    from {
        transform: translateY(90px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
  