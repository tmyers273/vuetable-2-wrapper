export default {
    table: {
        tableWrapper: '',
        tableHeaderClass: 'mb-0',
        tableBodyClass: 'mb-0',
        tableClass: 'table table-bordered table-hover',
        loadingClass: 'loading',
        ascendingIcon: 'fa fa-chevron-up',
        descendingIcon: 'fa fa-chevron-down',
        ascendingClass: 'sorted-asc',
        descendingClass: 'sorted-desc',
        sortableIcon: 'fa fa-sort',
        detailRowClass: 'vuetable-detail-row',
        handleIcon: 'fa fa-bars text-secondary',
        renderIcon(classes) {
            return `<i class="${classes.join(' ')}"></span>`
        }
    },
    pagination: {
        infoClass: 'pull-left',
        wrapperClass: 'vuetable-pagination pagination pull-right',
        activeClass: 'btn-primary active',
        disabledClass: 'disabled',
        pageClass: 'page-link btn btn-border',
        linkClass: 'page-link btn btn-border',
        icons: {
            first: '',
            prev: '',
            next: '',
            last: '',
        },
    }
}