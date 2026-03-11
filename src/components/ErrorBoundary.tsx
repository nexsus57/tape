import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
          <h1 className="text-4xl font-extrabold text-brand-blue-dark mb-4">Oops! Something went wrong.</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            We're sorry, but an unexpected error occurred while loading this page. 
            Our team has been notified.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-brand-blue text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Return to Homepage
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
