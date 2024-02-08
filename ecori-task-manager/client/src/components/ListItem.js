import { useState } from "react"
import Modal from "./Modal"

const ListItem = ({ task, getData }) => {
  const [showModal, setShowModal] = useState(false)
  const deleteItem = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/tasks/${ task.id }`,{
        method:'DELETE'
      })
      if (response.status === 200){
        getData()
      }
    } catch (err) {
      console.error(err)
    }
  }
    return (
      <li className="list-item">
        <div className="info-container">
          <p className="task-title">{task.title}</p>
        </div>
        <div className="button-container">
          <button className="edit" onClick={ () => setShowModal(true) }>Edit</button>
          <button className="delete" onClick={deleteItem}>Delete</button>
        </div>
        { showModal && <Modal mode={ 'edit' } setShowModal={ setShowModal } getData={ getData } task={ task }/> }
      </li>
    )
  }
  
  export default ListItem
  