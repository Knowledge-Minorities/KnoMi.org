
HOSTNAME=127.0.0.1
HTTPPORT=8080

.PHONY: build clean run

build: clean
	@printf "Running TypeScript Compiler ...\n"
	@tsc
	@printf "Running Webpack ...\n"
	@webpack
	@printf "All built !\n"

clean:
	@rm -rf build/

run: build
	@node build/server.js ${HOSTNAME} ${HTTPPORT}

