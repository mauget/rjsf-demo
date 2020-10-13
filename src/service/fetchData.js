import { PERSONS_URL } from '../constants/constants';
import extractPersonData from '../functions/extractPersonData';

export default async function fetchData(setPersons) {
    const res = await fetch(`${PERSONS_URL}/persons`);
    const json = await res.json();
    await setPersons(extractPersonData(json));
}
