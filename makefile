# Comandos
.PHONY: up up-backend up-frontend up-d down build logs shell help ps buildBack buildFront shellBack shellFront
# Makefile

# Variables
DC := docker compose

up: ## Inicia los contenedores
	$(DC) up

up-backend:
	$(DC) up backend

up-frontend:
	$(DC) up frontend
	
up-d: ## Inicia los contenedores en modo detached
	$(DC) up -d

down: ## Detiene los contenedores
	$(DC) down

build: ## Construye o reconstruye los servicios
	$(DC) build

ps: ## Muestra los contenedores corriendo
	$(DC) ps

buildBack: ## Reconstruye solo el backend
	$(DC) build backend

buildFront: ## Reconstruye solo el frontend
	$(DC) build frontend

logs: ## Muestra los logs de los contenedores
	$(DC) logs -f

shellBack: ## Abre una shell en el contenedor del backend
	docker exec -it yatra-backend-1 sh

shellFront: ## Abre una shell en el contenedor del frontend
	docker exec -it yatra-frontend-1 sh

help: ## Muestra esta ayuda
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(CYAN)%-10s$(NC) %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
