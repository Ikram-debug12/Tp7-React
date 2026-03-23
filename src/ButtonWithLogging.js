import withLogging from './withLogging';
import ActionButton from './Button';  

const ButtonWithLogging = withLogging(ActionButton);

ButtonWithLogging.displayName = 'ButtonWithLogging';

export default ButtonWithLogging;