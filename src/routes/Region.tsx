import React from "react";
import { Segment, Label } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import { Storage } from "../core/Storage";
import { useFilter } from "../core/useFilter";
import styled from "styled-components";
import { MatchParams } from "../core/types";
import { EmptySearchMessage } from "../components/EmptySearchMessage";

export const Region = React.memo(() => {
  const history = useHistory();
  const params = useParams<MatchParams>();
  const storage = React.useContext(Storage);

  const countries = React.useMemo(() => {
    const result = storage.filter(c => c.region === params.region);
    return result;
  }, [storage, params.region]);

  const filteredCountries = useFilter(countries, c => c.name);

  return (
    <SRegion>
      {filteredCountries.length === 0 && <EmptySearchMessage></EmptySearchMessage>}

      {filteredCountries.map(c => (
        <SRegionCard
          key={c.name}
          style={{ backgroundImage: `url(${c.flag})` }}
          onClick={() => history.push(`/${params.region}/${c.name}`)}
        >
          <Label attached="top">{c.name}</Label>
        </SRegionCard>
      ))}
    </SRegion>
  );
});

const SRegion = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SRegionCard = styled(Segment)`
  height: 150px;
  width: 150px;
  cursor: pointer;
  border: none;
  margin: 10px !important;
  background-repeat: no-repeat !important;
  background-size: contain !important;
  background-position: center !important;
`;
