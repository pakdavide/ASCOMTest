import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
`;

export const List = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Patient = styled.div`
  border: 1px solid lightGrey;
  flex-flow: column;
  padding: 10px;
  border-radius: 20px;
  flex: 0 1 100%;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    border: 1px solid black;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  & > img {
    border-radius: 20px;
    max-width: 100%;
  }
`;

export const ActionContainer = styled.div`
  text-align-center;
`;

export const PatientName = styled.div`
  color: ;
`;

export const PatientInfo = styled.div`
  color: #e62700;
`;

export const PatientSex = styled.div`
  color: #e62700;
`;

export const Alarm = styled.div`
  color: #e62700;
`;

export const Slider = styled.h2``;
