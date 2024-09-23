import { db } from "../firebase-config";
import { collection, 
         getDocs,   
         deleteDoc,
         doc,
         addDoc,
         updateDoc,
         getDoc

} from "firebase/firestore";

const bookCollectionRef = collection(db, "Books");

class BookDatabaseService {

    getAllBooks = () => {
        return getDocs(bookCollectionRef);
    };
    deleteDoc =(id)=>{
        const bookDoc = doc(db,"Books",id);
        return deleteDoc(bookDoc);
    };
    addBooks = (newBook) => {
        return addDoc(bookCollectionRef,newBook);
    };
    updateBook = (id,updateBook)=>{
        const bookDoc = doc(db,"Books",id);
        return updateDoc(bookDoc,updateBook);
    };
    getBook =(id)=>{
        const bookDoc =doc(db,"Books",id);
        return getDoc(bookDoc);
    };
}

export default new BookDatabaseService();
