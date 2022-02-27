import Head from "next/head";
import { Grid, Typography } from "@mui/material";
import { ButtonLink } from "src/components/Layout/Link/ButtonLink";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 Not Found - FilmWorld</title>
      </Head>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sx={{ my: 4 }}>
          <Typography
            align="center"
            variant="h3"
            sx={{ fontWeight: "bold", mb: 4 }}
          >
            404
          </Typography>
          <Typography
            align="center"
            variant="h5"
            sx={{ fontWeight: "bold", mb: 3 }}
          >
            Page Not Found
          </Typography>
          <Typography align="center" variant="subtitle1">
            ページが見つかりませんでした。
          </Typography>
          <Typography align="center" variant="subtitle1">
            URLが変更・削除されたか、現在ご利用できない可能性がございます。
          </Typography>
        </Grid>
        <Grid item>
          <ButtonLink path="/" text="トップページへ戻る" variant="contained" />
        </Grid>
      </Grid>
    </>
  );
};

export default Custom404;
