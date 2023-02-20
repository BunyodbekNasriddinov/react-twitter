import React, { useRef, useState } from "react";
import {
  Block,
  Button,
  Circle,
  Div,
  HomeBlock,
  Img,
  ImgBlock,
  Input,
  PostBlock,
  PostPic,
  PostText,
  PostTitle,
  ProfileImg,
  Title,
  TitleBlock,
  UserName,
  FormButton,
  FormBlock,
  HomeForm,
  FormError,
} from "./Home.style";
import StarsIcon from "../../assets/images/stars.svg";
import ProfileIcon from "../../assets/images/profile.svg";
import CommentIcon from "../../assets/images/comment.svg";
import ReplyIcon from "../../assets/images/reply.svg";
import LikeIcon from "../../assets/images/like.svg";
import ShareIcon from "../../assets/images/share.svg";
import StatsIcon from "../../assets/images/statistics.svg";
import DotsMoreIcon from "../../assets/images/dots-more.svg";
import { users } from "./data";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

export const Home = () => {
  let [check, setCheck] = useState("on");

  const initialValues = {
    text: "",
  };

  const validationSchema = Yup.object({
    text: Yup.string().required("Text Required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <HomeBlock>
      <TitleBlock>
        <Title>Home</Title>
        <Img
          width="24"
          height="24"
          src={StarsIcon}
          alt="Starts icon"
          onChange={(evt) => setCheck("")}
        />
      </TitleBlock>
      <FormBlock>
        <ProfileImg
          width="60"
          height="60"
          src={ProfileIcon}
          alt="Profile image"
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <HomeForm>
            <Div>
              <Input type="text" placeholder="What’s happening" name="text" />
              <FormError>
                <ErrorMessage name="text" />
              </FormError>
            </Div>
            <FormButton disabled={check} type="submit">
              Tweet
            </FormButton>
            {check}
          </HomeForm>
        </Formik>
      </FormBlock>
      {users.map((item) => (
        <Block key={item.id}>
          <PostBlock>
            <ProfileImg
              width="60"
              height="60"
              src={item.avatar}
              alt="Profile image"
            />
            <Div>
              <PostTitle>{item.first_name}</PostTitle>
              <UserName>
                @{item.username}
                <Circle />
                {item.postTime}
              </UserName>
              <PostText>
                {item.pictures
                  ? item.text.split(" ").slice(0, 2).join(" ") + " ....."
                  : item.text}
              </PostText>
              {item.pictures ? (
                <PostPic width="679" height="453" src={item.pictures} />
              ) : (
                ""
              )}
              <ImgBlock>
                <Button>
                  <Img
                    width="24"
                    height="24"
                    src={CommentIcon}
                    alt="Replys icon"
                  />
                  {" " + item.comments.length}
                </Button>
                <Button>
                  <Img
                    width="24"
                    height="24"
                    src={ReplyIcon}
                    alt="Replys icon"
                  />
                  {" " + item.replys}
                </Button>

                <Button>
                  <Img width="24" height="24" src={LikeIcon} alt="Like icon" />
                  {" " + item.like}
                </Button>
                <Button>
                  <Img
                    width="24"
                    height="24"
                    src={ShareIcon}
                    alt="Share icon"
                  />
                </Button>
                <Button>
                  <Img
                    width="24"
                    height="24"
                    src={StatsIcon}
                    alt="Stats icon"
                  />
                </Button>
              </ImgBlock>
            </Div>
            <Button>
              <Img width="17" height="4" src={DotsMoreIcon} alt="Stats icon" />
            </Button>
          </PostBlock>
        </Block>
      ))}
      <Block></Block>
    </HomeBlock>
  );
};
