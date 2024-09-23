import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import BookDatabaseService from "../services/book-services";

const BooksList = ({ getBookId }) => {
    const [Books, setBooks] = useState([]);

    const getBooks = async () => {
        try {
            const data = await BookDatabaseService.getAllBooks();
            setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } catch (error) {
            console.error("Error fetching books: ", error);
        }
    };

    useEffect(() => {
        getBooks();
    }, []);

    const deleteHandler = async (id) => {
        if (window.confirm("Are you sure you want to delete this book?")) {
            await BookDatabaseService.deleteDoc(id);
            getBooks();
        }
    };

    return (
        <>
            <div className="mb-2">
                <Button variant="dark" onClick={getBooks}>
                    Refresh List
                </Button>
            </div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Book Title</th>
                        <th>Book Author</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Books.map((doc, index) => (
                        <tr key={doc.id}>
                            <td>{index + 1}</td>
                            <td>{doc.title}</td>
                            <td>{doc.author}</td>
                            <td>{doc.status}</td>
                            <td>
                                <Button variant="secondary" onClick={() => getBookId(doc.id)}>
                                    Edit
                                </Button>
                                <Button variant="danger" onClick={() => deleteHandler(doc.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default BooksList;
