# tmp build directory
TMP_DIR = /tmp
TMP_CSS_FILE = tmp.css

# LESS params
LESS_DIR = ./assets/less
LESS_FILE = style.less

# CSS params
CSS_DIR = ./static/css
CSS_FILE = style.min.css

# JS params
JS_SRC_DIR   = ./assets/js
JS_SRC_FILE  = script.js
JS_DEST_DIR  = ./static/js
JS_DEST_FILE = script.min.js

.PHONY: prepare prepare-css prepare-js

define clean_css
	rm -f $(CSS_DIR)/$(CSS_FILE)
endef

define clean_js
	rm -f $(JS_DEST_DIR)/$(JS_DEST_FILE)
endef

prepare: prepare-css prepare-js

prepare-css:
	if [ -d "$(LESS_DIR)" ]; then \
		$(call clean_css); \
		lessc $(LESS_DIR)/$(LESS_FILE) > $(TMP_DIR)/$(TMP_CSS_FILE); \
		uglifycss $(TMP_DIR)/$(TMP_CSS_FILE) > $(CSS_DIR)/$(CSS_FILE); \
		rm -f $(TMP_DIR)/$(TMP_CSS_FILE); \
	fi

prepare-js:
	if [ -d "$(JS_SRC_DIR)" ]; then \
		$(call clean_js); \
		uglifyjs $(JS_SRC_DIR)/$(JS_SRC_FILE) > $(JS_DEST_DIR)/$(JS_DEST_FILE); \
	fi
