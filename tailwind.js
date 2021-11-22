import {create, useDeviceContext} from 'twrnc';

const tw = create(require('./tailwind.config.js'));

export const withDeviceContext = Component => props => {
  useDeviceContext(tw);
  return <Component {...props} />;
};

export default tw;
