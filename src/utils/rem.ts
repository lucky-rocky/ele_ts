;(function() {
  const baseSize = 10 // 375宽度大小下,1rem=10
  function setRem() {
    let scale = document.documentElement.clientWidth / 375
    if (scale < 325 / 375) {
      scale = 325 / 375
    }
    document.documentElement.style.fontSize = baseSize * scale + 'px'
  }
  setRem()
  // 监听屏幕变化
  window.onresize = function() {
    setRem()
  }
})()
