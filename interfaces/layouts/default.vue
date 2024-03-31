<template>
  <!-- Author: Jervin Macalawa -->
  <!-- Added on: 2023-10-04 -->
  <!-- Updated on: 2023-11-04 by John Hyro Dalogdog -->
  <!-- Description: Layout section for web pages -->
  <v-app dark>
    <v-main>
      <AppBar />
      <v-container fluid class="pa-0">
        <NuxtPage />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="right_drawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer color="#194569;" height="70vh">
      <v-row no-gutters>
        <v-col cols="3" offset="1" class="justify-center align-center" align="center">
          <p class="underlined-text under-line text-lg-start mb-4">URewards</p>
          <p class="sub-text text-lg-start mb-4">Meet our Team</p>
          <p class="sub-text text-lg-start mb-4">Project Portfolio</p>
          <p class="sub-text text-lg-start mb-4">Teams & Client Reviews</p>
          <p class="underlined-text under-line text-lg-start mb-4">Services</p>
          <p class="sub-text text-lg-start mb-4">Web Development</p>
          <p class="sub-text text-lg-start mb-4">System Development</p>
          <p class="sub-text text-lg-start mb-4">Mobile Development</p>
          <p class="sub-text text-lg-start mb-4">Embedded Development</p>
        </v-col>
        <v-col cols="3" offset="1" class="justify-center align-center" align="center">
          <p class="underlined-text under-line text-lg-start mb-4">Company and Legal</p>
          <p class="sub-text text-lg-start mb-4">Contact Us</p>
          <p class="sub-text text-lg-start mb-4">About Us</p>
          <p class="sub-text text-lg-start mb-4">Our Customers</p>
          <p class="sub-text text-lg-start mb-4">Partners</p>
          <p class="sub-text text-lg-start mb-4">Privacy Policy</p>
          <p class="sub-text text-lg-start mb-4">Terms and Conditions</p>
          <p class="sub-text text-lg-start mb-4">Cookie Policy</p>
          <p class="sub-text text-lg-start mb-4">Non-Disclosure Agreement</p>
        </v-col>
        <v-col cols="2" offset="1">
          <div class="justify-center align-center" align="center">
            <p class="underlined-text under-line text-lg-start mb-4">Socials</p>
          </div>
          <div>
            <v-btn v-for="icon in footer_icons" :key="icon" class="mx-1 mb-5 icon-button" size="35px" icon>
              <a href="">
                <img :src="icon" alt="">
              </a>
            </v-btn>
          </div>
          <div class="justify-center align-center" align="center">
            <a class="sub-text" href="">
              <p class="text-lg-start mb-5">urewards@gmail.com</p>
            </a>
          </div>
          <div class="footer-logo-component">
            <img src="/images/general/web-footer/urewards-logo-footer.svg" alt="">
            <div class="rewards-text-overlay">
              <p class="rewards-text">Rewards</p>
            </div>
            <div class="redeem-text-overlay">
              <p class="redeem-text">Redeem your Hard Work</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from '~/components/layouts/AppBar.vue';
import FacebookIcon from '/images/general/web-footer/facebook-icon-footer.svg';
import TwitterIcon from '/images/general/web-footer/twitter-icon-footer.svg';
import InstagramIcon from '/images/general/web-footer/instagram-icon-footer.svg';
import LinkedinIcon from '/images/general/web-footer/linkedin-icon-footer.svg';
import GithubIcon from '/images/general/web-footer/githab-icon-footer.svg';
export default {
  components: { AppBar },
  data() {
    return {
      right: false,
      right_drawer: false,
      footer_icons: [
        FacebookIcon,
        TwitterIcon,
        InstagramIcon,
        LinkedinIcon,
        GithubIcon,
      ]
    };
  },
};
</script>
  

<style>
.icon-button {
  background-color: transparent;
}

.footer-logo-component {
  position: relative;
  display: inline-block;
  text-align: center;
}

.rewards-text-overlay {
  position: absolute;
  top: 10%;
  right: -60%;
  background-color: transparent;
  color: #fff;
  padding: 10px;
  background-color: transparent;
}

.rewards-text {
  font: 'Poppins' sans-serif;
  font-size: 30px;
  margin: 0;
}

.redeem-text-overlay {
  position: absolute;
  top: 30%;
  right: -63%;
  background-color: transparent;
  color: #fff;
  padding: 10px;
  background-color: transparent;
}

.redeem-text {
  font: 'Poppins' sans-serif;
  font-size: 11px;
  margin: 0;
}

.underlined-text {
  color: #fff;
  font: 'Poppins' sans-serif;
  font-size: 24px;
}

.under-line {
  border-bottom: #FEDC56 solid 4px;
}

.sub-text {
  color: #fff;
  font: 'Poppins' sans-serif;
  font-size: 16px;
}

.sub-text:hover {
  color: #FEDC56;
}
</style>

