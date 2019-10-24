/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ lang, meta }) {
  const titleStatic = "Portfolio | Rodave Joseph Bobadilla"
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={titleStatic}
      meta={[
        {
          name: `description`,
          content:
            "Rodave Joseph B. Bobadilla | Full-stack software engineer with years of experience in ReactJS, React Native, Angular, and other Javascript libraries and frameworks.",
        },
        {
          property: `og:title`,
          content: titleStatic,
        },
        {
          property: `og:description`,
          content:
            "Rodave Joseph B. Bobadilla | Full-stack software engineer with years of experience in ReactJS, React Native, Angular, and other Javascript libraries and frameworks.",
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `/images/rodave.png`,
        },
        {
          property: `og:url`,
          content: `rodave-dev.web.app`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "Rodave Joseph B. Bobadilla",
        },
        {
          name: `twitter:title`,
          content: titleStatic,
        },
        {
          name: `twitter:description`,
          content:
            "Rodave Joseph B. Bobadilla | Full-stack software engineer with years of experience in ReactJS, React Native, Angular, and other Javascript libraries and frameworks.",
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
