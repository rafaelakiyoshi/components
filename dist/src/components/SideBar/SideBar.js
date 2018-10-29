'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

require('./SideBar.css');

var _logocollapsed = require('./logocollapsed.png');

var _logocollapsed2 = _interopRequireDefault(_logocollapsed);

var _logo = require('./logo.png');

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = _antd.Menu.SubMenu;
var Sider = _antd.Layout.Sider;

var SideBar = function (_React$Component) {
    _inherits(SideBar, _React$Component);

    function SideBar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SideBar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SideBar.__proto__ || Object.getPrototypeOf(SideBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            collapsed: false
        }, _this.onCollapse = function (collapsed) {
            _this.setState({
                collapsed: collapsed
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SideBar, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    Sider,
                    {
                        className: this.props.theme || "light",
                        style: { height: '100%' },
                        collapsible: true,
                        collapsed: this.state.collapsed,
                        onCollapse: this.onCollapse

                    },
                    this.state.collapsed && _react2.default.createElement('img', { src: _logocollapsed2.default, alt: 'Paris', className: 'logoCollapsed' }),
                    !this.state.collapsed && _react2.default.createElement('img', { src: _logo2.default, alt: 'Paris', className: 'logo' }),
                    _react2.default.createElement(
                        _antd.Menu,
                        { theme: 'light', defaultSelectedKeys: ['1'], mode: 'inline' },
                        this.props.menu.map(function (menuItem) {
                            if (menuItem.children) {
                                return _react2.default.createElement(
                                    SubMenu,
                                    {
                                        className: (_this2.props.theme || "light") + "Sub",
                                        key: 'sub1',
                                        title: _react2.default.createElement(
                                            'span',
                                            null,
                                            _react2.default.createElement(_antd.Icon, { type: 'user' }),
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                'User'
                                            )
                                        )
                                    },
                                    menuItem.children.map(function (itemMenuChild) {
                                        return _react2.default.createElement(
                                            _antd.Menu.Item,
                                            { key: itemMenuChild.id },
                                            itemMenuChild.name
                                        );
                                    })
                                );
                            } else {
                                return _react2.default.createElement(
                                    _antd.Menu.Item,
                                    { key: menuItem.id },
                                    _react2.default.createElement(_antd.Icon, { type: menuItem.icon }),
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        menuItem.name
                                    )
                                );
                            }
                        })
                    )
                )
            );
        }
    }]);

    return SideBar;
}(_react2.default.Component);

exports.default = SideBar;

//# sourceMappingURL=SideBar.js.map