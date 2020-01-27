import React from "react";
import { Grid, Loader } from "semantic-ui-react";

export const LoadingBlocker = React.memo(() => {
  return (
    <Grid padded>
      <Grid.Column>
        <Loader active inline="centered" />
      </Grid.Column>
    </Grid>
  );
});
