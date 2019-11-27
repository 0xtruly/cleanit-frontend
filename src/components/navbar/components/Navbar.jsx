import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Row, Col } from "antd";
import { menuItems } from "../constants";

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
                {menuItems.map(menu => {
                  return (
                    <Menu.Item key={menu.key} className={menu.className}>
                      <Link className={menu.linkClassName} to={menu.linkTo}>
                        {menu.img ? (
                          <img src={menu.img} alt={menu.imgAlt} />
                        ) : (
                          menu.text
                        )}
                      </Link>
                    </Menu.Item>
                  );
                })}
              </Menu>
            </div>
          </Col>
        </Row>
      </nav>
    );
  }
}

export default Navbar;
