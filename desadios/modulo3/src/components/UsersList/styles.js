import styled from 'styled-components';

export const Ul = styled.ul`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: 0 0 14px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  max-height: 600px;
  overflow-y: auto;
  width: 300px;

  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
`;

export const Li = styled.li`
  background-color: #fff;
  border-bottom: 1px solid #eee;
  border-radius: 4px;
  color: #333;
  font-size: 14px;
  padding: 10px;

  transition: all ease-in-out 0.1s;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: #f5f5f5;
  }

  &:last-child {
    border-bottom: none;
  }

  > span {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      margin-right: 10px;
      height: 50px;
      width: 50px;
    }

    strong {
      display: block;
    }

    small {
      display: block;
    }
  }
`;

export const BtnRemove = styled.a`
  background-color: indianred;
  border-radius: 50%;
  cursor: pointer;
  color: #fff;
  height: 22px;
  width: 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all ease-in-out 0.2s;

  &:hover {
    background-color: #f14d4d;
  }
`;
