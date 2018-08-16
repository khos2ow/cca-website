# LESS params
LESS_DIR = ./static/less
LESS_FILE = main.less

# CSS params
CSS_DIR = ./static/css
CSS_FILE = main.min.css
CSS_TMP_FILE = tmp.css

# JS params
JS_DIR = ./static/js
JS_SRC_FILE = main.js
JS_MIN_FILE = main.min.js

.PHONY: clean-css clean-js build build-css build-js build-conf run

clean-css:
	rm -f $(CSS_DIR)/$(CSS_FILE)

clean-js:
	rm -f $(JS_DIR)/$(JS_MIN_FILE)

build: build-css build-js build-conf
	cd themes/cca-general && $(MAKE) build

build-css: clean-css
	if [ -d "$(LESS_DIR)" ]; then \
		lessc $(LESS_DIR)/$(1) > $(CSS_DIR)/$(CSS_TMP_FILE); \
		uglifycss $(CSS_DIR)/$(CSS_TMP_FILE) > $(CSS_DIR)/$(2); \
		rm -f $(CSS_DIR)/$(CSS_TMP_FILE); \
	fi

build-js: clean-js
	if [ -d "$(JS_DIR)" ]; then \
		uglifyjs $(JS_DIR)/$(JS_SRC_FILE) > $(JS_DIR)/$(JS_MIN_FILE); \
	fi

build-conf:
	cat config.common.toml configs/config.en.toml configs/config.fr.toml > config.toml

run: build
	./hugow server --theme cca-general --buildDrafts
