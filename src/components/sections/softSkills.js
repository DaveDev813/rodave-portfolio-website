import React from "react"
import Fade from "react-reveal/Fade"

const data = [
  {
    title: "Decision making",
    icon: "fa-thumbs-up",
    quote: "Possesses outstanding decision making and problem solving skills.",
  },
  {
    title: "Attention to detail",
    icon: "fa-glasses",
    quote:
      "Great attention to detail and concern for quality of projects, codes and accuracy of data.",
  },
  {
    title: "Passion",
    icon: "fa-fire",
    quote:
      "I have the passion in learning new technologies and trends which I adapt to help and improve my projects.",
  },
  {
    title: "Dedication",
    icon: "fa-grin-stars",
    quote: "I am self-directed, self-motivated, and work great within a team.",
  },
  {
    title: "Communication",
    icon: "fa-link",
    quote:
      "Possess great communication skills and interpersonal skills specially in coordinating with team members, and can provide adequate documentation on projects.",
  },
  {
    title: "Resilience",
    icon: "fa-gem",
    quote: "Can work under pressure with minimal supervision.",
  },
]

const SoftSkills = () => {
  let delay = 0
  return (
    <section id="one" className="wrapper style2">
      <div className="inner">
        <h1 class="major">Soft Skills</h1>
        <blockquote>
          Good code is its own best documentation. As you're about to add a
          comment, ask yourself, "How can I improve the code so that this
          comment isn't needed?" Improve the code and then document it to make
          it even clearer. - someone from the internet
        </blockquote>
        <Fade ssrFadeout>
          <div className="features">
            {data.map(({ title, icon, quote }) => {
              delay += 200
              const dataDel = delay + 200
              return (
                <section>
                  <Fade ssrFadeout up delay={delay}>
                    <span className={`icon major solid ${icon}`} />
                  </Fade>
                  <Fade ssrFadeout delay={dataDel}>
                    <div>
                      <h3>{title}</h3>
                      <p>{quote}</p>
                    </div>
                  </Fade>
                </section>
              )
            })}
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default SoftSkills
