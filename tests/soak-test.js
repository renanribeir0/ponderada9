import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '1m', target: 100 },
        { duration: '24h', target: 100 },
        { duration: '1m', target: 0 }
    ]
};

export default function () {
    http.get('http://localhost:3000');
    sleep(1);
}
