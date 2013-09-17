document.addEventListener('DOMContentLoaded', function() {

  svg = d3.select('body').append('svg').attr('height', 420).attr('width', 960);


  addCircles = function(data) {
    var color = d3.scale.category10();
    var name = function(d) { return d.name; };
    var circles = svg.selectAll('circle').data(data, name);

    circles.enter().append('circle')
    .transition()
    .duration(750)
    .attr('cy', -60)
    .attr('cx', function(d,i) { return i*110 + 60; })
    .attr('r', 0)
    .style('fill', function(d,i) { return color(i); })

    circles.transition()
    .duration(2500)
    .delay(function(d,i) { return i*250; })
    .attr('cy', 200)
    .attr('r', function(d,i) { return d.size*3; })

    svg.selectAll('circle')
    .data(data, name)
    .exit()
    .transition()
    .duration(2500)
    .delay(function(d,i) { return i*250; })
    .attr('cy', 2800)
    .attr('cx', function(d) { return 0; })
    .attr('r', 0)
    .remove()

    addText(data);
  };

  addText = function(data) {
    var name = function(d) { return d.name; };
    var text = svg.selectAll('text').data(data, name);

    text.enter().append('text')
    .attr('y', function(d,i) { return 500; })
    .attr('x', function(d,i) { return i*110 + 60; })
    .attr('dy', '.35em') // vertical-align: middle
    .attr('text-anchor', 'middle') // text-align: middle
    .text(function(d) { return d.name; });

    text.transition().duration(2500)
    .delay(function(d,i) { return i*250; })
    .attr('y', function(d) {return 210 + d.size*3;})
    .text(function(d) { return d.name || 'dot'; });

    svg.selectAll('text')
    .data(data, name)
    .exit()
    .transition()
    .duration(2500)
    .delay(function(d,i) { return i*250; })
    .attr('y', 2800)
    .attr('x', function(d) { return 0; })
    .remove()
  }

  // data = [1,2,3,4,5,6,7,8,9];
  data = [
    {name: 'Mercury', size: 2},
    {name: 'Venus', size: 3},
    {name: 'Earth', size: 3.5},
    {name: 'Mars', size: 2.5},
    {name: 'Jupiter', size: 10},
    {name: 'Saturn', size: 7},
    {name: 'Uranus', size: 5.5},
    {name: 'Neptune', size: 4},
    {name: 'Pluto', size: 1},
  ];
  data2 = [
    {name: 'Mercury', size: 4.5},
    {name: 'Venus', size: 7},
    {name: 'Earth', size: 3.5},
    {name: 'Jupiter', size: 1},
    {name: 'Pluto', size: 5}
  ];
  addCircles(data);

})
