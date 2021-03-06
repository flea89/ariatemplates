/*
 * Copyright 2013 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Aria.classDefinition({
    $classpath : "test.aria.widgetLibs.sampleWidget.test.SampleSimpleWidget",
    $extends : "aria.widgetLibs.BaseWidget",
    $dependencies : ["aria.utils.String", "aria.utils.Dom"],
    $constructor : function (cfg, ctxt, lineNumber) {
        this.$BaseWidget.constructor.apply(this, arguments);

        /**
         * Id of the main DOM element of this widget.
         * @type String
         */
        this._id = this._createDynamicId();

        /**
         * Reference of the DOM element with id this._id.
         * @type HTMLElement
         */
        this._domElt = null;
    },
    $prototype : {
        /**
         * Main widget entry-point. Write the widget markup (for a non-container widget).
         * @param {aria.templates.MarkupWriter} out
         */
        writeMarkup : function (out) {
            var html = ['<span id="', this._id, '">', aria.utils.String.escapeHTML(this._cfg.title), '</span>'];
            out.write(html.join(''));
        },

        /**
         * Initialization method called after the markup of the widget has been inserted in the DOM.
         */
        initWidget : function () {
            this._domElt = aria.utils.Dom.getElementById(this._id);
            this._domElt.innerHTML += aria.utils.String.escapeHTML(this._cfg.add);
        }
    }
});