import { useState } from "react";
import { Row } from "react-bootstrap";

const AuthorizationPage = () => {
  const [state, setState] = useState([]);
  const getUsers = async () => {
    try {
      const { data } = await axiosBack.get("/users");
      setState(data.users);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="styleContainer">
          {state.length !== 0 ? (
            <Table striped bordered hover responsive className="styleContainer">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Dni</th>
                  <th>Habilitado</th>
                </tr>
              </thead>
              <tbody>
                {state?.map((x, index) => (
                  <tr
                    key={index}
                    onClick={console.log("holis")}
                  >
                    <td>{x.name}</td>
                    <td>{x.last}</td>
                    <td>{x.dni}</td>
                    <td>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div>
              <Spinner animation="border" />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AuthorizationPage;
