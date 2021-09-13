import { END_POINT } from '../constant';

const fetcher = (url: string) => fetch(`${END_POINT}${url}`).then((r) => r.json());

export default fetcher;
