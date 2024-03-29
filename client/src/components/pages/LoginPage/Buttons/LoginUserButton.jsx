import React from "react";
import styled from "styled-components";
import axios from "axios";

const LoginButton = styled.button`
  border: 2px solid pink;
`;

const submit = (e) => {
  e.preventDefault();

  const payload = {
    // email: task,
    // password: listId,
  };

  axios({
    url: "/login",
    method: "POST",
    data: payload,
  })
    .then(() => {
      console.log("data been sent");
      window.location.href = "/";
    })
    .catch(() => {
      console.log("data been not sent");
    });
};

export default function LoginUserButton() {
  return <LoginButton onClick={submit}>Login</LoginButton>;
}
