import React from "react"

const Item = ({ item }) => {
  return (
    <div className="item">
      <span>{item.type}</span>
      <span>{item.name}</span>
      <span>{item.highPrice}</span>
      <span>{item.lowPrice}</span>
    </div>
  )
}

export default Item
