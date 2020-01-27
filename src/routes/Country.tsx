import React from "react";
import { Grid, Image, Segment, Header, Statistic } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Storage } from "../core/Storage";
import { Stat } from "../components/Stat";
import { ListBlock } from "../components/ListBlock";
import { ErrorMessage } from "../components/ErrorMessage";

export const Country = React.memo(() => {
  const params = useParams<{ country: string }>();
  const storage = React.useContext(Storage);

  const country = React.useMemo(
    () => storage.find(c => c.name === params.country),
    [storage, params.country]
  );

  if (!country) {
    return <ErrorMessage></ErrorMessage>;
  }

  return (
    <Segment>
      <Grid>
        <Grid.Column width={4}>
          <Image src={country.flag} bordered />
        </Grid.Column>
        <Grid.Column width={9}>
          <Header as="h1">{country.name}</Header>

          <SStaticGroup size="small">
            <Stat label="Capital">{country.capital}</Stat>
            <Stat label="Region">{country.region}</Stat>
            <Stat label="Subregion">{country.subregion}</Stat>
            <Stat label="Population">{country.population}</Stat>
            <Stat label="Area">{country.area}</Stat>
            <Stat label="Native Name">{country.nativeName}</Stat>
            <Stat label="Numeric Code">{country.numericCode}</Stat>
          </SStaticGroup>

          <Grid columns={4} stackable>
            <ListBlock header="Timezones">{country.timezones}</ListBlock>
            <ListBlock header="Currencies">
              {country.currencies.map(
                c => `${c.name} - ${c.code} - ${c.symbol || "No symbol"}`
              )}
            </ListBlock>

            <ListBlock header="Languages">
              {country.languages.map(
                c =>
                  `${c.name} - ${c.nativeName} - ${c.iso639_1} - ${c.iso639_2}`
              )}
            </ListBlock>

            <ListBlock header="Top Level Domain">
              {country.topLevelDomain}
            </ListBlock>

            <ListBlock header="Calling Codes">{country.callingCodes}</ListBlock>

            <ListBlock header="Alt. Spellings">
              {country.altSpellings}
            </ListBlock>

            <ListBlock header="alpha2Code">{country.alpha2Code}</ListBlock>

            <ListBlock header="alpha3Code">{country.alpha3Code}</ListBlock>

            <ListBlock header="Borders">{country.borders}</ListBlock>

            <ListBlock header="Translations">
              {Object.entries(country.translations).map(
                ([lang, trans]) => `${lang} - ${trans}`
              )}
            </ListBlock>

            <ListBlock header="Latlng">{country.latlng}</ListBlock>

            <ListBlock header="Demonym">{country.demonym}</ListBlock>

            <ListBlock header="Gini">{country.gini}</ListBlock>

            <ListBlock header="Cioc">{country.cioc}</ListBlock>

            {country.regionalBlocs.map(b => (
              <ListBlock key={b.name} header={`${b.name} - ${b.acronym}`}>
                {b.otherNames.concat(b.otherAcronyms)}
              </ListBlock>
            ))}
          </Grid>
        </Grid.Column>
      </Grid>
    </Segment>
  );
});

const SStaticGroup = styled(Statistic.Group)`
  justify-content: center;
  margin-bottom: 20px !important;
`;
