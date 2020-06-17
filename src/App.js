import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.scss";
import { fetchPosts } from "./actions/index";
import Header from "./components/header/header";
import Headline from "./components/headline/headline";
import SharedButton from "./components/button/button";
import ListItem from "./components/listItem/listItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch,
    };
    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            description="Click the button to render posts"
          />
          <SharedButton {...configButton} />
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  description: body,
                };
                return <ListItem key={index} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.postsReducer.posts ? state.postsReducer.posts : [],
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);
