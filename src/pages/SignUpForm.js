import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      apellido: "",

      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    let apellido = target.apellido;

    this.setState({
      [name]: value,
      [apellido]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Nombres
            </label>
            <input
              type="text"
              id="name"
              className="FormField__Input"
              placeholder="Introduce tu nombre completo"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="apellido">
              Apellidos
            </label>
            <input
              type="text"
              id="apellido"
              className="FormField__Input"
              placeholder="Introduce tus apellidos"
              apellido="apellido"
              value={this.state.apellido}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Introduce tu contraseña"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Introduce tu correo electrónico"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input
                className="FormField__Checkbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              Estoy de acuerdo con los terminos de servicio{" "}
              <a href="" className="FormField__TermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Registrarse</button>{" "}
            <Link to="/sign-in" className="FormField__Link">
              Ya soy un usuario
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
