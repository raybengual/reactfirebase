// credenciales de mi firebase
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyBf0NhaD13AKQp0f_gAE_ZeEtM5iSyB_kk",

  authDomain: "periodico-12426.firebaseapp.com",

  projectId: "periodico-12426",

  storageBucket: "periodico-12426.appspot.com",

  messagingSenderId: "835298651115",

  appId: "1:835298651115:web:971682222e5fe41fd587ae"

};

const app = initializeApp(firebaseConfig);
export const auth= getAuth();
export const db = getFirestore(app);
