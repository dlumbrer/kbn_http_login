export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],

    uiExports: {
      // Register the app component of our plugin to uiExports
      app: {
        // The title of the app (will be shown to the user)
        title: 'Login',
        // An description of the application.
        description: 'Login HTTP plugin for kibana',
        // The require reference to the JavaScript file for this app
        main: 'plugins/http_login/app',
        // The require reference to the icon of the app
        icon: 'plugins/http_login/login.svg'
      }
    },


  });
};
