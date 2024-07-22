# Comandos
.PHONY: up up-d down build logs shell help ps buildBack buildFront shellBack shellFront
# Makefile

# Variables
DC := docker-compose

# Colores para la salida en consola
CYAN := \033[0;36m
NC := \033[0m # No Color

up: ## Inicia los contenedores
	@echo "$(CYAN)Iniciando contenedores...$(NC)"
	$(DC) up

up-d: ## Inicia los contenedores en modo detached
	@echo "$(CYAN)Iniciando contenedores en modo detached...$(NC)"
	$(DC) up -d

down: ## Detiene los contenedores
	@echo "$(CYAN)Deteniendo contenedores...$(NC)"
	$(DC) down

build: ## Construye o reconstruye los servicios
	@echo "$(CYAN)Construyendo servicios...$(NC)"
	$(DC) build

ps: ## Muestra los contenedores corriendo
	@echo "$(CYAN)Mostrando contenedores corriendo...$(NC)"
	$(DC) ps

buildBack: ## Reconstruye solo el backend
	@echo "$(CYAN)Reconstruyendo solo el backend...$(NC)"
	$(DC) build backend

buildFront: ## Reconstruye solo el frontend
	@echo "$(CYAN)Reconstruyendo solo el frontend...$(NC)"
	$(DC) build frontend

logs: ## Muestra los logs de los contenedores
	@echo "$(CYAN)Mostrando logs...$(NC)"
	$(DC) logs -f

shellBack: ## Abre una shell en el contenedor del backend
	@echo "$(CYAN)Abriendo shell en el contenedor del backend...$(NC)"
	$(DC) exec yatra-backend-1 sh

shellFront: ## Abre una shell en el contenedor del frontend
	@echo "$(CYAN)Abriendo shell en el contenedor del frontend...$(NC)"
	$(DC) exec yatra-frontend-1 sh

help: ## Muestra esta ayuda
	@echo "Uso: make [comando]"
	@echo ""
	@echo "Comandos disponibles:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(CYAN)%-10s$(NC) %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
