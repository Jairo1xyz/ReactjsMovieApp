import React, { Fragment } from "react";

import Card from "../components/Card/Card";

const API = process.env.REACT_APP_API_KEY;

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchSubmit: '',
      error: '',
      loading: true
    };
  }

  componentDidMount() {
    this.setSearchText("batman");
  }

  handleSubmit(e) {
    e.preventDefault();
    //console.log("enviando...")
    if (!this.state.searchSubmit) {
      return this.setState({ error: "Please enter a valid text" });
    }
    this.setState({loading: true})

    this.setSearchText(this.state.searchSubmit);
  }

  async setSearchText(searchText) {
    //const res = await fetch("../../assets/data.json");
    const res = await fetch(`${API}&s=${searchText}`);
    const resJSON = await res.json();
    //console.log(resJSON);
    if (!resJSON.Search) {
      return this.setState({ error: "There are no results", searchSubmit: '', loading: false });
    }
    
    this.setState({ data: resJSON.Search, error: "", loading: false });
  }

  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-md-4 offset-md-4 p-4">
            {this.state.loading ? <h3 className="text-white">Loading...</h3> : (<Fragment>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={(e) =>
                  this.setState({ searchSubmit: e.target.value })
                }
                value={this.state.searchSubmit}
                autoFocus
              />
            </form>
            <p className="text-white">
              {this.state.error ? this.state.error : ""}
            </p>
            </Fragment>)}
            
          </div>
        </div>
        <div className="row">
          {this.state.data.map((movie, i) => {
            return <Card movie={movie} key={i} />;
          })}
        </div>
      </Fragment>
    );
  }
}

export default List;
