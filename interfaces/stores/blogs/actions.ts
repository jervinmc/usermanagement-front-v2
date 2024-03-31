// Author: Jervin Macalawa
// Added on: 2023-10-25
// Description: This section displays user information
import { blog_store } from "./state";

export const useBlogsStore = defineStore({
  id: 'blog',
  actions: {
    async fetchBlogs(item: Object){
      const {data: blogs} = await useApiV1('news').catch((error)=>error.data);
      const blogStore = blog_store();
      blogStore.items = blogs.value;
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBlogsStore, import.meta.hot))
}