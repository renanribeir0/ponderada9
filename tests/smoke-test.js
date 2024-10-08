import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '5s',
};

export default function () {
  http.get('http://localhost:3000'); // Altere para o endereço da sua API
  sleep(1);
}
