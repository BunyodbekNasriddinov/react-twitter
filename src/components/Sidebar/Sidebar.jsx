import { data } from "./data";
import LogoIcon from "../../assets/images/logo.svg";
import {
  Block,
  Button,
  Img,
  Item,
  LinkItem,
  List,
  LogoLink,
  Nav,
  Span,
} from "./Sidebar.style";

export const Sidebar = () => {
  return (
    <Block>
      <LogoLink to="/" className={({ isActive }) => (isActive ? "" : "")}>
        <Img width="40" height="33" src={LogoIcon} alt="Logo" />
      </LogoLink>
      <Nav>
        <List>
          {data.map((item) => (
            <Item key={item.text}>
              <LinkItem to={item.text.toLocaleLowerCase()}>
                <Img width="28" height="28" src={item.img} alt={item.text} />
                <Span>{item.text}</Span>
              </LinkItem>
            </Item>
          ))}
        </List>
      </Nav>
      <Button>Tweet</Button>
    </Block>
  );
};
