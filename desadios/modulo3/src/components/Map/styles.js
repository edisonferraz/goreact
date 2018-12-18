import styled from 'styled-components';

export const Buttons = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;

  button {
    background-color: #ddd;
    border: 0;
    border-radius: 4px;
    color: #333;
    font-weight: bold;
    cursor: pointer;
    padding: 0 10px;
    height: 35px;
    width: 47%;

    &:hover {
      background-color: #ccc;
    }
  }

  button[type='submit'] {
    background-color: #28a745;
    border: 0;
    color: #fff;

    &:hover {
      background-color: #218838;
    }

    .fa {
      font-size: 20px;
    }
  }
`;
