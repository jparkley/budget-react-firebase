import Item from "./Item"

const Items = ({ items }) => {
  return (
    <div className="row">
      <div className="row content">
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Items
