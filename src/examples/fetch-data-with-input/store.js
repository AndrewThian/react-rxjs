import {
  mergeMap,
  map,
  switchMap,
  toArray,
  filter,
  combineLatestWith,
} from "rxjs/operators";
import { fromFetch } from "rxjs/fetch";
import { BehaviorSubject } from "rxjs";
import { useState, useEffect } from "react";

const GENSHIN_API = "https://api.genshin.dev";

const fetchJSON = (url) =>
  fromFetch(url).pipe(switchMap((resp) => resp.json()));

export const allGenshinCharacters$ = fromFetch(
  `${GENSHIN_API}/characters`
).pipe(
  // switch to resolve the resp.json promise
  switchMap((resp) => resp.json()),
  // flatten the results into individual elements of a stream
  mergeMap((val) => val),
  filter((entityName) => !RegExp("traveler").test(entityName)),
  // merge the current stream with a secondary observable for fetching the image
  mergeMap((entityName) => {
    const info$ = fetchJSON(`${GENSHIN_API}/characters/${entityName}`);
    const imgSrc = `${GENSHIN_API}/characters/${entityName}/gacha-card`;
    return info$.pipe(map((resp) => ({ ...resp, img_src: imgSrc })));
  }),
  toArray()
);

export const search$ = new BehaviorSubject("");

export const filteredCharacters$ = allGenshinCharacters$.pipe(
  // combine stream with search observable
  combineLatestWith(search$),
  // take both emissions and filter
  map(([characters, searchInput]) => {
    return characters.filter((character) => {
      const term = character.name.toLowerCase() + character.vision.toLowerCase()
      return term.includes(searchInput.toLowerCase())
    });
  })
);

export const useObserverable = (observerable$, initValue = 0) => {
  const [state, setState] = useState(initValue);

  useEffect(() => {
    if (!observerable$) return;

    const subscription = observerable$.subscribe((value) => {
      setState(value);
    });

    return () => subscription.unsubscribe();
  }, [observerable$, setState]);

  return state;
};
