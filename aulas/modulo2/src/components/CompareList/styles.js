import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 260px;
  background: #fff;
  border-radius: 3px;
  margin: 0 10px;

  display: flex;
  flex-direction: column;

  position: relative;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      &:nth-child(2n-1) {
        background: #f5f5f5;
      }

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        margin-left: 6px;
      }
    }
  }
`;

export const BtnRemove = styled.a`
  background-color: salmon;
  border: 0;
  color: #fff;
  text-align: center;
  font-size: 14px;
  padding: 14px 0;
  margin-top: 10px;
  cursor: pointer;

  transition: all ease-in-out 0.1s;

  &:hover {
    background-color: #ec3b3b;
  }
`;

export const BtnUpdate = styled.a`
  background: none;
  border: 0;
  color: #ccc;
  cursor: pointer;
  font-size: 18px;
  padding: 6px 10px;

  position: absolute;
  top: 0;
  right: 0;

  transition: color ease-in-out 0.1s;
  transition: transform ease-in-out 0.2s;

  &:hover {
    color: #aaa;
    transform: rotate(180deg);
  }
`;
