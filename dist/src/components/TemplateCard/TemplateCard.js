'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactGridLayout = require('react-grid-layout');

var _reactGridLayout2 = _interopRequireDefault(_reactGridLayout);

var _antd = require('antd');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./TemplateCard.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TemplateCard = function (_React$Component) {
    _inherits(TemplateCard, _React$Component);

    function TemplateCard(props) {
        _classCallCheck(this, TemplateCard);

        var _this = _possibleConstructorReturn(this, (TemplateCard.__proto__ || Object.getPrototypeOf(TemplateCard)).call(this, props));

        _this.state = {
            template: null
        };
        return _this;
    }

    _createClass(TemplateCard, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'generic-card-container' },
                this.state.template && _react2.default.createElement(
                    _antd.Card,
                    { className: 'generic-card', style: this.state.template.styles },
                    _react2.default.createElement(
                        _reactGridLayout2.default,
                        {
                            className: 'generic-card',
                            layout: this.state.template.rows,
                            cols: this.props.cols || 12,
                            rowHeight: this.props.rowHeight || 15,
                            width: this.props.width || 220,
                            margin: this.props.margin || [0, 0] },
                        this.state.template.rows.map(function (item) {
                            return _react2.default.createElement(
                                'div',
                                { key: item.i },
                                item.component
                            );
                        })
                    )
                )
            );
        }
    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps, prevState) {
            if (nextProps !== prevState) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = nextProps.template.rows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;

                        if (item.import) {
                            if (item.import === 'component') {
                                var TagName = require('../' + item.componentName + '/' + item.componentName).default;
                                item.attributes[item.prop] = nextProps[item.prop];
                                item.component = _react2.default.createElement(
                                    TagName,
                                    item.attributes,
                                    item.prop
                                );
                            } else {
                                var _TagName = require('antd')[item.componentName];
                                item.attributes[item.prop] = nextProps[item.prop];
                                item.component = _react2.default.createElement(_TagName, item.attributes);
                            }
                        } else {
                            var _TagName2 = item.componentName;
                            item.component = _react2.default.createElement(
                                _TagName2,
                                item.attributes,
                                nextProps[item.prop] ? nextProps[item.prop] : item.content
                            );
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                return {
                    template: nextProps.template
                };
            } else return null;
        }
    }]);

    return TemplateCard;
}(_react2.default.Component);

exports.default = TemplateCard;


TemplateCard.propTypes = {
    template: _propTypes2.default.object.isRequired,
    cols: _propTypes2.default.number,
    rowHeight: _propTypes2.default.number,
    width: _propTypes2.default.number,
    margin: _propTypes2.default.array
};

//# sourceMappingURL=TemplateCard.js.map