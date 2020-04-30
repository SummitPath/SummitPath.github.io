import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import RentToOwnPageTemplate from '../components/RentToOwnPageTemplate'
import Layout from '../components/Layout'

const RentToOwnPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <RentToOwnPageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

RentToOwnPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default RentToOwnPage

export const rentToOwnPageQuery = graphql`
  query RentToOwn($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
