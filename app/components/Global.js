import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Gallery from './Gallery';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import BookDetail from './BookDetail';



class Global extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      items: []
    }
  }
    search(){
      const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
      fetch(`${BASE_URL}${this.state.query}&maxResults=40`, { method: 'GET' })
        .then(response => response.json())
        .then(json => {
          let { items } = json;
          this.setState({items})
        });
      
    }

    searchByCategory(){
      const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
      fetch(`${BASE_URL}+incategories:${this.state.queryCategory}&maxResults=40`, { method: 'GET' })
        .then(response => response.json())
        .then(json => {
          let { items } = json;
          this.setState({items})
        });
      
    }

    render(){
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
            <div className="Global">
                <h2>Book Explorer!</h2>
                <FormGroup>
                 <InputGroup className="search-book">
                   <FormControl type="text" placeholder="Search for a book"
                   onChange={event => this.setState({query: event.target.value})}
                   onKeyPress={event => {
                     if(event.key === 'Enter'){
                       this.search();
                     }
                   }}
                   />

                    <InputGroup.Addon onClick={() =>this.search()}>
                      <Glyphicon glyph="search"></Glyphicon>
                    </InputGroup.Addon>

                 </InputGroup>
                 <InputGroup className="search-category">
                   <FormControl type="text" placeholder="Search by category"
                   onChange={event => this.setState({queryCategory: event.target.value})}
                   onKeyPress={event => {
                     if(event.key === 'Enter'){
                       this.searchByCategory();
                     }
                   }}
                   />

                    <InputGroup.Addon onClick={() =>this.searchByCategory()}>
                      <Glyphicon glyph="search"></Glyphicon>
                    </InputGroup.Addon>

                 </InputGroup>
               </FormGroup>
               
                <Gallery items={this.state.items}/> 

              </div>
              </Route>
          
              <Route path="/BookDetail/:id">
                <BookDetail items={this.state.items}/>
              </Route>

          </Switch>
        </BrowserRouter>
      )
    }
}

export default Global;
