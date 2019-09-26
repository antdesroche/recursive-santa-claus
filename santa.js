function deliverpresents(houses) {

  if (houses.length === 0) return

  var first = houses.slice(0, 1)[0]
  var rest = houses.slice(1, houses.length)
  console.log("Delivering presents to " + first)
  deliverpresents(rest)
}

module.exports = deliverpresents


