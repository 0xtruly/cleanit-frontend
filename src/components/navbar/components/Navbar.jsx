import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Row, Col } from "antd";
import Logo from "../images/placeholder-logo.svg";

/**
 * This is th Navbar component that spans the entire App.
 * It is a top level element and as such it is resident in the App.js file which is the entry system into the root index.js
 */

class Navbar extends Component {
  state = {
    current: "home"
  };

  /**
   * @function
   * @listens {event} to dtermine which of the navbar element is active using the "key" parameter on the menu item
   */
  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <nav>
        <Row type="flex" justify="center">
          <Col span={24}>
            <div className="navbar" data-aos="slide-down">
              <Menu
                className="navbar-group"
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
              >
                <Menu.Item className="nav-logo">
                  <Link to="/">
                    <img src={Logo} alt="logo" />
                  </Link>
                </Menu.Item>

                {/* Home Menu Item */}
                <Menu.Item key="home">
                  <Link to="/">Home</Link>
                </Menu.Item>

                {/* Home Menu Item */}
                <Menu.Item key="about">
                  <Link to="/">About</Link>
                </Menu.Item>

                {/* Sign Up Button */}
                <Menu.Item className="button-link">
                  <Link className="btn-primary" to="/sign-up">
                    Sign Up
                  </Link>
                </Menu.Item>

                {/* Login Button */}
                <Menu.Item className="button-link pr-0">
                  <Link className="btn-primary -alternate" to="/login">
                    Login
                  </Link>
                </Menu.Item>
              </Menu>
            </div>
          </Col>
        </Row>
      </nav>
    );
  }
}

export default Navbar;
