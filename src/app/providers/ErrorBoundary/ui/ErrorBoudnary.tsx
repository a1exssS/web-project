import { ErrorPage } from "pages/ErrorPage";
import React, { ReactNode, Suspense } from "react";

interface ErrorBoundaryProps {
   children: ReactNode;
}

interface ErrorBoundaryState {
   hasError: boolean;
}

class ErrorBoundary extends React.Component<
   ErrorBoundaryProps,
   ErrorBoundaryState
> {
   constructor(props: ErrorBoundaryProps) {
      super(props);
      this.state = { hasError: false };
   }
   static getDerivedStateFromError(error: Error): ErrorBoundaryState {
      return { hasError: true };
   }
   componentDidCatch(error: Error, info: React.ErrorInfo): void {
      console.log(error, info);
   }
   render() {
      if (this.state.hasError) {
         return <Suspense fallback=''>
            <ErrorPage />
         </Suspense>;
      }
      return this.props.children;
   }
}

export default ErrorBoundary;
