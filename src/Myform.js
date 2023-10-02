import React, { Component } from 'react';
import './userform.css';

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      responseMessage: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
    };

    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        this.setState({ responseMessage: data.message });
      } else {
        console.error('Failed to submit form data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="inpform">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit" className="btt1">
            Book Now
          </button>
        </form>
        {this.state.responseMessage && (
          <div>
            <p>Response from Flask:</p>
            <p>{this.state.responseMessage}</p>
          </div>
        )}
      </div>
    );
  }
}

export default MyForm;
