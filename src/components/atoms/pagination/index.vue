<template>
    <div class="pagination">
        <ul v-show="totalPage > 1">
            <li
                    v-show="currentPage > 1"
                    class="btn prevStart"
                    @click="changeCurrentPage(1)"
            >
                <double-arrow />
            </li>
            <li
                    v-show="currentPage > 1"
                    class="btn prev"
                    @click="changeCurrentPage(currentPage - 1)"
            >
                <arrow />
            </li>
            <li
                    class="number"
                    v-show="showFirstPageIndex"
                    @click="changeCurrentPage((currentPage = 1))"
            >
                1
            </li>
            <li
                    class="dots"
                    v-show="showLessDots"
                    @click="changeCurrentPage(startPaginatorIndex - 1)"
            >
                ...
            </li>
            <li
                    v-for="n in pageRange"
                    :key="n"
                    :class="['number', { active: n === currentPage }]"
                    @click="changeCurrentPage(n)"
            >
                {{ n }}
            </li>
            <li
                    class="dots"
                    v-show="showMoreDots"
                    @click="changeCurrentPage(endPaginatorIndex + 1)"
            >
                ...
            </li>
            <li
                    class="number"
                    v-show="showLastPageIndex"
                    @click="changeCurrentPage(totalPage)"
            >
                {{ totalPage }}
            </li>
            <li
                    v-show="currentPage !== totalPage"
                    class="btn next"
                    @click="changeCurrentPage(currentPage + 1)"
            >
                <arrow />
            </li>
            <li
                    v-show="currentPage !== totalPage"
                    class="btn nextEnd"
                    @click="changeCurrentPage(totalPage)"
            >
                <double-arrow />
            </li>
        </ul>
    </div>
</template>

<script >
import { computed, ref, watch } from "vue"
import DoubleArrow from "@/assets/icons/double-arrow.svg?component"
import Arrow from "@/assets/icons/arrow.svg?component"

export default {
    name: "PaginationButton",
    components: { DoubleArrow, Arrow },
    props: {
        totalPage: {
            type: Number,
            default: 1,
        },
        modelValue: {
            type: Number,
            default: 1,
        },
    },
    emits: ["changeCurrentPage", "update:modelValue"],
    setup(props, { emit }) {
        const currentPage = ref(props.modelValue)
        const changeCurrentPage = (newPage) => {
            currentPage.value = newPage
            emit("update:modelValue", currentPage.value)
            emit("changeCurrentPage", newPage)
        }

        watch(
            () => props.modelValue,
            (newVal) => {
                currentPage.value = newVal
            }
        )

        const startPaginatorIndex = computed(() => {
            let startIndex = Math.floor(currentPage.value / 5) * 5 + 1
            // startIndex can be greater than the currentPage if the currentPage is divisible by 5
            if (startIndex > currentPage.value) {
                startIndex = Math.floor((currentPage.value - 1) / 5) * 5 + 1
            }
            return startIndex
        })

        const endPaginatorIndex = computed(() => {
            let endIndex = Math.ceil(currentPage.value / 5) * 5
            // when endIndex is greater than the pageCount we're at the end of our range
            if (endIndex > props.totalPage) {
                endIndex = props.totalPage
            }
            return endIndex
        })

        const showLessDots = computed(() => {
            return currentPage.value > 5
        })

        const showMoreDots = computed(() => {
            return props.totalPage > 5 && endPaginatorIndex.value !== props.totalPage
        })

        const prevPage = computed(() => {
            return currentPage.value > 1
        })

        const nextPage = computed(() => {
            return currentPage.value !== props.totalPage
        })

        const showFirstPageIndex = computed(() => {
            return currentPage.value > 5
        })

        const showLastPageIndex = computed(() => {
            return props.totalPage > 5 && endPaginatorIndex.value !== props.totalPage
        })

        const pageRange = computed(() => {
            return Array.from(
                {
                    length: endPaginatorIndex.value + 1 - startPaginatorIndex.value,
                },
                (_, i) => startPaginatorIndex.value + i
            )
        })

        return {
            currentPage,
            showLessDots,
            showMoreDots,
            prevPage,
            nextPage,
            showFirstPageIndex,
            showLastPageIndex,
            pageRange,
            startPaginatorIndex,
            endPaginatorIndex,
            changeCurrentPage,
        }
    },
}
</script>

<style lang="scss" scoped src="./index.scss" />
