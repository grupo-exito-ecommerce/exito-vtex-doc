import React, { Component } from "react";
import PropTypes from "prop-types";

class ClassName extends Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    );
  }
}

ClassName.getSchema = () => {
  return {
    description: "description",
    title: "title",
    type: "object",
    properties: {
      autoplay: {
        default: true,
        isLayout: true,
        title: "autoplay",
        type: "boolean"
      },
      title: {
        default: "",
        isLayout: false,
        title: "title",
        type: "string"
      }
    }
  };
};

ClassName.propTypes = {
  /** Should change */
  autoplay: PropTypes.bool.isRequired,
  /** Title Component */
  title: PropTypes.string
};

ClassName.defaultProps = {
  autoplay: true,
  title: ""
};

export default ClassName;
