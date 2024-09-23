import React,{useState,useEffect} from "react";
import {Form, Alert,InputGroup,Button,ButtonGroup} from "react-bootstrap";
import bookServices from "../services/book-services";

const AddBooks = ({id,setBookId}) => {
        const [title,setTitle]=useState("");
        const [author,setAuthor]=useState("");
        const [status,setStatus]=useState("Available");
        const [flag,setFlag]=useState(true);
        const [message,setMessage]=useState({error: false,msg:""});
        const handleSubmit = async (e) => {
            e.preventDefault();
            setMessage("");
            if(title===("")||author===("")){
                setMessage({error:true,msg:("All fieldes are mandatory!")})
                return;
        }
    const newBook= {
        title,
        author,
        status,
    };
    console.log(newBook);
    try{
        if(id !== useEffect && id!==""){
            await bookServices.updateBook(id.newBook);
            setBookId("");
            setMessage({error:false,msg:"updetad successfully!"});
        }else{
            await bookServices.addBooks(id.newBook);
            setMessage({error:false,msg:"New Book added successfully!"});
        }
    }catch(error){
        setMessage({error:true,msg:error.message});
    }
        setTitle("");
        setAuthor("");   
};

    return(
        <>
            <div className="p-4 box">
                {message?.msg&& (
                    <Alert
                        variant={message?.error ? "danger" : "success"}
                        dismissible
                        onClose={()=>setMessage("")}>
                            {message?.msg}
                    </Alert>
                )}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className ="mb-2 ">
                        <InputGroup>
                        <Form.Control type="text" placeholder = "Book Title" 
                        value={title} onChange={(e)=>setTitle(e.target.value)}/>
                        </InputGroup>
                    </Form.Group>   

                    <Form.Group className = "mb-2">
                    <Form.Control type="text" placeholder = "Book Author" value={author} 
                    onChange={(e)=> setAuthor(e.target.value)}
                    />
                    </Form.Group>

                    <ButtonGroup className = "mb-2">
                    <Button variant="success" disabled={flag}
                        onClick={(e)=>{setStatus("Available");
                                        setFlag(true);
                        }
                    }>
                        Available</Button>
                    </ButtonGroup>

                    <ButtonGroup className = "mb-2">
                    <Button variant="danger" disabled={!flag}
                        onClick={(e) => {setStatus("Not Available");
                        setFlag(false);}}>
                        Not Available</Button>
                    </ButtonGroup>

                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit">
                            Add/ Update
                        </Button>
                    </div>
                </Form>

            </div>
        </>
    )
}

export default AddBooks;