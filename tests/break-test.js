import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '2m', target: 1000 }
    ]
};
// Teste de fumaça que valida se a aplicação está funcionando
export default function () {
    // Realiza um GET na aplicação
    http.get('http://localhost:3000');
    sleep(1); // Simula o tempo que um usuário levaria para interagir
}

// A função de teste deve cobrir todos os cenários possíveis para validar a lógica do código
// Usamos o conceito de TDD aqui, pois começamos escrevendo os testes antes de implementar a lógica do aplicativo
// Isso garante que, ao final, teremos um código que atende aos requisitos e pode ser facilmente testado

// O mesmo vale para os outros testes (load, stress, spike etc.):
// Cada teste deve ser criado com um objetivo específico em mente e deve ser capaz de validar se a aplicação se comporta como esperado sob diferentes condições de carga.