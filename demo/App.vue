<template>
    <div>
        <vuetable-2-wrapper
                :append-params="params"
                ref="table"
                api-url="https://vuetable.ratiw.net/api/users"
                :fields="fields"
                :pagination-info="true"
        >
            <!--Slots can be used as normal-->
            <template slot="gender" slot-scope="props">
                <div v-if="props.rowData.gender == 'F'">
                    Female
                </div>
                <div v-else>
                    Male
                </div>
            </template>
        </vuetable-2-wrapper>

    </div>
</template>

<script>
    import Table from './../src/Table'
    import 'bootstrap/dist/js/bootstrap.min'
    import 'bootstrap/dist/css/bootstrap.min.css'

    export default {
        components: {
            'vuetable-2-wrapper': Table,
        },

        data: () => ({
            fields: [
                {name: 'id'},
                {name: 'name'},
                {name: 'email'},
                {
                    title: "Gender",
                    name: "__slot:gender",
                }, {
                    title: "Address",
                    name: "address.line1",
                    // Callbacks need to be passed explicitly
                    callback(value) {
                        return value.toUpperCase();
                    },
                }
            ],
            params: {
                query: 'search',
            },
        }),
    }
</script>