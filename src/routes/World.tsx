import React from "react";
import { NavLink } from "react-router-dom";
import { Segment, Card } from "semantic-ui-react";
import { Storage } from "../core/Storage";
import { useFilter } from "../core/useFilter";
import { EmptySearchMessage } from "../components/EmptySearchMessage";

export const World = React.memo(() => {
  const countries = React.useContext(Storage);

  const regions = React.useMemo(() => {
    const regionsHash = countries.reduce(
      (hash: Record<string, { name: string; countries: number }>, country) => {
        if (!hash[country.region]) {
          hash[country.region] = {
            name: country.region,
            countries: 0
          };
        }

        hash[country.region].countries++;

        return hash;
      },
      {}
    );

    const regionsList = Object.values(regionsHash);
    return regionsList;
  }, [countries]);

  const filteredRegions = useFilter(regions, r => r.name);

  return (
    <Segment attached>
      {filteredRegions.length === 0 && (
        <EmptySearchMessage></EmptySearchMessage>
      )}

      <Card.Group centered>
        {filteredRegions.map(r => (
          <Card key={r.name} as={NavLink} to={`/${r.name}`}>
            <Card.Content>
              <Card.Header>{r.name}</Card.Header>
              <Card.Meta>Numbers of countries: {r.countries}</Card.Meta>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Segment>
  );
});
