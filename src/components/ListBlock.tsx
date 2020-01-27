import React from "react";
import { List, Grid } from "semantic-ui-react";

export interface ListBlockProps {
  header: string;
  children: React.ReactText | Array<React.ReactText>;
}

export const ListBlock = React.memo((props: ListBlockProps) => {
  return (
    <Grid.Column>
      <List>
        <List.Item>
          <List.Header>{props.header}</List.Header>
          <List.Content>
            {Array.isArray(props.children)
              ? props.children.map(c => <div key={c}>{c}</div>)
              : props.children}
          </List.Content>
        </List.Item>
      </List>
    </Grid.Column>
  );
});
