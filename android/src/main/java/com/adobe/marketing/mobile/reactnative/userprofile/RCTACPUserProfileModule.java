/*
 Copyright 2019 Adobe. All rights reserved.
 This file is licensed to you under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License. You may obtain a copy
 of the License at http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software distributed under
 the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 OF ANY KIND, either express or implied. See the License for the specific language
 governing permissions and limitations under the License.
 */
package com.adobe.marketing.mobile.reactnative.userprofile;

import android.util.Log;

import com.adobe.marketing.mobile.InvalidInitException;
import com.adobe.marketing.mobile.UserProfile;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReadableMap;

import java.util.Map;

public class RCTACPUserProfileModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RCTACPUserProfileModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "ACPUserProfile";
  }

  @ReactMethod
  public void extensionVersion(final Promise promise) {
    promise.resolve(UserProfile.extensionVersion());
  }

  @ReactMethod
  public void registerExtension() {
    try {
      UserProfile.registerExtension();
    } catch (InvalidInitException e) {
      Log.d(getName(), "Registering UserProfile extension failed with error: " + e.getMessage());
    }
  }

  @ReactMethod
  public void updateUserAttributes(ReadableMap attributeMap) {
    UserProfile.updateUserAttributes(RCTACPUserProfileMapUtil.toMap(attributeMap));
  }

  @ReactMethod
  public void updateUserAttribute(final String attributeName, final String attributeValue) {
    UserProfile.updateUserAttribute(attributeName, attributeValue);
  }

  @ReactMethod
  public void removeUserAttribute(final String attributeName) {
    UserProfile.removeUserAttribute(attributeName);
  }

}
