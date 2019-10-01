
# React Native AEP User Profile Extension

[![npm version](https://badge.fury.io/js/%40adobe%2Freact-native-acpuserprofile.svg)](https://badge.fury.io/js/%40adobe%2Freact-native-acpuserprofile) [![CircleCI](https://img.shields.io/circleci/project/github/adobe/react-native-acpuserprofile/master.svg?logo=circleci)](https://circleci.com/gh/adobe/workflows/react-native-acpuserprofile) ![NPM](https://img.shields.io/npm/l/@adobe/react-native-acpuserprofile.svg)

`@adobe/react-native-acpuserprofile` is a wrapper around the iOS and Android [AEP User Profile SDK](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/profile) to allow for integration with React Native applications. Functionality to enable Adobe User Profile is provided entirely through JavaScript documented below.


## Installation

You need to install the SDK with [npm](https://www.npmjs.com/) and configure the native Android/iOS project in your react native project. Before installing the UserProfile extension it is recommended to begin by installing the [Core extension](https://github.com/adobe/react-native-acpcore).

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
```

#### 2.1 Link
- **React Native 0.60+**


[CLI autolink feature](https://github.com/react-native-community/cli/blob/master/docs/autolinking.md) links the module while building the app.


- **React Native <= 0.59**


```bash
$ react-native link @adobe/react-native-acpuserprofile
```

*Note* For `iOS` using `cocoapods`, run:

```bash
$ cd ios/ && pod install
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

> Note: It is recommended to initialize the SDK via native code inside your AppDelegate and MainApplication in iOS and Android respectively. However, you can still initialize the SDK in Javascript. For more information see how to initialize [Core](https://github.com/adobe/react-native-acpcore#initializing-the-sdk). 

##### **iOS**
```objective-c
#import <RCTACPUserProfile/ACPUserProfile.h>

[ACPUserProfile registerExtension];
```

##### **Android:**
```java
import com.adobe.marketing.mobile.UserProfile;

UserProfile.registerExtension();
```

```javascript
ACPUserProfile.registerExtension();
```

##### Update user attributes:
```javascript
let attrMap = {"mapKey": "mapValue", "mapKey1": "mapValue1"};
ACPUserProfile.updateUserAttributes(attrMap);
```

##### Updating a user attribute:
```javascript
let attributeName = "attrNameTest";
let attributeValue = "attrValueTest";
ACPUserProfile.updateUserAttribute(attributeName, attributeValue);
```

##### Remove a user attribute:
```javascript
let attributeName = "attrNameTest";
ACPUserProfile.removeUserAttribute(attributeName);
```

## Contributing
See [CONTRIBUTING](CONTRIBUTING.md)

## License
See [LICENSE](LICENSE)
