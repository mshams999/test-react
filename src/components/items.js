import React from "react";
class Items extends React.Component {
  render() {
    const {data} = this.props;
    const theItems = data.map( item => {
        return (
            <div>
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.age}</p>
            </div>
        )
    })
    return (
        <div>
            {theItems}
        </div>
    )
}

export default Items;