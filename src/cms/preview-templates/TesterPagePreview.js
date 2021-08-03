import React from 'react'
import PropTypes from 'prop-types'
import { TesterPagePreview } from '../../templates/tester-page'

const TesterPagePreview = ({ entry, widgetFor }) => (
  <TesterPagePreview
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

TesterPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TesterPagePreview

