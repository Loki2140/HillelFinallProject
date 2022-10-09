import React from "react";
import { connect } from "react-redux";

interface SignIn {
  width: string;
  height?: string;
  submit: () => void;
}

export const SignIn = () => {
  const submit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };

  return (
    <form onClick={submit} action="submit">
      <input type="email" />
      <input type="password" />
      <button type="submit"></button>
    </form>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
