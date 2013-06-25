
/**
 * expose
 */

module.exports = animationEventName;

/**
 *
 */

var animationEvents = { 'animationstart': 'AnimationStart', 'animationiteration': 'AnimationIteration', 'animationend': 'AnimationEnd' }
  , testNode = document.createElement('p')
  , testProperty = 'animation'
  , needPrefix = testNode.style[testProperty] == undefined
  , prefixes = ['o', 'MS', 'moz', 'webkit']
  , prefix = getPrefix()
  ;

/**
 * return the prefix for animation
 */

function getPrefix() {
    for (var i = prefixes.length - 1; i >= 0; i--) {
        if (testNode.style['-' + prefixes[i].toLowerCase() + '-' + testProperty] != undefined) {
            return prefixes[i];                
        };
    };
};

/**
 * prefix animation event name if needed
 *
 * @param {String} name
 * @return {String}
 * @api {public}
 */

function animationEventName (name) {
    return needPrefix
        ? prefix + animationEvents[name]
        : name
        ;
};
