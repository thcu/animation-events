/**
 * @var {Array} prefixes - events prefixes (reverse order of preference due to reverse loop...)
 * @var {Object} animationEvents - map native event name to its unprefixed CamalCased counterpart
 * @var {String} styleProperty - style property to test on element
 * @var {Element} testNode - clean element to test prop on
 * @var {Boolean} noprefix - check if prefix is needed
 * @var {String} camelCaseEvent - reference to animationEvents[@param name]
 */

var prefixes = ['o', 'MS', 'moz', 'webkit']
    , animationEvents = { 'animationstart': 'AnimationStart', 'animationiteration': 'AnimationIteration', 'animationend': 'AnimationEnd' }
    , styleProperty = 'animation'
    , testNode = document.createElement('p')
    , noPrefix = testNode.style[styleProperty] != undefined
    , camelCaseEvent
    ;

/**
 * prefix animation event name if needed
 *
 * @param {String} name
 * @return {String}
 * @api {public}
 */

function animationEventName (name) {
    if (noPrefix) return name;
    camelCaseEvent = animationEvents[name];
    for (var i = prefixes.length - 1; i >= 0; i--) {
        if (testNode.style['-' + prefixes[i].toLowerCase() + '-' + styleProperty] != undefined) {
            return prefixes[i] + animationEvents[name];
        };
    };
};

/**
 * expose
 */

module.exports = animationEventName;