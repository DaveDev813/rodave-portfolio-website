import React from "react"
import Card from "../card"
import Grid from "@material-ui/core/Grid"

const Works = () => {
  let items = [
    { id: 1, name: "My First Item" },
    { id: 2, name: "Another item" },
    { id: 3, name: "Third Item" },
    { id: 4, name: "Here is the Fourth" },
    { id: 5, name: "High Five" },
  ]
  items = items.map(function(item, index) {
    return (
      <Grid key={index} item>
        <Card />
      </Grid>
    )
  })
  return (
    <section id="works" className="wrapper style2 fade-up">
      <div className="inner">
        <h1 class="major">Works</h1>
        <Grid
          container
          spacing={8}
          justify="space-evenly"
          alignContent="space-evenly"
        >
          {items}
        </Grid>
      </div>
    </section>
  )
}

export default Works
