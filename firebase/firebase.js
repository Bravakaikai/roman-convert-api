import admin from 'firebase-admin'
import adminSdk from './firebase-adminsdk.js'

const { serviceAccount } = adminSdk

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

export const auth = admin.auth()
