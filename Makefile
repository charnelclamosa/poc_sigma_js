PROJECT = hugo_blank
VERSION ?= latest
IMAGE ?= $(PROJECT):$(VERSION)

.PHONY: all data run test clean unittest
HOST_DIR = $(shell pwd)

MOUNT_HOSTDIR = -v ${HOST_DIR}/src:/${PROJECT}/src
EXPOSE_PORTS = -p 9007:9005 -p 1313:1313

# Check if git submodules has initialized
IS_INIT = $(shell ls themes/portio/ | wc -l)

build:
ifeq ($(IS_INIT),0)
	@echo "Initialize git submodule to get theme"
	git submodule init && git submodule update
endif
	docker build $(BUILD_OPTS) -t $(IMAGE) .
	docker tag $(IMAGE) $(PROJECT):$(VERSION)

run:
	docker run -it --rm $(EXPOSE_PORTS) $(MOUNT_HOSTDIR) $(IMAGE)

sh:
	docker run -it --rm $(MOUNT_HOSTDIR) $(EXPOSE_PORTS) --entrypoint '' $(IMAGE) /bin/sh

sh-sandbox:
	docker run -it --rm $(EXPOSE_PORTS) --entrypoint '' $(IMAGE) /bin/sh
