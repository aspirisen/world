import React from "react";
import styled from "styled-components";
import { Menu, Icon, Dropdown, Step, Input } from "semantic-ui-react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { MatchParams } from "../core/types";
import { useNavigation } from "../core/useNavigation";

export const Headline = React.memo(() => {
  const history = useHistory();
  const { query, setQuery } = useNavigation();

  const match = useRouteMatch<MatchParams>({
    path: "/:region/:country?"
  });

  const isRegionOpened =
    match?.params.region !== undefined && !match.params.country;

  const isCountryOpened = match?.params.country !== undefined;

  return (
    <SHeadline>
      <Menu attached="top">
        <Menu.Item header>
          <Icon name="globe"></Icon>
          World
        </Menu.Item>

        <Menu.Menu position="right">
          <Dropdown
            item
            simple
            disabled={isCountryOpened}
            value={query.sort}
            options={[
              {
                key: "asc",
                text: "Asc",
                value: "asc",
                onClick: () => setQuery({ sort: "asc" })
              },
              {
                key: "desc",
                text: "Desc",
                value: "desc",
                onClick: () => setQuery({ sort: "desc" })
              }
            ]}
          ></Dropdown>

          <Menu.Item>
            <Input
              transparent
              disabled={isCountryOpened}
              icon="search"
              placeholder="Search..."
              value={query.search}
              onChange={e => setQuery({ search: e.target.value })}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <Step.Group attached="top" size="mini" unstackable>
        <SStep onClick={() => history.push("/")}>
          <Icon name="world" />
          <Step.Content>
            <Step.Title>Global</Step.Title>
            <Step.Description>All regions</Step.Description>
          </Step.Content>
        </SStep>

        <SStep
          onClick={() => history.push(`/${match?.params.region}`)}
          disabled={!match?.params.region}
          active={isRegionOpened}
        >
          <Icon name="compass" />
          <Step.Content>
            <Step.Title>Region</Step.Title>
            <Step.Description>
              {match?.params.region ? match.params.region : "Select region"}
            </Step.Description>
          </Step.Content>
        </SStep>

        <SStep
          onClick={() =>
            history.push(`/${match?.params.region}/${match?.params.country}`)
          }
          disabled={!match?.params.country}
          active={isCountryOpened}
        >
          <Icon name="home" />
          <Step.Content>
            <Step.Title>Country</Step.Title>
            <Step.Description>
              {match?.params.country ? match.params.country : "Select Country"}
            </Step.Description>
          </Step.Content>
        </SStep>
      </Step.Group>
    </SHeadline>
  );
});

const SHeadline = styled(Step)``;

const SStep = styled(Step)`
  padding: 10px !important;
`;
