import React from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

const RentToOwnPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div>
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
      <section className='section section--gradient'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <PageContent className='content' content={content} />
                <ReactPlayer
                  url='https://www.youtube.com/watch?v=u4_nqAYmJGM'
                  className='react-player'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

RentToOwnPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default RentToOwnPageTemplate
