import { VFC } from "react";
import { useMediaQuery } from "react-responsive";
import { Box, List } from "@mui/material";
import { ListItemWithAvatar } from "src/components/Layout/List/ListItemWithAvatar";
import { InfoHeader } from "src/components/Movies/About/InfoHeader";
import { CreditsAvatar } from "./CreditsAvatar";

type CrewData = {
  id: number;
  job: string;
  name: string;
  profile_path: string;
}[];

type DirectorListProps = {
  crew: CrewData;
};

export const DirectorList: VFC<DirectorListProps> = (props) => {
  const { crew } = props;
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Box sx={{ mb: 2 }}>
      <InfoHeader text="監督" />
      {isMobileScreen ? (
        <List sx={{ p: 0 }}>
          {crew?.map(({ id, job, name, profile_path }) => {
            return job === "Director" ? (
              <ListItemWithAvatar
                dense={true}
                key={id}
                name={name}
                profilePath={profile_path}
              />
            ) : null;
          })}
        </List>
      ) : (
        <>
          {crew?.map(({ id, job, name, profile_path }) => {
            return job === "Director" ? (
              <CreditsAvatar
                key={id}
                name={name}
                profilePath={profile_path}
                tipPlacement="top"
              />
            ) : null;
          })}
        </>
      )}
    </Box>
  );
};
