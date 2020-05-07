import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ContactPageTemplate from '../components/ContactPageTemplate'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <ContactPageTemplate
        title={post.frontmatter.title}
        meta_title={post.frontmatter.meta_title}
        meta_description={post.frontmatter.meta_description}
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
        heading
      }
    }
  }
`
