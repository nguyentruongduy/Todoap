import html from'../core.js'
import { connect } from '../store.js'
import Header from '../componemt/Header.js'
import TodoList from '../componemt/TodoList.js'
import Footer from '../componemt/Footer.js'

function App({todos}) {
    return html `
       <section class="todoapp">
            ${Header()}
            ${todos.length > 0 && TodoList()}
            ${todos.length > 0 && Footer()}
       </section>
    `
}
export default connect()(App)