import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  // 로그인 후 메인페이지 이동 (useNavigate)
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    console.log("로그인 테스트");
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <div>
      {/*react-bootstrap  */}
      {/* Container : 부트스트랩에서 가운데 정렬을 도와준다. */}
      {/* Form  e.preventDefault(); */}
      <Container>
        <Form onSubmit={loginUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          {/* Form 태그에 버튼 타입이 submit일경우 onClick 대신 onSubmit을 준다*/}
          <Button variant="danger" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
