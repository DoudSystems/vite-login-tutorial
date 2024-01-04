import { Button, Form, InputGroup } from "react-bootstrap";
import "./ChangePasswordForm.css";

import { ChangeEvent, useState } from "react";
import { sha256 } from "js-sha256";
import UnorderedList from "../utilities/list/UnorderedList";

export default function ChangePasswordForm() {
  const [, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [errorList, setErrorList] = useState([])
  const errors: string[] = [];
  const theCurrentPassword = "abcdEFGH";

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);

  const onChangeCurrentPassword = (e: ChangeEvent<HTMLInputElement>) =>
    setCurrentPassword(e.target.value);

  const onChangeNewPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const onChangeVerifyPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setVerifyPassword(e.target.value);
  };

  const onSubmitCheckPasswords = () => {
    console.log("Checking passwords ...");
    console.log(`${currentPassword}|${newPassword}|${verifyPassword}`);
    if(theCurrentPassword !== currentPassword) 
      errors.push("Current password is incorrect!");
    if (currentPassword === newPassword)
      errors.push("New password cannot be the same as current password!");
    if (newPassword !== verifyPassword)
      errors.push("New passwords don't match!");
    if (newPassword.length < 8)
      errors.push("New password must be a minimum of 8 characters.");
    setErrorList(errors as never[]);
    console.debug("errors.length", errors.length);
    if (errors.length === 0) {
      console.log(`Password change successful! = ${sha256(verifyPassword)}`);
    }
  };

  return (
    <>
      <Form>
        <div className="center">
          <label style={{ fontSize: "200%" }}>Change Password:</label>
        </div>

        <InputGroup className="mb3" hidden>
          <InputGroup.Text id="username">User Name</InputGroup.Text>
          <Form.Control onChange={onChangeUsername} autoComplete="username" />
        </InputGroup>

        <InputGroup className="mb3">
          <InputGroup.Text id="currentpassword">
            Current Password
          </InputGroup.Text>
          <Form.Control
            type="password"
            onChange={onChangeCurrentPassword}
            autoComplete="current-password"
          />
        </InputGroup>

        <InputGroup className="mb3">
          <InputGroup.Text id="newpassword">New Password</InputGroup.Text>
          <Form.Control
            type="password"
            onChange={onChangeNewPassword}
            autoComplete="new-password"
          />
        </InputGroup>

        <InputGroup className="mb3">
          <InputGroup.Text id="verifypassword">
            Verify New Password
          </InputGroup.Text>
          <Form.Control
            type="password"
            onChange={onChangeVerifyPassword}
            autoComplete="new-password"
          />
        </InputGroup>

        <div className="center">
          <Button variant="primary" onClick={onSubmitCheckPasswords}>
            Login
          </Button>
        </div>

        <div>
          <UnorderedList list={errorList} name={"Greg"} />
        </div>
      </Form>
    </>
  );
}
