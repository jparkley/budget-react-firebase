import firebase from "./config/firebase"
import { useState, useEffect } from "react"
import { collection, getFirestore, getDocs, query, where, orderBy } from "firebase/firestore"

//import './App.css';
import Header from "./components/layout/Header"
import Items from "./components/pages/Items"
import BudgetInput from "./components/pages/BudgetInput"

function App() {
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])

  /* Get Firestore db */
  const db = getFirestore(firebase)

  const onQuery = async budget => {
    setLoading(true)

    /* Retrive data using query */
    const itemsRef = collection(db, "items")
    const q = query(itemsRef, where("highPrice", "<=", budget * 100))
    const itemsSnapshot = await getDocs(q)

    const items = itemsSnapshot.docs.map(doc => doc.data())
    console.log("items: ", items)
    setItems(items)
    setLoading(false)
  }

  return (
    <div className="container">
      <Header />
      <BudgetInput onQuery={onQuery} />
      <Items items={items} />
    </div>
  )
}

export default App
