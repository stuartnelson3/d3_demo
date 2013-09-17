document.addEventListener('DOMContentLoaded', function() {

  svg = d3.select('body').append('svg').attr('height', 420).attr('width', 960);

  addCircles = function(data) {
    var circles = svg.selectAll('circle').data(data);

    circles.enter().append('circle')
    .transition()
    .duration(750)
    .attr('cx', 0)
    .attr('r', 0)

    circles.transition()
    .duration(2500)
    .delay(function(d,i) { return i*250; })
    .attr('cy', 200)
    .attr('cx', function(d,i) { return d*60; })
    .attr('r', function(d,i) { return d*3; })

    svg.selectAll('circle')
    .data(data)
    .exit()
    .transition()
    .duration(2500)
    .delay(function(d,i) { return i*250; })
    .attr('cy', 2800)
    .attr('cx', function(d) { return d*100; })
    .attr('r', 0)
    .remove()

    addText(data);
  };

  addText = function(data) {
    var text = svg.selectAll('text').data(data);

    text.enter().append('text')
    .attr('y', function(d,i) { return 0; })
    .attr('x', function(d,i) { return d*60 + 13; })
    .attr('dx', -3) // padding-right
    .attr('dy', '.35em') // vertical-align: middle
    .attr('text-anchor', 'end') // text-align: right
    .text(function(d) { return d.name; });

    text.transition().duration(2500)
    .delay(function(d,i) { return i*250; })
    .attr('y', function(d) {return 210 + d*3;})
    .text(function(d) { return d.name || 'dot'; });
  }

  data = [1,2,3,4,5,6,7,8,9];
  // data = [
  //   {name: 'Mercury', size: 2},
  //   {name: 'Venus', size: 3},
  //   {name: 'Earth', size: 3.5},
  //   {name: 'Mars', size: 2.5},
  //   {name: 'Jupiter', size: 10},
  //   {name: 'Saturan', size: 7},
  //   {name: 'Uranus', size: 5.5},
  //   {name: 'Neptune', size: 4},
  //   {name: 'Pluto', size: 1},
  // ];
  addCircles(data);

})
