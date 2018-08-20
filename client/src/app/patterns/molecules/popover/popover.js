//====================================================|
// MOLECULES: POPOVER


//--------------------------| Import

// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Actions
import changePopoverState from '../../../actions/popover';

// Styles
import './popover.scss';


//--------------------------| Body

class Popover extends React.Component {
  componentDidMount() {
    if (this.props.visibility) {
      document.addEventListener('keyup', this.handleEscapeKey, false);
      document.addEventListener('click', this.handleClickOutside);
    }
  }

  componentDidUpdate() {
    if (this.props.visibility) {
      document.addEventListener('keyup', this.handleEscapeKey, false);
      document.addEventListener('click', this.handleClickOutside);
    }
    else {
      document.removeEventListener('keyup', this.handleEscapeKey, false);
      document.removeEventListener('click', this.handleClickOutside);
    }
  }

  handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      this.props.dispatch(changePopoverState(''));
    }
  };

  handleClickOutside = (e) => {
    if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
      this.props.dispatch(changePopoverState(''));
    }
  };

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  render() {
    return (
      <div
        className='pm-popover'
        data-visible={ this.props.visibility }
        ref={this.setWrapperRef}
      >
        {this.props.children}
      </div>
    );
  }
}


//--------------------------| State to Props

const mapStateToProps = state => ({
  popover: state.popover
});


//--------------------------| Export

export default connect(mapStateToProps)(Popover);
