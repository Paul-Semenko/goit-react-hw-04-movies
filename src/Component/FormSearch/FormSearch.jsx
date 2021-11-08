import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import s from "./FormSearch.module.css";

const FormSearch = ({ onFormSubmit }) => {
  const [searchMovie, setSearchMovie] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.currentTarget;
    setSearchMovie(value.toLowerCase());
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (searchMovie.trim() === "") {
      toast.error("Please enter your request", { autoClose: 3000 });
      return;
    }
    onFormSubmit(searchMovie);
    resetForm();
  };

  const resetForm = () => {
    setSearchMovie("");
  };

  return (
    <form className={s.SearchForm} onSubmit={handleSubmitForm}>
      <button type="submit" className={s.SearchForm_button}>
        <span className={s.SearchForm_button_label}>Search</span>
      </button>

      <input
        className={s.SearchForm_input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        name="searchMovie"
        value={searchMovie}
        onChange={handleInputChange}
      />
    </form>
  );
};

FormSearch.propTypes = {
  onFormSubmit: PropTypes.func,
};

export default FormSearch;
