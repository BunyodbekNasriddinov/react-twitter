import styled from "styled-components";
import { ErrorMessage, Field, Form } from "formik";

export const HomeBlock = styled.section`
  border: 2px solid #d8d8d8;
  border-top: none;
  margin-left: 280px;
`;

export const Block = styled.div`
  padding: 10px 20px 20px 25px;
  border-top: 2px solid #d8d9d8;
`;

export const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;
`;

export const ProfileImg = styled.img`
  padding: 2px;
  border: 1px solid #000;
  border-radius: 50%;
`;

export const Img = styled.img``;

export const FormBlock = styled.div`
  position: relative;
  display: flex;
  padding-left: 20px;
  padding-bottom: 50px;
`;

export const HomeForm = styled(Form)`
  max-width: 800px;
  width: 100%;
`;

export const Input = styled(Field)`
  width: 100%;
  font-weight: 600;
  font-size: 22px;
  line-height: 29px;
  color: #828282;
  outline: none;
  border: none;
`;

export const FormError = styled.span`
  display: block;
  font-weight: 600;
  color: red;
`;

export const FormButton = styled.button`
  position: absolute;
  right: 15px;
  bottom: 5px;
  padding: 15px 30px;
  font-weight: 700;
  font-size: 17px;
  line-height: 100%;
  color: #ffffff;
  background-color: #1d9bf0;
  border-radius: 120px;
  border: none;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.08);
  cursor: pointer;

  &:disabled {
    opacity: 0.4;
    cursor: no-drop;
  }
`;

export const PostBlock = styled.div`
  display: flex;
  align-items: start;
`;

export const Div = styled.div`
  margin-left: 5px;
  width: 100%;
`;

export const PostTitle = styled.h3`
  display: inline-block;
  margin: 0;
  margin-right: 5px;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #000000;
`;

export const UserName = styled.p`
  display: inline-block;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  opacity: 0.6;
`;

export const PostText = styled.p`
  margin: 0;
  padding: 0;
`;

export const Circle = styled.span`
  display: inline-block;
  margin: 3px;
  width: 4px;
  height: 4px;
  color: #828282;
  background-color: #828282;
  border-radius: 50%;
`;

export const ImgBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const PostPic = styled.img`
  margin-top: 10px;
  border-radius: 20px;
`;

export const Button = styled.button`
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
`;
