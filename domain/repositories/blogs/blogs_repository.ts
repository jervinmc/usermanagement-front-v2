import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API URL

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export default {
  async getBlogPosts(): Promise<any> {
    try {
      const response = await axiosInstance.get('/blog/posts');
      return response.data;
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      throw error;
    }
  },

  async getBlogPost(postId: number): Promise<any> {
    try {
      const response = await axiosInstance.get(`/blog/posts/${postId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching blog post with ID ${postId}:`, error);
      throw error;
    }
  },

  async createBlogPost(newPostData: any): Promise<any> {
    try {
      const response = await axiosInstance.post('/blog/posts', newPostData);
      return response.data;
    } catch (error) {
      console.error('Error creating a new blog post:', error);
      throw error;
    }
  },

  async updateBlogPost(postId: number, updatedPostData: any): Promise<any> {
    try {
      const response = await axiosInstance.put(`/blog/posts/${postId}`, updatedPostData);
      return response.data;
    } catch (error) {
      console.error(`Error updating blog post with ID ${postId}:`, error);
      throw error;
    }
  },

  async deleteBlogPost(postId: number): Promise<void> {
    try {
      await axiosInstance.delete(`/blog/posts/${postId}`);
      // No need to return data after a successful deletion
    } catch (error) {
      console.error(`Error deleting blog post with ID ${postId}:`, error);
      throw error;
    }
  },
};
