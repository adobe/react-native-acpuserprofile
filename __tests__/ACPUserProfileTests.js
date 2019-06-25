/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.

@format
*/

import { NativeModules } from 'react-native';
import ACPUserProfile from '../js/ACPUserProfile';

describe('ACPUserProfile', () => {

  test('extensionVersion is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPUserProfile, 'extensionVersion');
    await ACPUserProfile.extensionVersion();
    expect(spy).toHaveBeenCalled();
  });

  test('registerExtension is called', async () => {
    const spy = jest.spyOn(NativeModules.ACPUserProfile, 'registerExtension');
    await ACPUserProfile.registerExtension();
    expect(spy).toHaveBeenCalled();
  });

  test('removeUserAttribute is called with correct parameter', async () => {
    const spy = jest.spyOn(NativeModules.ACPUserProfile, 'removeUserAttribute');
    let attributeName = "attrNameTest";
    await ACPUserProfile.removeUserAttribute(attributeName);
    expect(spy).toHaveBeenCalledWith(attributeName);
  });

  test('updateUserAttribute is called with correct parameters', async () => {
    const spy = jest.spyOn(NativeModules.ACPUserProfile, 'updateUserAttribute');
    let attributeName = "attrNameTest";
    let attributeValue = "attrValueTest";
    await ACPUserProfile.updateUserAttribute(attributeName, attributeValue);
    expect(spy).toHaveBeenCalledWith(attributeName, attributeValue);
  });

  test('updateUserAttributes is called with correct parameter', async () => {
    const spy = jest.spyOn(NativeModules.ACPUserProfile, 'updateUserAttributes');
    let attrMap = {"mapKey": "mapValue", "mapKey1": "mapValue1"};
    await ACPUserProfile.updateUserAttributes(attrMap);
    expect(spy).toHaveBeenCalledWith(attrMap);
  });

});
