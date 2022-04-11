import { useCallback, VFC } from "react";
import { useMediaQuery } from "react-responsive";
import { Box, List } from "@mui/material";
import { InfoHeader } from "src/components/Movies/About/InfoHeader";
import { ListItemWithAvatar } from "src/components/Layout/List/ListItemWithAvatar";
import { CreditsAvatar } from "./CreditsAvatar";

type CrewData = {
  id: number;
  job: string;
  name: string;
  profile_path: string;
}[];

type ScreenwriterProps = {
  crew: CrewData;
};

export const ScreenwriterInfo: VFC<ScreenwriterProps> = (props) => {
  const { crew } = props;
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const unique = useCallback(
    (
      values: CrewData,
      f = (v: { id: number; job: string; name: string }) => v
    ) => {
      return Array.from(
        new Map(values?.map((value) => [f(value), value])).values()
      );
    },
    []
  );

  const uniqueCrew = unique(
    crew,
    (crew: { id: number; job: string; name: string }) => crew.id
  );

  return (
    <Box sx={{ mb: 2 }}>
      <InfoHeader text="脚本" />
      {isMobileScreen ? (
        <List sx={{ p: 0 }}>
          {uniqueCrew?.map(({ id, job, name, profile_path }) => {
            return job === "Story" ||
              job === "Writer" ||
              job === "Screenplay" ||
              job === "Screenstory" ||
              job === "Original Film Writer" ? (
              <ListItemWithAvatar
                key={id}
                dense={true}
                name={name}
                profilePath={profile_path}
              />
            ) : null;
          })}
        </List>
      ) : (
        <>
          {uniqueCrew?.map(({ id, job, name, profile_path }) => {
            return (job === "Story" ||
              job === "Writer" ||
              job === "Screenplay" ||
              job === "Screenstory" ||
              job === "Original Film Writer") &&
              profile_path ? (
              <Box key={id} sx={{ display: "inline-block" }}>
                <CreditsAvatar
                  name={name}
                  profilePath={profile_path}
                  tipPlacement="top"
                />
              </Box>
            ) : null;
          })}
        </>
      )}
    </Box>
  );
};
