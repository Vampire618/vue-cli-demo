import * as _ from 'lodash';
var page = 'subpageA';

if (page === 'subpageA') {
    import(
        /* webpackChunkName:'subpageA' */
        /* webpackMode:lazy */
        './subPageA'
    ).then(function(subPageA) {
        console.log(subPageA)
    })
} else if (page === 'subPageB') {
    import(
        /* webpackChunkName:'subpageB' */
        /* webpackChunkName:'subpageB' */
        './subPageB'
    ).then(function(subPageB) {
        console.log(subPageB)
    })
}

export default 'pageA';
