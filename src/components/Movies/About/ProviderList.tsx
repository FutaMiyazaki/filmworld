import { VFC } from "react";
import { Avatar, Box, Tooltip, Typography } from "@mui/material";
import { InfoHeader } from "src/components/Movies/About/InfoHeader";

type ProviderData = {
  logo_path: string;
  provider_id: number;
  provider_name: string;
}[];

type ProviderListProps = {
  headerText: "購入" | "レンタル";
  providerList: ProviderData;
};

export const ProviderList: VFC<ProviderListProps> = (props) => {
  const { headerText, providerList } = props;

  return (
    <>
      {providerList?.length ? (
        <Box>
          <InfoHeader text={headerText} />
          {providerList?.map(({ logo_path, provider_id, provider_name }) => {
            return (
              <Tooltip
                key={provider_id}
                arrow
                disableInteractive
                placement="top"
                title={
                  <Typography
                    color="primary"
                    variant="subtitle1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {provider_name}
                  </Typography>
                }
              >
                <Avatar
                  alt={`${provider_name}のロゴ画像`}
                  src={`https://image.tmdb.org/t/p/original${logo_path}`}
                  variant="rounded"
                  sx={{ display: "inline-block", mr: 2, mt: 1, mb: 2 }}
                />
              </Tooltip>
            );
          })}
        </Box>
      ) : null}
    </>
  );
};
