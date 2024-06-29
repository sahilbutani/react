// FirestoreData.js
import { useEffect, useState } from 'react';
import { collection, query, getDocs, limit, startAfter, orderBy } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const useFirestoreData = (startAfterDoc) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try {
        let q;
        
        if (startAfterDoc) {
          q = query(collection(db, 'listings'), orderBy("id","desc"), startAfter(startAfterDoc.id), limit(4));
        } else {
          q = query(collection(db, 'listings'), orderBy("id","desc"), limit(3));
        }

        const querySnapshot = await getDocs(q);
        const dataArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(dataArray);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [startAfterDoc]);

  return { data, loading };
};

export default useFirestoreData;