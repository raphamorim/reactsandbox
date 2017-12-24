// import escapeTextContent from './escapeTextContent'

import React from 'react'

const parser = new DOMParser()

function parseReactElement(value) {
  const element = parser.parseFromString(value, "text/xml");
  if (!value || !value.length) {
    return false
  }

  let reactElement = false
  if (element && element.firstChild) {
    const child = element.firstChild
    const properties = {}
    if (child.getAttribute('src')) {
      properties['src'] = child.getAttribute('src')
      properties['style'] = {width:'100%'}
    }
    if (child.getAttribute('class')) {
      properties['className'] = child.getAttribute('class')
    }

    reactElement = React.createElement(child.tagName, properties)
  } else {
    console.warn('failed to parse string to DOMElement');
  }

  return reactElement;
}

export default parseReactElement
