<template>
    <!-- Author: Jervin Macalawa -->
    <!-- Added on: 2023-10-25 -->
    <!-- Description: This section displays user information -->
    <div>
        <div>
            <HeroContainerBlog />
        </div>
        <div>
            <NewsContainer :news="items" @fetchDataHandler="fetchDataHandler()" />
        </div>
    </div>
</template>

<script>
import { useBlogsStore } from '~/stores/blogs/actions';
import HeroContainerBlog from '../../components/blogs/HeroContainerBlog.vue';
import NewsContainer from '../../components/blogs/NewsContainer.vue';
import { blog_store } from '~/stores/blogs/state';
import { mapWritableState } from 'pinia'
export default {
    computed:{
        ...mapWritableState(blog_store,['items'])
    },
    data() {
        return {
            news_data: []
        }
    },
    components: { HeroContainerBlog, NewsContainer },
    created() {
        this.fetchDataHandler();
    },
    methods: {
        async fetchDataHandler() {
            const blog_store = useBlogsStore()
            this.news_data = await blog_store.fetchBlogs()
            console.log(this.news_data)
        }
    }
}
</script>

