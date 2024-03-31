
<template>
    <!-- Author: Jervin Macalawa -->
    <!-- Added on: 2023-10-24 -->
    <!-- Updated on: 2023-10-29 by Jervin Macalawa -->
    <!-- Description: This section displays hero section -->
    <div>
        <v-sheet class="custom-sheet pa-16">
            <div class="px-10">
                <v-row>
                    <v-col cols="7" align-self="center">
                        <div class="mb-16">
                            <div class="text-h3 title-hero">
                                <b>Elevate Your Business:</b>
                            </div>
                            <div class="text-h5 text-white pb-5">
                                <b>URewards - Where Innovation Meets Reward</b>
                            </div>
                            <div>
                                <v-btn class="button-text" variant="outlined" color="#FEDC56">Contact Us</v-btn>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="5" class="pt-16">
                        <v-img src="images/home/hero/man-phone.svg" height="120vh" width="70vw" />
                    </v-col>
                </v-row>
            </div>
        </v-sheet>
    </div>
</template>
<script>
export default {

}
</script>

<style scoped>
.title-hero {
    color: #FEDC56
}

.custom-sheet {
    background: #194569;
    position: relative;
    height: 135vh;
    overflow: hidden;
}

.button-text {
    text-transform: none;
}

.custom-sheet::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #FEDC56;
    clip-path: polygon(0 100%, 100% 100%, 100% 70%, 0% 100%);
}
</style>