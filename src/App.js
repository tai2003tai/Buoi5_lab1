import './App.css';
import { Container, Navbar, Row, Col } from "react-bootstrap";
import { useState } from 'react';
import BooksList from './components/BooksList';
import AddBooks from './components/AddBooks';

function App() {  
  const [bookId, setBookId] = useState(""); // Chỉnh sửa biến thành bookId để rõ ràng hơn

  const getBookIdHandler = (id) => {
    console.log("The ID of the selected book: ", id);
    setBookId(id);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="my-4">
        <Row>
          <Col md={6}>
            <h3>Add / Update Book</h3>
            <AddBooks id={bookId} setBookId={setBookId} />
          </Col>
          <Col md={6}>
            <h3>Books List</h3>
            <BooksList getBookId={getBookIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
