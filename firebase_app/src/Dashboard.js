import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Home from './PostCreator'
import { auth, db, logout} from "./firebase";

import { query, collection, getDocs, where } from "firebase/firestore";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);


  return ( 
  <>
  <div className="dash_style">
         <div>
         <button className="dashboard__btn" onClick={logout}>
            Log Out
         </button>
         </div>
      <div className="dashboard__message"><h4>Welcome, {name}</h4></div>
       <Home Name ={name}/>

       </div>
       </>
     
     

    
  );
}
export default Dashboard;