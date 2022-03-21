import logo from './logo.svg';
import './App.css';
import React from 'react';

class TryForm extends React.Component {
  constructor(props) {
    super(props);
	  this.state = {
      fullname: '',
      course: '',
      object: 'student',
      sendMail: true
	  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault();
  };
  render() {
    return (
      <div className="row">
        
        <div className="panel panel-info">
            <div className="panel-heading">
              <h3 className="panel-title">Study Form</h3>
            </div>
            <div className="panel-body">
                <form onSubmit={this.handleSubmit} method="POST" role="form">
                  <legend>Form Register</legend>
                  <div className="form-group">
                    <label htmlFor="fullname">Họ Tên</label>
                    <input
                    type="text"
                    name="fullname"
                    value={this.state.fullname}
                    onChange={this.handleChange}
                    className="form-control"
                    id="fullname"
                    placeholder="Fullname"
                    />

                    <label htmlFor="course">Khóa Học</label>
                    <select name="course" id="inputkhoahoc" className="form-control" required="required" value={this.state.course} onChange={this.handleChange}>
                      <option value="angular">Angular</option>
                      <option value="reactjs">React JS</option>
                      <option value="nodejs">Node JS</option>
                      <option value="php">PHP</option>
                    </select>

                    <label>Đối Tượng</label>
                    
                    <div className="radio">
                      <label>
                        <input checked={this.state.object === 'old_student'} onChange={this.handleChange} type="radio" name="object" id="input-1" value='old_student'/>
                        Học viên cũ
                      </label><br />
                      <label>
                        <input checked={this.state.object === 'student'} onChange={this.handleChange} type="radio" name="object" id="input-1" value='student'/>
                        Học sinh, sinh viên
                      </label><br />
                      <label>
                        <input checked={this.state.object === 'lucky'} onChange={this.handleChange} type="radio" name="object" id="input-1" value='lucky'/>
                        Người may mắn
                      </label>
                    </div>
                    <div className='checkbox'>
                      <label>
                        <input onChange={this.handleChange} checked={this.state.sendMail} type='checkbox' name="sendMail"/>Send mail
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
      
        </div>      
    );
  }
}

export default TryForm;




