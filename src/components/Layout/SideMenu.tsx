import { useState, VFC } from "react";
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ListItemLink } from "src/components/Layout/Link/ListItemLink";
import { COMPANY_LIST, GENRE_LIST, SORT_TYPES } from "src/utils/const";

export const SideMenu: VFC = () => {
  const [openGenre, setOpenGenre] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const maxListDisplay = 4;

  const handleMoreOpenGenre = () => {
    setOpenGenre(!openGenre);
  };

  const handleMoreOpenCompany = () => {
    setOpenCompany(!openCompany);
  };

  return (
    <div>
      <List sx={{ pt: 0 }}>
        <ListItem sx={{ pt: 0 }}>
          <ListItemText>
            <Typography color="white" sx={{ fontWeight: "bold" }}>
              ランキングで探す
            </Typography>
          </ListItemText>
        </ListItem>
        {SORT_TYPES.map(({ sort, text }) => {
          return (
            <ListItemLink
              key={sort}
              path={`/movies?page=1&sort_type=${sort}`}
              text={text}
            />
          );
        })}
        <Divider />
        <ListItem>
          <ListItemText>
            <Typography color="white" sx={{ fontWeight: "bold" }}>
              ジャンルで探す
            </Typography>
          </ListItemText>
        </ListItem>
        {GENRE_LIST.map(({ id, text }, i: number) => {
          return i < maxListDisplay ? (
            <ListItemLink
              key={text}
              path={`/movies?page=1&sort_type=popularity.desc&genre_id=${id}`}
              text={text}
            />
          ) : null;
        })}
        {!openGenre ? (
          <ListItem dense>
            <ListItemButton onClick={handleMoreOpenGenre}>
              <ListItemText>すべてを表示</ListItemText>
              <ExpandMore />
            </ListItemButton>
          </ListItem>
        ) : null}
        <Collapse in={openGenre} timeout="auto" unmountOnExit>
          {GENRE_LIST.map(({ id, text }, i: number) => {
            return i > maxListDisplay ? (
              <ListItemLink
                key={text}
                path={`/movies?page=1&sort_type=popularity.desc&genre_id=${id}`}
                text={text}
              />
            ) : null;
          })}
          <ListItemLink path="/genres" text="ジャンル一覧を表示" />
          {openGenre ? (
            <ListItem dense>
              <ListItemButton onClick={handleMoreOpenGenre}>
                <ListItemText>折りたたむ</ListItemText>
                <ExpandLess />
              </ListItemButton>
            </ListItem>
          ) : null}
        </Collapse>
        <Divider />
        <ListItem>
          <ListItemText>
            <Typography color="white" sx={{ fontWeight: "bold" }}>
              制作会社で探す
            </Typography>
          </ListItemText>
        </ListItem>
        {COMPANY_LIST.map(({ id, text }, i: number) => {
          return i < maxListDisplay ? (
            <ListItemLink
              key={text}
              path={`/movies?page=1&sort_type=popularity.desc&company_id=${id}`}
              text={text}
            />
          ) : null;
        })}
        {!openCompany ? (
          <ListItem dense>
            <ListItemButton onClick={handleMoreOpenCompany}>
              <ListItemText>すべてを表示</ListItemText>
              <ExpandMore />
            </ListItemButton>
          </ListItem>
        ) : null}
        <Collapse in={openCompany} timeout="auto" unmountOnExit>
          {COMPANY_LIST.map(({ id, text }, i: number) => {
            return i > maxListDisplay ? (
              <ListItemLink
                key={text}
                path={`/movies?page=1&sort_type=popularity.desc&company_id=${id}`}
                text={text}
              />
            ) : null;
          })}
          {openCompany ? (
            <ListItem dense>
              <ListItemButton onClick={handleMoreOpenCompany}>
                <ListItemText>折りたたむ</ListItemText>
                <ExpandLess />
              </ListItemButton>
            </ListItem>
          ) : null}
        </Collapse>
      </List>
    </div>
  );
};
