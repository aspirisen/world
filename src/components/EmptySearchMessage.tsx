import React from "react";
import { Segment, Header, Icon } from "semantic-ui-react";

export const EmptySearchMessage = React.memo(() => {
  return (
    <Segment placeholder attached>
      <Header icon>
        <Icon name="search" />
        We don't have any item matching your query.
      </Header>
    </Segment>
  );
});
