const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../firebaseServiceAccount.json')

initializeApp({
    credential: cert(serviceAccount)
});

const firebasedb = getFirestore();
console.info('✅ Firebase successfully connected')

module.exports = firebasedb
