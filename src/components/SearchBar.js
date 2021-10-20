import React, { Component } from 'react'

export class SearchBar extends Component {
    state={term:''}
    inputChange=(event)=>{
        this.setState({term:event.target.value})
    }
    render() {
        return (
            <div className=" search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" 
                            value={this.state.term} 
                            onChange={this.inputChange}/>

                    </div>
                </form>

            </div>
          
        )
    }
}

export default SearchBar
