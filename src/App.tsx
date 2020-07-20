import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { useApi } from "./core/useApi";
import { Headline } from "./components/Headline";
import { Region } from "./routes/Region";
import { World } from "./routes/World";
import { Storage } from "./core/Storage";
import { Country } from "./routes/Country";
import { ErrorMessage } from "./components/ErrorMessage";
import { LoadingBlocker } from "./components/LoadingBlocker";

export const App = React.memo(() => {
  const { countries, hasError, isLoading } = useApi();

  if (isLoading) {
    return <LoadingBlocker></LoadingBlocker>;
  }

  if (hasError || !countries) {
    return <ErrorMessage></ErrorMessage>;
  }

  return (
    <BrowserRouter>
      <Storage.Provider value={countries}>
        <Headline></Headline>

        <Switch>
          <Route path="/" exact component={World}></Route>
          <Route path="/:region" exact component={Region}></Route>
          <Route path="/:region/:country" exact component={Country}></Route>
        </Switch>
      </Storage.Provider>
    </BrowserRouter>
  );
});


console.log(1);
console.log(2);
console.log(3);


console.log('a');
console.log('b');
console.log('c');
console.log('ccc');
