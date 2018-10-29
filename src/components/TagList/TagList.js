import React, { Component } from 'react';
import Slide from 'react-slick';
import PropTypes from 'prop-types';
import { Tag } from 'antd';
import './TagList.css';

// Remove this line if you are using babel-loader;
import 'antd/lib/tag/style/css';


/**
 * @render react
 * @name TagList
 * ## props:
 * @property {Array} languages - Array of languages to show on the slide. Must be 2 letters size!
 * @property {Number} slides - Number of languages showing per slide
 * @property {Number} scroll - How much languagues the "next" Button will return
 * @example
 * <TagList languages={['EN', 'KO', 'FR', 'PT', 'GE','EN', 'KO', 'FR', 'PT', 'GE']}></TagList>
 */
class TagList extends Component {
    state = {
       settings: {
           dots: false,
           infinite: false,
           slidesToShow: this.props.slides || 4,
           slidesToScroll: this.props.scroll || 4
       }
    }

    render() {
        return(
            <div>
                <Slide className='slider-container' {...this.state.settings}>
                        {this.props.languages.map(language => {
                            return (
                                <Tag key={language} className='tags-container'>
                                    {language}
                                </Tag>
                            )
                        })}
                </Slide>
            </div>
        )
    }
}

TagList.propTypes = {
    slides: PropTypes.number,
    scroll: PropTypes.number,
    languages: PropTypes.array.isRequired
}

export default TagList;