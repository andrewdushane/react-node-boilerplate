import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { exampleRequest, clearMessage } from '../actions';

export const Home = ({ exampleRequest: request, clearMessage: clear, message }) => (
  <div>
    <header>
      Hello, World
    </header>
    <section>
      <button onClick={request}>Make an API request</button>
    </section>
    {message &&
      <section>
        <strong>Message:</strong> { message }
        <div>
          <button onClick={clear}>Clear Message</button>
        </div>
      </section>
    }
  </div>
);

Home.propTypes = {
  exampleRequest: PropTypes.func.isRequired,
  clearMessage: PropTypes.func.isRequired,
  message: PropTypes.string,
};

const mapStateToProps = ({ example }) => ({
  message: example.message,
});

const dispatchProps = {
  exampleRequest,
  clearMessage,
};

export default connect(mapStateToProps, dispatchProps)(Home);
