import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

   static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  
  render() {
    if (this.state.hasError) {
      return  <div style={{color: '#ec1839'}}>Something went wrong!</div>
    }

    return this.props.children;
  }  
}
