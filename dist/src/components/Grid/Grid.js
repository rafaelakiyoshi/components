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

require('./Grid.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var template = null;

var Grid = function (_React$Component) {
    _inherits(Grid, _React$Component);

    function Grid() {
        _classCallCheck(this, Grid);

        return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
    }

    _createClass(Grid, [{
        key: 'templateHandler',
        value: function templateHandler() {
            template = this.props.template;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = template.rows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    if (item.import) {
                        if (item.import === 'component') {
                            var TagName = require('../' + item.componentName + '/' + item.componentName).default;
                            item.attributes[item.prop] = this.props[item.prop];
                            item.component = _react2.default.createElement(
                                TagName,
                                item.attributes,
                                item.prop
                            );
                        } else {
                            console.log(item.import);
                            var _TagName = require('antd')[item.componentName];
                            item.attributes[item.prop] = this.props[item.prop];
                            item.component = _react2.default.createElement(_TagName, item.attributes);
                        }
                    } else {
                        var _TagName2 = item.componentName;
                        item.component = _react2.default.createElement(
                            _TagName2,
                            item.attributes,
                            this.props[item.prop]
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
        }
    }, {
        key: 'render',
        value: function render() {
            this.templateHandler();
            return _react2.default.createElement(
                'div',
                { className: 'generic-card-container' },
                _react2.default.createElement(
                    _antd.Card,
                    { className: 'generic-card', style: template.styles },
                    _react2.default.createElement(
                        _reactGridLayout2.default,
                        {
                            className: 'generic-card',
                            layout: template.rows,
                            cols: this.props.cols || 12,
                            rowHeight: this.props.rowHeight || 15,
                            width: this.props.width || 220,
                            margin: this.props.margin || [0, 0] },
                        template.rows.map(function (item) {
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
    }]);

    return Grid;
}(_react2.default.Component);

exports.default = Grid;


Grid.propTypes = {
    template: _propTypes2.default.object.isRequired,
    cols: _propTypes2.default.number,
    rowHeight: _propTypes2.default.number,
    width: _propTypes2.default.number,
    margin: _propTypes2.default.array
};

//# sourceMappingURL=Grid.js.map