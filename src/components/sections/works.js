import React from "react"
import Card from "../card"
import Grid from "@material-ui/core/Grid"
import Qm from "./worksContent/queenMary"

let items = [
  {
    img: "images/works/qm.png",
    title: "The Queen Mary",
    desc:
      "The historic Queen Mary is home to a 343-room Art Deco Hotel, where guests relive the excitement of cruising in the style of the 1930's without ever leaving port.",
    learn: "#",
    content: Qm,
  },
  {
    img: "images/works/holli.png",
    title: "Holliblu",
    desc:
      "HOLLIBLU is consistently dedicated to creating a supportive and thriving healthcare ecosystem. We believe that when nurses thrive so does ...",
    learn: "#",
  },
  {
    img: "images/works/sierra.png",
    title: "Sierra Labs",
    desc:
      "HOLLIBLU is consistently dedicated to creating a supportive and thriving healthcare ecosystem. We believe that when nurses thrive so does ...",
    learn: "#",
  },
  {
    img: "images/works/redbullwing.png",
    title: "Redbull",
    desc:
      "HOLLIBLU is consistently dedicated to creating a supportive and thriving healthcare ecosystem. We believe that when nurses thrive so does ...",
    learn: "#",
  },
  {
    img: "images/works/gd.png",
    title: "Green Direct",
    desc:
      "HOLLIBLU is consistently dedicated to creating a supportive and thriving healthcare ecosystem. We believe that when nurses thrive so does ...",
    learn: "#",
  },
  // {
  //   img:
  //     "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80",
  //   title: "Lorem ipsum",
  //   desc:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolor praesentium at quod autem omnis",
  //   learn: "#",
  // },
]

const Works = () => {
  let delay = 0
  items = items.map(function(item, index) {
    delay += 200
    return (
      <Grid item key={index} className="cardContainer">
        <Card {...item} delay={delay} />
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
        {/* <Grid container spacing={8}>
          <Grid item style={{ width: "100%" }}>
            <ul className="actions">
              <li>
                <a href="generic.html" className="button primary">
                  Read more
                </a>
              </li>
            </ul>
          </Grid>
        </Grid> */}
      </div>
    </section>
  )
}

export default Works
