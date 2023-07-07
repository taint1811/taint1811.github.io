# import config.
# You can change the default config with `make cnf="config_special.env" build`
cnf ?= make.d/config.env
include $(cnf)
export $(shell sed 's/=.*//' $(cnf))

# import deploy config
# You can change the default deploy config with `make cnf="deploy_special.env" release`
dpl ?= make.d/deploy.env
include $(dpl)
export $(shell sed 's/=.*//' $(dpl))

# main config 
mcf ?= .env
include $(mcf)
export $(shell sed 's/=.*//' $(mcf))


# HELP
# This will output the help for each task
# thanks to https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
.PHONY: help

help: ## This help.
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

# grep the version from the mix file
VERSION=1.0.0
 
git-push-dev:
	git add . && git commit -m "fix" && git push origin dev
git-push-stag:
	git checkout stag && git merge dev -m "fix" && git push origin stag && git checkout dev
git-push-release:
	git checkout release && git merge dev -m "fix" && git push origin release && git checkout dev

git-fetch-dev:
	git fetch && git reset --hard origin/dev
git-fetch-stag:
	git fetch && git reset --hard origin/stag
git-fetch-release:
	git fetch && git reset --hard origin/release

version: ## Output the current version
	@echo $(VERSION)