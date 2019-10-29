import React from "react"
import Masonry from "react-masonry-css"
import Card from "../card"

const Works = () => {
  let items = [
    { id: 1, name: "My First Item" },
    { id: 2, name: "Another item" },
    { id: 3, name: "Third Item" },
    { id: 4, name: "Here is the Fourth" },
    { id: 5, name: "High Five" },
  ]
  items = items.map(function(item) {
    // return <div key={item.id}>{item.name}</div>
    return <Card />
  })
  return (
    <Masonry
      breakpointCols={{ default: 4, 800: 2 }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items}
    </Masonry>
  )
}

export default Works
