import {Vue, Component} from 'vue-property-decorator' 

@Component
export default class Error extends Vue {
    render() {
        return (
            <div>Error {this.$route.params.type}</div>
        )
    }
}