// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// Include the Main Component
import Main from './Components/Main';

// This code here allows us to render our main component (in this case "Main")
const app = () =>
  <Router>
    <div>
      <Main />
    </div>
  </Router>;

export default app;