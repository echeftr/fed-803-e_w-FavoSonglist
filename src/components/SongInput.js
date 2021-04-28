import React from "react";
import InputField from "./InputField";
import InputSelect from "./InputSelect";
import GenreData from "./GenreData";
import RatingData from "./RatingData";

class SongInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      artist: "",
      genre: "",
      rating: 0,
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleArtistChange = this.handleArtistChange.bind(this);
    this.handleGenreChange = this.handleGenreChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(title) {
    this.setState(() => {
      return {
        title: title,
      };
    });
  }

  handleArtistChange(artist) {
    this.setState(() => {
      return {
        artist: artist,
      };
    });
  }

  handleGenreChange(genre) {
    this.setState(() => {
      return {
        genre: genre,
      };
    });
  }

  handleRatingChange(value) {
    this.setState(() => {
      return {
        rating: value,
      };
    });
  }

  handleSubmit() {
    if (
      this.state.title !== null &&
      this.state.title !== undefined &&
      this.state.title.length > 0 &&
      this.state.artist !== null &&
      this.state.artist !== undefined &&
      this.state.artist.length > 0 &&
      this.state.genre !== null &&
      this.state.genre !== undefined &&
      this.state.genre.length > 0 &&
      this.state.rating !== null &&
      this.state.rating !== undefined &&
      this.state.rating !== 0
    ) {
      this.props.onSubmit({
        title: this.state.title,
        artist: this.state.artist,
        genre: this.state.genre,
        rating: this.state.rating,
      });
      this.setState(() => {
        return {
          title: "",
          artist: "",
        };
      });
    }
  }

  render() {
    return (
      <div className="songInput">
        <form>
          <label>Title:</label>
          <InputField
            id="input-title"
            value={this.state.title}
            placeholder="title"
            onChange={this.handleTitleChange}
          />
          <label>Artist:</label>
          <InputField
            id="input-artist"
            value={this.state.artist}
            placeholder="artiest"
            onChange={this.handleArtistChange}
          />
          <label>Genre:</label>
          <InputSelect
            id="input-genre"
            options={GenreData}
            onSelectChange={this.handleGenreChange}
          />
          <label>Rate:</label>
          <InputSelect
            id="input-rating"
            options={RatingData}
            onSelectChange={this.handleRatingChange}
          />
        </form>
        <button
          className="add-button"
          type="submit"
          onClick={this.handleSubmit}
        >
          Add Song
        </button>
      </div>
    );
  }
}

export default SongInput;
