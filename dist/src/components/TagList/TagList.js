'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSlick = require('react-slick');

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antd = require('antd');

require('./TagList.css');

require('antd/lib/tag/style/css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Remove this line if you are using babel-loader;


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
var TagList = function (_Component) {
    _inherits(TagList, _Component);

    function TagList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TagList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TagList.__proto__ || Object.getPrototypeOf(TagList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            settings: {
                dots: false,
                infinite: false,
                slidesToShow: _this.props.slides || 7,
                slidesToScroll: _this.props.scroll || 5
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TagList, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactSlick2.default,
                    Object.assign({ className: 'slider-container' }, this.state.settings),
                    this.props.languages.map(function (language) {
                        return _react2.default.createElement(
                            _antd.Tag,
                            { key: language, className: 'tags-container' },
                            language
                        );
                    })
                )
            );
        }
    }]);

    return TagList;
}(_react.Component);

TagList.propTypes = {
    slides: _propTypes2.default.number,
    scroll: _propTypes2.default.number,
    languages: _propTypes2.default.array.isRequired
};

exports.default = TagList;

//# sourceMappingURL=TagList.js.map