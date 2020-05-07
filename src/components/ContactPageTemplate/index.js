import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { ContactForm } from '../forms'
import Content from '../Content'

const ContactPageTemplate = ({ title, subtitle, meta_title, meta_description, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-primary is-bold is-medium has-background'>
      <img className="hero-background" src={require('../../assets/img/summitPathHeader.jpg')}/>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section'>
      <div className='container'>
        <PageContent className='content' content={content} />
      </div>
    </section>
  </div>
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default ContactPageTemplate
