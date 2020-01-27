import React from "react";
import { Statistic } from "semantic-ui-react";
import styled from "styled-components";

export interface StatProps {
  label: string;
}

export const Stat = React.memo((props: React.PropsWithChildren<StatProps>) => {
  return (
    <SStat>
      <Statistic.Label>{props.label}</Statistic.Label>
      <Statistic.Value>{props.children}</Statistic.Value>
    </SStat>
  );
});

const SStat = styled(Statistic)`
  margin: 15px !important;
`;
