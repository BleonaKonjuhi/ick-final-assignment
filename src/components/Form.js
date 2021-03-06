import React, { Component } from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.props.handleFormSubmit}>
            <div className="inputTitle">
          <label htmlFor="title">
          Title:</label>
          <input id="title" value={this.props.newTitle} 
            type="text" name="title"
            onChange={this.props.handleInputChange}
            placeholder="Enter the title" />
          
          </div>
          <div className="textareaContet">
          <label  htmlFor="content">
          Content:</label>
          <textarea id="content" value={this.props.newContent} 
             name="content"
            onChange={this.props.handleInputChange}
            placeholder="Add some contents"
            rows="3" cols="21" />
          
          </div>
          <div>
          <button id="addItem" type="submit" value="Submit">Add Item</button>
          </div>
        </form>
        </div>
      
    );
  }
}

export default Form;