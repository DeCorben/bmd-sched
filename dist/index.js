"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _bmdAppt = _interopRequireDefault(require("bmd-appt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Sched extends _react.default.Component {
  constructor(props) {
    super(props); //this.data = props.data

    _defineProperty(this, "componentDidUpdate", prev => {
      if (prev !== this.props) {
        console.log("here");
        this.setState({
          heading: this.props.data.heading,
          schedule: this.parse()
        });
      }
    });

    _defineProperty(this, "parse", () => {
      let bench = [];

      for (const i in this.props.data) {
        if (i !== 'heading') {
          let time = i.split('-');
          bench.push( /*#__PURE__*/_react.default.createElement(_bmdAppt.default, {
            key: i,
            start: time[0],
            end: time[1],
            desc: this.props.data[i]
          }));
        }
      }

      return bench;
    });

    _defineProperty(this, "render", () => {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, this.state.heading), /*#__PURE__*/_react.default.createElement("div", {
        className: "apptList"
      }, this.state.schedule));
    });

    this.state = {
      heading: props.data.heading,
      schedule: this.parse()
    };
  }

}

exports.default = Sched;