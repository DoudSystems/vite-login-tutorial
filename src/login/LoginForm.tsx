import { Button, Form, InputGroup } from "react-bootstrap";
import "./LoginForm.css";

import { ChangeEvent, useState } from "react";
import { sha256 } from "js-sha256";
import { NavLink } from "react-router-dom";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(sha256(e.target.value));

  return (
    <>
      <Form>
        <div className='center'>
            <label style={{fontSize: '200%'}}>Login:</label>
        </div>

        <InputGroup className="mb3">
          <InputGroup.Text id="username">User Name</InputGroup.Text>
          <Form.Control onChange={onChangeUsername} autoComplete="username" />
        </InputGroup>

        <InputGroup className="mb3">
          <InputGroup.Text id="password">Password</InputGroup.Text>
          <Form.Control type="password" onChange={onChangePassword} autoComplete="current-password" />
        </InputGroup>

        <div className="center" >
            <Button variant="primary" onClick={() => console.log(username, password)}>Login</Button>
        </div>

        <InputGroup className="mb3">
            <NavLink to="/changePassword">Change Password</NavLink>
        </InputGroup>

      </Form>
    </>
  );
}
