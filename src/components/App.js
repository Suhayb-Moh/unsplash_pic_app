import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import './SearchBar.css';
import ImageList from "./ImageList";
import Header from "./Header";

class App extends React.Component {
    state = { images: [], imagedescriptions: '' };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term},
        }); 
        this.setState({images: response.data.results});
    }
    render () {
        return <div className="ui container">
            <Header /> 
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <div className="ui icon message">
                <div className="content">
                    <div className="header">
                        <ImageList images={this.state.images}/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default App;
