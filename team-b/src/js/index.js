import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import HeadNavbar from '../components/HeadNavbar'
import Content from '../components/Content'

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </div>
  </BrowserRouter>
)

const Home = () => (
  <div>
    <HeadNavbar />
    <Content />
  </div>
)
const About = () => {
  return <div>About</div>
}

// class FApp extends React.Component {
//   render() {
//     return (
//       <div className="shopping-list">
//         <h1>Shopping List for {this.props.name}</h1>
//         <ul>
//           <li>Instagram</li>
//           <li>WhatsApp</li>
//           <li>Oculus</li>
//         </ul>
//       </div>
//     );
//   }
// }

ReactDOM.render(<App />, document.getElementById("root"));

