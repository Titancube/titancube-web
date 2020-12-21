<template>
<div class="spinner">
  <div class="container">
    <div id="cube">
      <div class="front"></div>
      <div class="back"></div>
      <div class="right"></div>
      <div class="left"></div>
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    name: "Spinner"
}
</script>

<style scoped>
.spinner {
    z-index: 2;
    position: absolute;
    margin: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.container {
  width: 100px;
  height: 100px;
  position: relative;
  /* perspective: 1000px;
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px; */
}

#cube {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  animation: rotatecube 4s linear infinite;
  -webkit-animation: rotatecube 4s linear infinite;
  -moz-animation: rotatecube 4s linear infinite;
}

#cube div {
  width: 100px;
  height: 100px;
  display: block;
  position: absolute;
  border: none;
  line-height: 100px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
}

@keyframes rotatecube {
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(45deg);
  }
  25% {
    transform: rotateX(90deg) rotateY(90deg) rotateZ(45deg);
  }
  50% {
    transform: rotateX(180deg) rotateY(180deg) rotateZ(45deg);
  }
  75% {
    transform: rotateX(270deg) rotateY(270deg) rotateZ(45deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg) rotateZ(45deg);
  }
}

@-webkit-keyframes rotatecube {
  0% {
    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(45deg);
  }
  25% {
    -webkit-transform: rotateX(90deg) rotateY(90deg) rotateZ(45deg);
  }
  50% {
    -webkit-transform: rotateX(180deg) rotateY(180deg) rotateZ(45deg);
  }
  75% {
    -webkit-transform: rotateX(270deg) rotateY(270deg) rotateZ(45deg);
  }
  100% {
    -webkit-transform: rotateX(360deg) rotateY(360deg) rotateZ(45deg);
  }
}

@-moz-keyframes rotatecube {
  0% {
    -moz-transform: rotateX(0deg) rotateY(0deg) rotateZ(45deg);
  }
  25% {
    -moz-transform: rotateX(90deg) rotateY(90deg) rotateZ(45deg);
  }
  50% {
    -moz-transform: rotateX(180deg) rotateY(180deg) rotateZ(45deg);
  }
  75% {
    -moz-transform: rotateX(270deg) rotateY(270deg) rotateZ(45deg);
  }
  100% {
    -moz-transform: rotateX(360deg) rotateY(360deg) rotateZ(45deg);
  }
}

.front {
  background: rgba(152, 22, 147, 0.2);
}

.back {
  background: rgba(209, 26, 86, 0.2);
}

.right {
  background: rgba(85, 10, 82, 0.2);
}

.left {
  background: rgba(214, 20, 85, 0.356);
}

.top {
  background: rgba(216, 76, 211, 0.39);
}

.bottom {
  background: rgba(209, 26, 86, 0.2);
}

#cube .front {
  transform: rotateY(0deg) translateZ(50px);
  -webkit-transform: rotateY(0deg) translateZ(50px);
  -moz-transform: rotateY(0deg) translateZ(50px);
}
#cube .back {
  transform: rotateX(180deg) translateZ(50px);
  -webkit-transform: rotateX(180deg) translateZ(50px);
  -moz-transform: rotateX(180deg) translateZ(50px);
}
#cube .right {
  transform: rotateY(90deg) translateZ(50px);
  -webkit-transform: rotateY(90deg) translateZ(50px);
  -moz-transform: rotateY(90deg) translateZ(50px);
}
#cube .left {
  transform: rotateY(-90deg) translateZ(50px);
  -webkit-transform: rotateY(-90deg) translateZ(50px);
  -moz-transform: rotateY(-90deg) translateZ(50px);
}
#cube .top {
  transform: rotateX(90deg) translateZ(50px);
  -webkit-transform: rotateX(90deg) translateZ(50px);
  -moz-transform: rotateX(90deg) translateZ(50px);
}
#cube .bottom {
  transform: rotateX(-90deg) translateZ(50px);
  -webkit-transform: rotateX(-90deg) translateZ(50px);
  -moz-transform: rotateX(-90deg) translateZ(50px);
}
</style>