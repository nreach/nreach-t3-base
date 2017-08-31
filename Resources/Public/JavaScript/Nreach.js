requirejs.config({
    paths: {
        NreachUI: [
            'http://localhost:3001/webpack/NreachUI',
            //If the dev version fails, load local
            '../typo3conf/ext/nreach_t3_base/Resources/Public/JavaScript/lib/NreachUI'
        ]
    }
});

/**
 * @fileOverview Form JavaScript
 * @name Api.js
 * @author Johannes Goslar
 */
define([
    'jquery',
    './Remote',
    'NreachUI'
], function (
    $,
    Remote,
    NreachUI
) {
    if (HTMLCollection.prototype[Symbol.iterator] ==  null)
        HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

	var defaultSelector = function(element) {
        return $(element.parentElement.parentElement).siblings('.form-wizards-element')[0].children[0];
    };

	var nullSelector = function(element) {
        return null;
    };

	var trans = {
        'nreacht3-imagekeywords': {
            widget: 'ImageKeywords',
            selector: defaultSelector,
			targetSuffix: ''
        },
        'nreacht3-imagedescription': {
            widget: 'ImageDescription',
            selector: defaultSelector,
			targetSuffix: ''
        },
        'nreacht3-pagekeywords': {
            widget: 'PageKeywords',
            selector: defaultSelector,
			targetSuffix: ''
        },
        'nreacht3-magicrelation': {
            widget: 'MagicMedia',
            selector: nullSelector,
			targetSuffix: ''
        },
		'nreacht3-entity-formdata': {
            widget: 'EntityFormdata',
            selector: defaultSelector,
			targetSuffix: 'EntityFormdata'
        },
		'nreacht3-entity-jsonld': {
            widget: 'EntityJsonld',
            selector: defaultSelector,
			targetSuffix: 'EntityJsonld'
		}
    };

    $.each(trans,  function(className, config) {
        for (var element of document.getElementsByClassName(className))
			{
				var target = config.selector(element);
				var data = $.extend({['target' + config.targetSuffix]: target}, element.dataset);
				new NreachUI.default([config.widget], element, data, Remote);
			}
    });

    return NreachUI;
});
