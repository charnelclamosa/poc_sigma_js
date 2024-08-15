import my_nodes from "./cy_nodes"
import my_edges from "./cy_edges"

var cy = cytoscape({
  container: $('#cy'),
  elements: {nodes: my_nodes, edges: my_edges},
  style: [
    {
      selector: 'node',
      style: {
        'background-color': '#ecf0f1 ',
        'label': 'data(id)',
        'shape': 'rectangle',
        'width': 250,
        'height': 55,
        'border-width': 1,
        'border-color': 'black',
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'black',
        'text-max-width': 225,
        'text-wrap': 'wrap'
      }
    },
    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle',
        'curve-style': 'round-taxi',
        "taxi-turn": 15,
        "taxi-turn-min-distance": 5,
        "taxi-radius": 5,
        
      },
      classes: ['multiline-auto']
    },
    {
      selector: '.highlighted',
      style: {
        'border-color': 'green',
        'border-width': 3,
        'line-color': 'green',
        'z-index': 999
      }
    }
  ],
  layout: {
    name: 'preset'
  }
})
cy.zoomingEnabled(false)
cy.on('click', 'node', (event) => {
  var connectedEdges = event.target.successors()
  var i = 0
  // console.log(event.target.data())
  cy.nodes().map((x) => {
    x.removeClass('highlighted')
  })
  cy.edges().map((x) => {
    x.removeClass('highlighted')
  })
  event.target.addClass('highlighted')

  var highlightNextEle = () => {
    if(i < connectedEdges.length) {
      connectedEdges[i].addClass('highlighted')
      console.log(connectedEdges[i].data())
      i++
      highlightNextEle()
    }
  }
  highlightNextEle()
})

cy.on('mouseover', 'node', (event) => {
  if(event.cy.container && event.target.data().url.length > 0) {
    event.cy.container().style.cursor = 'pointer';
  }

})

cy.on('mouseout', 'node', (event) => {
  if(event.cy.container) {
    event.cy.container().style.cursor = 'default';
  }
})