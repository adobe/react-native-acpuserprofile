/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.

@flow
@format
*/

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, ScrollView, NativeModules} from 'react-native';
import {ACPCore, ACPLifecycle, ACPSignal, ACPIdentity, ACPMobileLogLevel, ACPMobilePrivacyStatus} from '@adobe/react-native-acpcore';
import {ACPUserProfile} from '@adobe/react-native-acpuserprofile';


type Props = {};
export default class App extends Component<Props> {
  render() {
    this.initSDK();
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ marginTop: 75 }}>
        <Text style={styles.welcome}>ACPCore Test App</Text>
        <Button title="ACPCore::extensionVersion()" onPress={() => this.coreExtensionVersion()}/>
        <Button title="ACPUserProfile::extensionVersion()" onPress={() => this.profileExtensionVersion()}/>
        <Button title="ACPUserProfile::updateUserAttributes(...)" onPress={() => this.updateUserAttributes()}/>
        <Button title="ACPUserProfile::updateUserAttribute(...)" onPress={() => this.updateUserAttribute()}/>
        <Button title="ACPUserProfile::removeUserAttribute(...)" onPress={() => this.removeUserAttribute()}/>
        </ScrollView>
      </View>
    );
  }

  initSDK() {
    ACPCore.setLogLevel(ACPMobileLogLevel.VERBOSE);
    ACPCore.configureWithAppId("yourAppId");
    ACPLifecycle.registerExtension();
    ACPIdentity.registerExtension();
    ACPSignal.registerExtension();
    ACPUserProfile.registerExtension();
    ACPCore.start();
  }

  coreExtensionVersion() {
    ACPCore.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPCore version: " + version));
  }

  profileExtensionVersion() {
    ACPUserProfile.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPUserProfile version: " + version));
  }

  updateUserAttributes() {
    let attrMap = {"mapKey": "mapValue", "mapKey1": "mapValue1"};
    ACPUserProfile.updateUserAttributes(attrMap);
  }

  updateUserAttribute() {
    let attributeName = "attrNameTest";
    let attributeValue = "attrValueTest";
    ACPUserProfile.updateUserAttribute(attributeName, attributeValue);
  }

  removeUserAttribute() {
    let attributeName = "attrNameTest";
    ACPUserProfile.removeUserAttribute(attributeName);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
  }
});
