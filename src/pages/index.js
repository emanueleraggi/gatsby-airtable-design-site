import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects,
} from "../components"
import SEO from "../components/seo"
const HomePage = ({ data }) => {
  // console.log(data);
  const {
    allAirtable: {nodes:projects}
  } = data;

  return (
    <Layout>
      <Hero />
      <About />
      <Projects projects={projects} title="latest projects"/>
      <Survey />
      <Slider />
    </Layout>
  )
}


export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Projects"}}, limit: 3, sort: {fields: data___date, order: DESC}) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`




export default HomePage
