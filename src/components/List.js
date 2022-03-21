import React from "react";
import Item from './Item';

class List extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
      let {items, onClickDelete} = this.props;
      let elmItems = items.map(function (item, index) {
          return (
            <Item key={index} item={item} index={index} handleDelete={onClickDelete}/>
          );
        });
        return (
            <div className="panel panel-success">
  <div className="panel-heading">List Task</div>
  <table className="table table-hover ">
    <thead>
      <tr>
        <th style={{ width: "10%" }} className="text-center">
          #
        </th>
        <th>Task</th>
        <th style={{ width: "20%" }} className="text-center">
          Level
        </th>
        <th style={{ width: "20%" }}>Action</th>
      </tr>
    </thead>
    <tbody>
      {elmItems}
    </tbody>
  </table>
</div>
        );
    }
}

export default List;