import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebas.cnfg";


const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;

