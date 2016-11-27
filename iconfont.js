;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="aixin" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M723.114667 128c-144.682667 0-211.541333 103.594667-211.541333 103.594667S441.130667 128 296.448 128c-144.682667 0-213.333333 139.605333-213.333333 256 0 116.394667 55.722667 311.808 428.458667 515.328 372.736-203.52 429.312-400.384 429.312-516.736C940.885333 266.197333 867.797333 128 723.114667 128z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="aixin1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M723.404255 66.832764c-82.994157 0-160.160952 41.633778-210.951384 110.285525-50.761768-68.669386-127.91313-110.285525-210.951384-110.285525-149.608643 0-271.326204 133.074633-271.326204 296.659685 0 97.590122 43.593871 166.05005 78.637416 221.056113 101.847646 159.772903 357.925256 358.604344 368.773013 366.987102 10.448683 8.078492 22.663433 12.117738 34.851725 12.117738 12.216955 0 24.414067-4.041451 34.851725-12.117738 10.858781-8.382758 266.951824-207.214199 368.770808-366.987102 35.058979-55.006063 78.668284-123.468195 78.668284-221.056113C994.73046 199.907397 873.012898 66.832764 723.404255 66.832764zM866.521883 546.793077c-96.946312 152.130967-354.084445 350.832323-354.084445 350.832323s-257.107265-198.703561-354.084445-350.832323c-35.764524-56.163598-67.789659-109.544703-67.789659-183.300628 0-127.359718 94.430603-230.647117 210.938155-230.647117 86.098556 0 160.013229 56.487708 192.80344 137.356411l0-0.403484 0.088193 0c2.44295 8.433469 9.564546 14.580531 18.044317 14.580531 8.508433 0 15.632235-6.147062 18.057546-14.580531l0.249146 0c32.865175-80.628376 106.676221-136.952927 192.657921-136.952927 116.478889 0 210.938155 103.287399 210.938155 230.647117C934.34241 437.248374 902.317275 490.629479 866.521883 546.793077z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
