import { data } from "../../Data";
import Card from "./Card";
import './Body.css'
import { useState } from "react";
import Modal from "./Modal";
const Body = () => {
    const [ardata, setdata] = useState(data)
    const [modalOpen, sethandle] = useState(false)
    const [oid, setoid] = useState();
    const handleDelete = (id) => {
        const updatedCards = ardata.filter(card => card.id != id);
        setdata(updatedCards)
    }

    const handleModal = (id) => {
        console.log("clicked")
        setoid(id)
        sethandle(!modalOpen)
    }
    const handleSubmit = (name, email, number, website) => {
        const cardIndex = ardata.findIndex((item) => item.id === oid);
ardata[cardIndex]={...ardata[cardIndex],   name:name,email:email,phone:number,url:website}
    }
    console.log(ardata)
    return (
        <>
            {
                modalOpen?   
                    <Modal handleModal={handleModal} id={oid} data={ardata} handleSubmit={ handleSubmit} />:null
            }
           <div className="body">
            {ardata.map((d) => (
                <Card key={d.id} id={d.id}  name={ d.name} url={d.url} handleModal={handleModal} email={d.email} phone={d.phone} handleDelete={handleDelete} imgurl={d.imgurl} />
    ))}
            </div>
            </>
            )
}
export default Body;