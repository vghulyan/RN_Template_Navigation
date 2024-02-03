# Navigation

```
$> npm i @react-navigation/native @react-navigation/bottom-tabs @react-navigation/native-stack react-native-safe-area-context react-native-screens @react-native-community/blur react-native-reanimated react-native-gesture-handler react-native-reanimated @react-navigation/drawer

$> npm i --save-dev @types/react-native-vector-icons


$> cd ios
$> pod install
```

# Add react-native-reanimated/plugin plugin to your babel.config.js

```
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
};

react-native-reanimated/plugin has to be listed last.

$> pod install
$> npm start -- --reset-cache
```

# Create react-native.config.js

```
Create a file / <ROOT> --> react-native.config.js (helps to append the assets to ios and android)

module.exports = {
   project: {
      ios: {},
      android: {},
   },
   assets: ['./src/assets'],
};

$> npx react-native-asset
```
