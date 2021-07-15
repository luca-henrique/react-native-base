# Tutoriais

- https://dev.to/easybuoy/combining-stack-tab-drawer-navigations-in-react-native-with-react-navigation-5-da

- https://www.jonataoliveira.com.br/tabbar-personalizada-em-react-native/

- https://reactnavigation.org/docs/1.x/tab-navigator/

-https://dev.to/raphaelchaula/how-to-update-object-or-array-state-in-react-4cma

- https://github.com/react-native-svg/react-native-svg

- https://blog.logrocket.com/react-native-form-validations-with-formik-and-yup/

# Clearing the Cache of your React Native Project

RN < 0.50 - watchman watch-del-all && rm -rf $TMPDIR/react-_ && rm -rf node_modules/ && npm cache clean && npm install && npm start -- --reset-cache
RN >= 0.50 - watchman watch-del-all && rm -rf $TMPDIR/react-native-packager-cache-_ && rm -rf $TMPDIR/metro-bundler-cache-_ && rm -rf node_modules/ && npm cache clean && npm install && npm start -- --reset-cache
RN >= 0.63 - watchman watch-del-all && rm -rf node_modules && npm install && rm -rf /tmp/metro-_ && npm run start --reset-cache

npm >= 5 - watchman watch-del-all && rm -rf $TMPDIR/react-\* && rm -rf node_modules/ && npm cache verify && npm install && npm start -- --reset-cache

Windows - del %appdata%\Temp\react-native-\* & cd android & gradlew clean & cd .. & del node_modules/ & npm cache clean --force & npm install & npm start -- --reset-cache
