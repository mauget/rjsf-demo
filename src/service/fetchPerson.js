import { PERSONS_URL } from '../constants/constants';

export default async function fetchData(id, setFetchData) {
    const res = await fetch(`${PERSONS_URL}/persons/${id}`);
    const person = await res.json();
    await setFetchData(person);
}
