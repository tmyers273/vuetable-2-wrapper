<template>
    <div>
        <vuetable ref="vuetable"
                  :append-params="appendParams"
                  :api-url="apiUrl"
                  :fields="fields"
                  :per-page="perPage"
                  pagination-path=""
                  @vuetable:pagination-data="onPaginationData"
                  v-on="$listeners"
                  v-bind="$attrs"
        >
            <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope">
                <slot :name="slot" v-bind="scope"/>
            </template>
        </vuetable>
        <div class="vuetable-pagination-container">
            <div>
                <vuetable-pagination-info v-if="paginationInfo" ref="paginationInfo"
                ></vuetable-pagination-info>
            </div>

            <vuetable-pagination ref="pagination"
                                 :css="CSS.pagination"
                                 @vuetable-pagination:change-page="onChangePage"
            ></vuetable-pagination>
        </div>
    </div>
</template>

<script>
    import CSS from './css'
    import Vuetable from 'vuetable-2/src/components/Vuetable'
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
    import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'

    export default {
        name: 'vuetable-2-wrapper',

        components: {
            Vuetable,
            VuetablePagination,
            VuetablePaginationInfo,
        },

        data: () => ({
            CSS,
        }),

        methods: {
            onChangePage (page) {
                this.$refs.vuetable.changePage(page)
            },

            onPaginationData (paginationData) {
                this.$refs.pagination.setPaginationData(paginationData)
                this.$refs.paginationInfo.setPaginationData(paginationData)
            },

            reload() {
                this.$refs.vuetable.reload();
            },

            toggleDetailRow(id) {
                this.$refs.vuetable.toggleDetailRow(id)
            },
        },

        props: {
            appendParams: {
                type: Object,
            },
            apiUrl: {
                type: String,
                default: ''
            },
            fields: {
                type: Array,
                required: true
            },
            // Whether or not to show pagination info
            paginationInfo: {
                type: Boolean,
                default: true,
            },
            perPage: {
                type: Number,
                default: 10
            },
        }
    }
</script>

<style>
    .vuetable-pagination-container{
        display: flex;
        justify-content: space-between;
        padding: 12px 12px;
        align-items: center
    }
</style>