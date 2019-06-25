
# React Native AEP User Profile Extension

[![npm version](https://badge.fury.io/js/%40adobe%2Freact-native-acpuserprofile.svg)](https://badge.fury.io/js/%40adobe%2Freact-native-acpuserprofile) [![CircleCI](https://img.shields.io/circleci/project/github/adobe/react-native-acpuserprofile/master.svg?logo=circleci)](https://circleci.com/gh/adobe/workflows/react-native-acpuserprofile) ![NPM](https://img.shields.io/npm/l/@adobe/react-native-acpuserprofile.svg)

`@adobe/react-native-acpuserprofile` is a wrapper around the iOS and Android [AEP UserProfile Manager SDK](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/profile) to allow for integration with React Native applications. Functionality to enable Adobe User Profile is provided entirely through JavaScript documented below.


## Installation

You need to install the SDK with [npm](https://www.npmjs.com/) and configure the native Android/iOS project in your react native project. Before installing the UserProfile extension it is recommended to begin by installing the Core extension `@adobe/react-native-acpcore`.

> Note: If you are new to React Native we suggest you follow the [React Native Getting Started](<https://facebook.github.io/react-native/docs/getting-started.html>) page before continuing.

### 1. Create React Native project

First create a React Native project:

```bash
react-native init MyReactApp
```

### 2. Install JavaScript packages

Install and link the `@adobe/react-native-acpuserprofile` package:

```bash
cd MyReactApp
npm install @adobe/react-native-acpuserprofile
react-native link @adobe/react-native-acpuserprofile
```

## Usage

### [User Profile](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/profile)

##### Importing the extension:
```javascript
import {ACPUserProfile} from '@adobe/react-native-acpuserprofile';
```

##### Getting the extension version:

```javascript
ACPUserProfile.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPUserProfile version: " + version));
```

##### Registering the extension with ACPCore:

```javascript
ACPUserProfile.registerExtension();
```

##### Update user attributes
```javascript
let attrMap = {"mapKey": "mapValue", "mapKey1": "mapValue1"};
ACPUserProfile.updateUserAttributes(attrMap);
```

##### Updating a user attribute
```javascript
let attributeName = "attrNameTest";
let attributeValue = "attrValueTest";
ACPUserProfile.updateUserAttribute(attributeName, attributeValue);
```

##### Remove a user attribute
```javascript
let attributeName = "attrNameTest";
ACPUserProfile.removeUserAttribute(attributeName);
```

## Contributing
See [CONTRIBUTING](CONTRIBUTING.md)

## License
See [LICENSE](LICENSE)
