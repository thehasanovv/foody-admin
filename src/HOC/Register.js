import React from 'react';
export function withAuth(Component) {

  return class AuthenticatedComponent extends React.Component {
    isAuthenticated() {
      return this.props.isAuthenticated;//true or false
    }

    //=======================================================================//
    render() {
      const loginErrorMessage = (
        <div>
          <a href="/logout">Login</a>
        </div>
      );

      return (
        <div>
          {this.isAuthenticated === true ? <Component {...this.props} /> : loginErrorMessage}
        </div>
      );
    }
  };
}

export default withAuth;
