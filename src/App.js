import './App.css';
import React from 'react';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import tasks from './mocks/tasks';
import {filter, includes, orderBy as funcOrderBy, remove} from 'lodash';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: tasks,
      isShowForm: false,
      strSearch: "",
      orderBy: "name",
      orderDir: "asc"
    }
    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(item) {
    let data = this.state.items.items;
    data.push({
      id: uuidv4(),
      name: item.name,
      level: item.level, // 0 Small, 1 Medium, 2 Hight
    });
    this.setState({
      items: data
    });
    console.log(this.state.items);
  }
  handleSort(orderBy, orderDir) {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    });
  };
  handleDelete(id) {
    let items = this.state.items.items;
    remove(items, (item) => {
      return item.id === id;
    });
    this.setState(items);
  }
  handleToggleForm() {
    this.setState({
      isShowForm: !this.state.isShowForm
    });
  };
  closeForm() {
    this.setState({
      isShowForm: false
    });
  };
  handleSearch = (value) => {
    this.setState({
      strSearch: value
    });
  };
  render() {
    let elmForm = null;
    let itemsOrigin = [...this.state.items.items];
    let items = [];
    let {orderBy, orderDir, isShowForm, strSearch} = this.state;
    
    
    // SEARCH
    items = filter(itemsOrigin, (item) => {
      return includes(item.name.toLowerCase(), strSearch.toLowerCase());
    });

    // SORT
    items = funcOrderBy(items, [orderBy], [orderDir]);

    // if (search.length > 0) {
    //   itemsOrigin.forEach(item => {
    //     if (item.name.toLowerCase().indexOf(search) !== -1) {
    //       items.push(item);
    //     }
    //   });
    // } else {
    //   items = itemsOrigin;
    //   console.log("search default");
    // }
    
    if (isShowForm === true) {
        elmForm = <Form onClickSubmit={this.handleSubmit} onClickCancel={this.closeForm}/>;
    }
    return (
      <div>
        {/* TITLE: START */}
        <Title/>
        {/* TITLE: END */}

        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Control
          orderBy={orderBy}
          orderDir={orderDir}
          onClickSort={this.handleSort}
          onClickSearchGo={this.handleSearch}
          onClickAdd={this.handleToggleForm} 
          isShowForm={this.state.isShowForm}
        />
        {/* CONTROL (SEARCH + SORT + ADD) : END */}

        {/* FORM: START */}
        {elmForm}
        {/* FORM: END */}

        {/* LIST: START */}
        <List 
          onClickDelete={this.handleDelete}
          items={items}
        />
        {/* LIST: END */}
      </div>
    );
  }
  
}

export default App;
