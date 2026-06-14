import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Shared Shabab News Firebase project (same backend as the mobile app).
const firebaseConfig = {
  apiKey: 'AIzaSyAAaXAwmOXQaRZoYUfFOvx-ALNm-X-d_Rk',
  authDomain: 'shabab-news-79e57.firebaseapp.com',
  projectId: 'shabab-news-79e57',
  storageBucket: 'shabab-news-79e57.firebasestorage.app',
  messagingSenderId: '172671611601',
  appId: '1:172671611601:web:0b55a980e3ee2e55358bf0',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
