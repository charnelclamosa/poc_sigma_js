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
      selector: '.faded',
      style: {
        'opacity': 0.2
      }
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
  wheelSensitivity: 0,
  layout: {
    name: 'preset'
  }
})

// Lock the nodes and edges?
cy.autolock( true );

cy.on('tap', (evt) => {
  if(evt.target === cy) {
    removeHighlighted()
    removeFaded()
  }
})
cy.on('tap', 'node', (evt) => {
  var i = 0
  var targetEdges = cy.edges(`edge[source='${evt.target.data('id')}']`)
  var children = targetEdges.targets()
  
  removeHighlighted()
  removeFaded()

  evt.target.addClass('highlighted')

  var highlightNextEle = () => {
    if(i < children.length) {
      children[i].addClass('highlighted')
      targetEdges[i].addClass('highlighted')
      i++
      highlightNextEle()
    }
  }

  highlightNextEle()
  fadeUnselected()
  
  // Open URL of the node, if there is any
  if(evt.target.data('url').length > 0) {
    try {
      window.open(evt.target.data('url'))
    } catch (error) {
      window.location.href = evt.target.data('href');
    }
  }
})

cy.on('mouseover', 'node', (evt) => {
  if(evt.cy.container && evt.target.data().url.length > 0) {
    evt.cy.container().style.cursor = 'pointer';
  }
})

cy.on('mouseout', 'node', (evt) => {
  if(evt.cy.container) {
    evt.cy.container().style.cursor = 'default';
  }
})

function fadeUnselected() {
  var allNodes = cy.nodes()
  var allEdges = cy.edges()

  allNodes.map((node) => {
    if(node.classes().length == 0) {
      node.addClass('faded')
    }
  })
  allEdges.map((edge) => {
    if(edge.classes().length == 0) {
      edge.addClass('faded')
    }
  })
}

function removeHighlighted() {
  cy.nodes().map((x) => {
    x.removeClass('highlighted')
  })
  cy.edges().map((x) => {
    x.removeClass('highlighted')
  })
}

function removeFaded() {
  cy.nodes().map((node) => {
    node.removeClass('faded')
  })
  cy.edges().map((edge) => {
    edge.removeClass('faded')
  })
}

/**
 * Graph controls
 */
$("#zoom-in").click(() => {
  let currentZoom = cy.zoom()
  cy.zoom(currentZoom + 0.050)
})

$("#zoom-out").click(() => {
  let currentZoom = cy.zoom()
  cy.zoom(currentZoom - 0.050)
})