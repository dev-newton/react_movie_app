import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="rmdb-header">
      <div className="rmdb-header-content">
        <Link to="/">
          <img
            className="rmdb-logo"
            src="./images/reactMovie_logo.png"
            alt="rmdb-logo"
          />
        </Link>
        <img
          className="rmdb-tmdb-logo"
          src="./images/tmdb_logo.png"
          alt="tmdb-logo"
        />
      </div>
    </div>
  );
};

// class Header extends React.Component {
//   state = {
//     alphaValue: "Oh yes, data from Alpha",
//     counter: 1
//   };

//   clickButton = () => {
//     console.log("click");
//     console.log(this.state.counter);

//     this.setState(previous => ({ counter: previous.counter + 1 }));
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.clickButton}>Click Me</button>
//         <Beta fromAlpha={this.state.alphaValue} />
//       </div>
//     );
//   }
// }

export default Header;
