import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSong from "../queries/fetchSong";

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h1>{song.title}</h1>
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
