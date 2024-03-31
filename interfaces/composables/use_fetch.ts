export const useApiV1 = async (path: String) => {
    const api_base = useRuntimeConfig().public.apiBase;
    return await useFetch(() => `${api_base}${path}`)
  }