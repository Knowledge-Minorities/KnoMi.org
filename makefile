
HOSTNAME=127.0.0.1
HTTPPORT=8080

.PHONY: build clean run

build: clean
	@printf "Running TypeScript Compiler ...\n"
	@yarn run tsc
	@printf "Running Webpack ...\n"
	@yarn run webpack
	@printf "All built !\n"

clean:
	@rm -rf build/

run: build
	@node build/server.js ${HOSTNAME} ${HTTPPORT}

