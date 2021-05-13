const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  defaultConfig.future =  {
    ...defaultConfig.future,
    webpack5: true,
  };
  
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // DEVELOPMENT
    return {
      ...defaultConfig,
      env: {
        backendUrl: 'https://reqres.in/api',
      },
    };
  }

  // PRODUCTION
  return {
    ...defaultConfig,
    env: {
      backendUrl: 'https://reqres.in/api',
    },
  };
};
