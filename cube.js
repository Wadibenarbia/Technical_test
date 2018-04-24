var n = 4
var cube_face = Math.pow(n, 2) = 16
var cube_total = Math.pow(n, 3) = 64
var perimetre = n + (n - 1) +  (n - 1) + (n - 2) = 12
var cube_cache = cube_face - perimetre = 4
cube_cache = Math.sqrt(cube_cache)
cube_cache = Math.pow(cube_cache, 3)
var cube_total = (cube_total - cube_cache)

console.log(cube_total)
