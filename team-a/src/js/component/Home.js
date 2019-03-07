import HeadNavBar from './HeadNavBar'
import Content from './Content'

export default Vue.component('app', {
    template: '<div><HeadNavBar /><Content /></div>',
    components: {
        HeadNavBar,
        Content
    }
})