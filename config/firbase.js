// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getDownloadURL, getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBrCu2KcuirmLuvVBuEiIIq1OcM0pbUJEI',
  authDomain: 'trum-project.firebaseapp.com',
  projectId: 'trum-project',
  storageBucket: 'trum-project.appspot.com',
  messagingSenderId: '759986985964',
  appId: '1:759986985964:web:430af438ca26dd29883ec9',
  measurementId: 'G-XQ5TRREDHN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export async function uploadImg(img) {
  let downloadURL;
  try {
    const sotrageRef = ref(storage, `web/${img.name}`);
    if (img.name === undefined) {
      throw new Error('No file selected');
    }
    const uploadTask = uploadBytesResumable(sotrageRef, img);
    downloadURL = await new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        () => {},
        (error) => console.log('err ', error),
        async () => {
          let url = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(url);
        }
      );
    });
    return downloadURL;
  } catch (error) {
    console.log(error);
  }
}
export { storage, app };
