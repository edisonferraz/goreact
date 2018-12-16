import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export const Container = styled.div`
  background-color: #fff;
  border: 4px solid rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.05);
  padding: 20px;
  width: 300px;

  margin: -91px 0 0 -150px;

  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;

  strong {
    display: block;
    text-align: center;
    margin-bottom: 20px;
  }

  input {
    border-radius: 4px;
    border: 1px solid #ccc;
    color: #333;
    padding: 10px;
    width: 100%;
  }
`;
