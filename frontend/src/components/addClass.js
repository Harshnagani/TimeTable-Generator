import React from "react";
import newaxios from '../newaxios';
import auth from "../utils/auth";
import "../styles/addform.scss";

class AddClass extends React.Component {
  constructor() {
    super();
    this.handleAddClass = this.handleAddClass.bind(this);
  }

  async handleAddClass(e) {
    //Preventing default event handeling
    e.preventDefault();
    // Calling event.persist() so that our event still exist after the HTTP request
    e.persist();
    const className = e.target.elements.className.value;
    const session = e.target.elements.session.value;
    const section = e.target.elements.section.value;
    const classDetails = {
      className,
      session,
      section,
    };

    try {
      const authToken = auth.getAuthToken();
      const config = {
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${authToken}`,
        },
      };
      const body = JSON.stringify(classDetails);
      const res = await newaxios.post("/api/class", body, config);
      console.log(res.data);

      e.target.elements.className.value = '';
      e.target.elements.session.value = '';
      e.target.elements.section.value = '';

    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="addform">
        <form onSubmit={this.handleAddClass}>
          <h1 className="addform__heading">Add CLass</h1>
          <input
            className="addform__input addform__input--full"
            type="text"
            placeholder="Class Name"
            name="className"
          />
          <input
            className="addform__input  addform__input--half addform__input--left"
            type="text"
            placeholder="Alloted Session"
            name="session"
          />
          <input
            className="addform__input addform__input--half addform__input--right"
            type="text"
            placeholder="Alloted Section"
            name="section"
          />
          <input
            className="addform__btn"
            type="submit"
            name="submit"
            value="ADD CLASS"
          />
        </form>
      </div>
    );
  }
}

export default AddClass;
