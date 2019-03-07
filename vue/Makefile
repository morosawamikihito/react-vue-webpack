CONTAINER_NAME=sample-nginx-vue
TAG=v1

build:
	yarn build
	docker build -t ${CONTAINER_NAME}:${TAG} .

push:
	docker push ${CONTAINER_NAME}:${TAG}

run:
	docker run -p 18080:80 -d ${CONTAINER_NAME}:${TAG}

register: build push

check:
	@echo 'CONTAINER NAME: ${CONTAINER_NAME}'
	@echo 'TAG: ${TAG}'

.PHONY: build push run register check
.DEFAULT_GOAL :=check
