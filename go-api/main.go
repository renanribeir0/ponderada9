package main

// Importando pacotes necessários
import (
	"net/http"

	"github.com/go-chi/chi/v5"            // Framework para criar APIs
	"github.com/go-chi/chi/v5/middleware" // Middleware para logging e outras funcionalidades
)

// main é a função principal que inicia o servidor
func main() {
	r := chi.NewRouter()     // Criando um novo roteador
	r.Use(middleware.Logger) // Adicionando middleware para logar requisições
	// Definindo a rota principal
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		// Enviando resposta "welcome" para o cliente
		w.Write([]byte("welcome"))
	})
	// Iniciando o servidor na porta 3000
	http.ListenAndServe(":3000", r)
}
