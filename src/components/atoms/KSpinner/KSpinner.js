import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

class KSpinner extends Component {
    render() {
        return (
          <Fragment>
            <div className={`k-spinner ${this.props.backdrop ? '--spinner-backdrop' : '' }`}>
                <Spinner className={['k-spinner',`is-${this.props.state}-${ this.props.brand}` ]} animation={this.props.animation} role={this.props.role}
                         size={this.props.size} variant={this.props.state}/>
            </div>
          </Fragment>

        );
    }
}

KSpinner.propTypes = {
    animation: PropTypes.string.isRequired,
    role: PropTypes.string,
    size: PropTypes.string,
    state: PropTypes.string,
    brand: PropTypes.string,
    backdrop: PropTypes.bool,
};

KSpinner.defaultProps = {
    animation: 'border',
    role: 'status',
    size: 'md',
    state: 'primary',
    brand: 'default',
    backdrop: false,
};
export default KSpinner;
