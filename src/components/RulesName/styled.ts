import styled from 'styled-components';

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: gray solid 1px;
  border-radius: 4px;
  
  svg {
    cursor: pointer;
  }  
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border: gray solid 1px;
  border-radius: 4px;
  background: white;
  padding: 50px;
`;

export const NewNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`