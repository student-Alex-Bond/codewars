function iceBrickVolume(radius, bottleLength, rimLength) {
  // Your code should be here ;)
  return ((bottleLength- rimLength)*(Math.cos(45)*(radius*2)))*4
}


console.log(iceBrickVolume(5,30,7))
