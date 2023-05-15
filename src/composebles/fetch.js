import axios from 'axios'
import {ref, computed, watch} from "vue";

const createService = (url = 'http://localhost:8000/api/products') => {
    const params = ref({})
    const page = ref(1)
    const isLoading = ref(true)
    const data = ref(null)
    const fetch = async () => {
        isLoading.value = true
        data.value = await axios.get(url, {params: {...params.value}}).then(res => res.data)
        console.log(data.value)
        isLoading.value = false
    }
    const totalPages = computed(() => {
        if (!data.value) return 1
        return data.value.count % 10 > 0 ? Math.floor(data.value.count / 10) + 1 : Math.floor(data.value.count / 10)
    })
    // onMounted(() => {
    //     fetch()
    // })
    watch(page, () => {
        params.value.page = page.value
    })
    watch(params, () => {
        fetch()
    }, {deep: true})

    return {isLoading, page, totalPages, data ,params}
}

export {createService as UseFetchProducts}
