import styled from "styled-components";

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin-bottom: 1rem;
`;

export const ContactSection = styled.div`
  padding: calc(2.5rem + 2.5vw) 0;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1rem;
  margin-bottom: 3rem;
  position: relative;
  color: white;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    border-bottom: 2px solid white;
    transform: translate(-50%);
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 40px;

  &:hover {
    color: #0163bf;
    transform: scale(1.2);
    transition: 0.3s ease-out;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    padding: 1rem calc(0.5rem + 0.5vw);
    margin-bottom: 1rem;
    background-color: #132639;
    border-radius: 4px;
    border: none;
    color: #eff7f8;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: #0d1a26;
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.8;
    }
    &[name="Nome"] {
      margin-right: 1rem;
    }
  }

  textarea {
    padding: 1rem calc(0.5rem + 0.5vw);
    margin-bottom:1rem;
    background-color: #132639;
    border-radius: 4px;
    border: none;
    color: #eff7f8;

    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: #0d1a26;
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.8;
    }
  }

  button {
    padding: 0.8rem 2rem;
    background-color: white;
    border-radius: 20px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

export const Row = styled.div`
@media only Screen and (max-width: 40rem){
    display: flex;
    flex-direction:column;

    input{
        &[name="Nome"]{
            margin-right: 0;
        }
    }
}
`;