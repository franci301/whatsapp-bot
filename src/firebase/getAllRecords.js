import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config.js';

async function getAllRecords() {
    const querySnapshot = await getDocs(collection(db, "main"));
    return querySnapshot.docs.map(doc => doc.data())
}

export default getAllRecords;