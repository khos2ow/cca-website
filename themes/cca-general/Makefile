# LESS params
LESS_DIR = ./static-src/less
LESS_FILE = style.less

# CSS params
CSS_DIR = ./static/css
CSS_FILE = style.min.css
CSS_TMP_FILE = tmp.css

# JS params
JS_SRC_DIR   = ./static-src/js
JS_SRC_FILE  = script.js
JS_DEST_DIR  = ./static/js
JS_DEST_FILE = script.min.js

.PHONY: clean-css clean-js build build-css build-js

clean-css:
	rm -f $(CSS_DIR)/$(CSS_FILE)

clean-js:
	rm -f $(JS_DEST_DIR)/$(JS_DEST_FILE)

build: build-css build-js

build-css: clean-css
	lessc $(LESS_DIR)/$(LESS_FILE) > $(CSS_DIR)/$(CSS_TMP_FILE)
	uglifycss $(CSS_DIR)/$(CSS_TMP_FILE) > $(CSS_DIR)/$(CSS_FILE)
	rm -f $(CSS_DIR)/$(CSS_TMP_FILE)

build-js: clean-js
	uglifyjs $(JS_SRC_DIR)/$(JS_SRC_FILE) > $(JS_DEST_DIR)/$(JS_DEST_FILE)