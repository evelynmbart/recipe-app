import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <Nav>
      <Title>
        <img
          src="https://www.pngkey.com/png/detail/201-2018051_fork-and-knife-cutlery-circle-interface-symbol-for.png"
          alt="fork and knife logo"
        />
        <Logo to={"/"}>Delicious</Logo>
      </Title>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FormStyle onSubmit={submitHandler}>
          <div>
            <FaSearch />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </FormStyle>
      </div>
    </Nav>
  );
}

const Nav = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  max-width: 59%;
  justify-content: space-between;
  img {
    width: 80px;
    object-fit: contain;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;
  font-family: "Lobster Two", cursive;
`;

const FormStyle = styled.form`
  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    outline: none;
    border-radius: 1rem;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
