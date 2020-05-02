import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import InvestorsPageTemplate from '../components/HomePageTemplate'
import Layout from '../components/Layout'

const InvestorsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <InvestorsPageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        heading={frontmatter.heading}
        description={frontmatter.description}
        offerings={frontmatter.offerings}
      />
    </Layout>
  )
}

InvestorsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default InvestorsPage

export const pageQuery = graphql`
  query InvestorsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
        offerings {
          blurbs {
            title
            text
          }
        }
      }
    }
  }
`
