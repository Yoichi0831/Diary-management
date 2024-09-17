import styled from 'styled-components';

export const LoginWrapper = styled.div`
    z-index: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 56px;
    background: #eee;
`

export const LoginBox = styled.div`
    z-index: 0;
    width: 400px;
    height: 200px;
    margin: 50px auto;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
`

export const EmailInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: #f8f8f8;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  &::placeholder {
    color: #999;
  }
`;

export const LoginButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004085;
    box-shadow: 0 5px #666;
    transform: translateY(2px);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;