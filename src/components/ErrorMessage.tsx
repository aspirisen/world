import React from "react";
import { Segment, Icon, Header } from "semantic-ui-react";

export const ErrorMessage = React.memo(() => {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="cogs" />
        Some error has occured
      </Header>
    </Segment>
  );
});
