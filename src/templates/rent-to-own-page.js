import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { HTMLContent } from '../components/Content'
import RentToOwnPageTemplate from '../components/RentToOwnPageTemplate'
import Layout from '../components/Layout'

const RentToOwnPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Helmet>
        <title>{post.frontmatter.meta_title}</title>
        <meta name='description' content={post.frontmatter.meta_description} />
      </Helmet>
      <RentToOwnPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

RentToOwnPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default RentToOwnPage

export const rentToOwnPageQuery = graphql`
  query RentToOwnPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
      }
    }
  }
`