#!/usr/bin/make

#	The shell that is going to execute the recipies.
SHELL									 = /usr/bin/bash
#	Backtrack changes so that the directory tree does not
#	contain incomplete changes.
.DELETE_OR_ERROR:
#	Default target to run against.
.DEFAULT_GOAL	         := all

#	System programs
INSTALL								 = /usr/bin/install
MKDIRP								 = /usr/bin/mkdir -p
SORT									 = /usr/bin/sort
CP										 = /usr/bin/cp
RM										 = /usr/bin/rm
CHMOD									 = /usr/bin/chmod
MPP										 = /usr/bin/m4

# Language package manager programs
NODE                   = node # Installed through nvm
SERVER                 = npx vite
BUNDLER								 = npx esbuild

#	Self developed programs
DOTENV                 = ~/bin/dotenv

#	Dirs
PKGDIR								 = .
PKGDIR_ABS						 = $(shell pwd)
SRCDIR								 = $(PKGDIR)/src
SRCDIR_ABS						 = $(PKGDIR_ABS)/src
TESTDIR								 = $(PKGDIR)/tests
DOCSDIR								 = $(PKGDIR)/docs
CONFDIR								 = $(PKGDIR)/config
TEMPDIR								 = $(PKGDIR)/tmp
BUILDIR								 = $(PKGDIR)/build

# Root of the module dependency graph
ENTRY_POINT_BASENAME	 = index.jsx
ENTRY_POINT						 = $(SRCDIR)/$(ENTRY_POINT_BASENAME)

# Dotenv configuration
LOADENV                = set -o allexport; source $(PKGDIR)/.env
ENVDIRS								 = $(PKGDIR)/config/env $(PKGDIR)
ENVARS                 =

# Bundler configuration
BUNDLE                 = $(NODE) $(PKGDIR)/esbuild.config.js

.PHONY: all
all: build

# ------------------------------ RUN -------------------------------- #
.PHONY: run run-entry
run: file ?= $(ENTRY_POINT)
run: mode ?= 'development'
run: env
	$(LOADENV); $(NODE) $(file)

run-entry: mode ?= 'development'
run-entry: env
	$(LOADENV); $(NODE) $(ENTRY_POINT)

# ------------------------------ SCRATCH ---------------------------- #
.PHONY: scratch
scratch: mode ?= 'development'
scratch: env
	$(LOADENV); $(NODE) $(PKGDIR)/tmp/scratch.js

# ------------------------------ DEV -------------------------------- #
.PHONY: dev
dev: mode ?= 'development'
dev: env
	$(LOADENV); $(SERVER) serve --mode=$(mode) --force

# ------------------------------ BUILD ------------------------------ #
.PHONY: build
build: mode ?= 'production'
build: env
	-rm -rdf $(PKGDIR)/dist
	$(LOADENV); $(BUNDLE)

# ------------------------------ CLEAN ------------------------------ #
.PHONY: clean
clean:
	-$(RM) -rdf $(PKGDIR)/dist
	-$(RM) $(PKGDIR)/.env

# ------------------------------ ENV -------------------------------- #
.PHONY: env env-dry
env: mode ?= 'production'
env:
	$(DOTENV) --mode=$(mode) $(ENVDIRS) | $(SORT) > $(PKGDIR)/.env

env-dry:
	$(DOTENV) --mode=$(mode) $(ENVDIRS) | $(SORT)

# ------------------------------ HELP ------------------------------- #
.PHONY: help

help:
	@cat $(PKGDIR)/Makefile | grep -i --color=auto 'phony'
