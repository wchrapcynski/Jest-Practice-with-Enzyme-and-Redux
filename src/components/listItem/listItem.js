import React, { Component } from "react";
import PropTypes from "prop-types";

class ListItem extends Component {
  render() {
    const { title, description } = this.props;

    if (!title) {
      return null;
    } else
      return (
        <div data-test="listItemComponent">
          <h2 data-test="componentTitle">{title}</h2>
          <div data-test="componentDescription">{description}</div>
        </div>
      );
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ListItem;
