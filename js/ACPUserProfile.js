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

'use strict';

const RCTACPUserProfile = require('react-native').NativeModules.ACPUserProfile;

module.exports = {
  /**
   * Returns the version of the ACPUserProfile extension
   * @param  {string} Promise a promise that resolves with the extension verison
   */
  extensionVersion(): Promise<string> {
    return Promise.resolve(RCTACPUserProfile.extensionVersion());
  },

  /**
   * Registers the ACPUserProfile extension with ACPCore
   */
  registerExtension() {
    RCTACPUserProfile.registerExtension();
  },

  /**
   * UserProfile API to remove the give attribute name
   *
   * If the attribute does not exist, this API has no effects
   * If the attribute exists, then the User Attribute will be removed
   *
   * @param attributeName Attribute key which has to be removed.
   */
  removeUserAttribute(attributeName: string) {
    RCTACPUserProfile.removeUserAttribute(attributeName);
  },

  /**
   * UserProfile API to set user profile attributes keys and values.
   *
   * If the attribute does not exist, it will be created. If the attribute
   * already exists, then the value will be updated. An empty attribute value will remove the attribute.
   *
   * @param attributeName  Attribute key.
   * @param attributeValue Attribute value corresponding to the key.
   */
  updateUserAttribute(attributeName: string, attributeValue: string) {
    RCTACPUserProfile.updateUserAttribute(attributeName, attributeValue);
  },

  /**
   * UserProfile API to set user profile attributes keys and values.
   *
   * If the attribute does not exist, it will be created. If the attribute
   * already exists, then the value will be updated. A empty attribute value will remove the attribute.
   *
   * @param attributeMap of profile attributes key-value pairs to be set.
   */
  updateUserAttributes(attributeMap: {string: any}) {
    RCTACPUserProfile.updateUserAttributes(attributeMap);
  },

};
