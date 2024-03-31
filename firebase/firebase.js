/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getRemoteConfig, isSupported } from "firebase/remote-config";
import {
  getAnalytics,
  isSupported as isSupportedAnalytics,
} from "firebase/analytics";

// Configure Firebase.
export const firebaseConfig = {
  apiKey: "AIzaSyAdNciFTquOdJQVjM03Cx8STxBw2wKCiow",
  authDomain: "expensetracker-aff32.firebaseapp.com",
  projectId: "expensetracker-aff32",
  storageBucket: "expensetracker-aff32.appspot.com",
  messagingSenderId: "536859283193",
  appId: "1:536859283193:web:fa8b5658d119548bacdc28",
  measurementId: "G-02SG7F3S7R",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
