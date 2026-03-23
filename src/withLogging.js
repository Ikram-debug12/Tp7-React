import React from 'react';

const withLogging = (WrappedComponent, options = {}) => {
  const { 
    logLevel = 'info', 
    logProps = true,
    logRenderTime = true,
    componentName = null 
  } = options;

  const EnhancedComponent = (props) => {
    const startTime = logRenderTime ? performance.now() : null;
    
    if (logProps) {
      const logMessage = `[withLogging] ${componentName || WrappedComponent.name || 'Component'} - Props reçues :`;
      
      switch(logLevel) {
        case 'info':
          console.info(logMessage, props);
          break;
        case 'warn':
          console.warn(logMessage, props);
          break;
        case 'error':
          console.error(logMessage, props);
          break;
        default:
          console.log(logMessage, props);
      }
    }
    
    const result = <WrappedComponent {...props} />;
    
    if (logRenderTime && startTime) {
      const endTime = performance.now();
      console.log(`⏱️ [withLogging] Temps de rendu : ${(endTime - startTime).toFixed(2)}ms`);
    }
    
    return result;
  };

  EnhancedComponent.displayName = `withLogging(${
    componentName || WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return EnhancedComponent;
};

export default withLogging;