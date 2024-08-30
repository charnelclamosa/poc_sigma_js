import my_nodes from "./cy_nodes"
import my_edges from "./cy_edges"
import cytoscape_dom_node from "./cytoscape-dom-node"

cytoscape.use(cytoscape_dom_node);

var cy = cytoscape({
  container: $('#cy'),
  elements: [],
  style: [
    {
      selector: 'node',
      style: {
        'background-color': 'white',
        'border-width': 2,
        'border-color': '#239b56',
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
        "taxi-turn": 10,
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
  hideEdgesOnViewport: true,
  layout: {
    name: 'preset'
  }
})

cy.domNode();

/**
 * Add the HTML nodes.
 */
my_nodes.forEach((node) => {
  let div = document.createElement("div");
  if(node.data.url.length > 0) {
    div.innerHTML = `
    <div id='${node.data.id}' class='d-flex p-2 text-center justify-content-center align-items-center' style='width: 175px;'>
      <span>${node.data.name} <button class='btn btn-outline-primary px-1 py-0' onclick="window.open('${node.data.url}')">
        <i class="fa fa-external-link" aria-hidden="true"></i></button></span>
    </div>`;
  } else {
    div.innerHTML = `
    <div id='${node.data.id}' class='d-flex p-2 text-center justify-content-center align-items-center' style='width: 175px;'>
      <span>${node.data.name}</span>
    </div>`;
  }
  
  cy.add({
    data: {
      id: node.data.id,
      dom: div,
      url: node.data.url
    },
    position: {x: node.position.x, y: node.position.y}
  })
})

/**
 * Add the edges.
 */
my_edges.forEach((edge) => {
  cy.add({
    data: {
      source: edge.data.source,
      target: edge.data.target
    }
  })
})

// Lock the nodes and edges
// cy.autolock( true );

/**
 * Tap control that removes all highlighted nodes, and edges
 * when user clicks the graph body.
 */
cy.on('tap', (evt) => {
  if(evt.target === cy) {
    removeHighlighted()
    removeFaded()
  }
})

/**
 * Tap control that highlights the selected node along with edges
 * to targets, and source.
 */
cy.on('tap', 'node', (evt) => {
  var i = 0
  var targetEdges = cy.edges(`edge[source='${evt.target.data('id')}']`)
  var children = targetEdges.targets()

  removeHighlighted()
  removeFaded()

  let sourceEdges = cy.elements(`edge[target="${evt.target.data('id')}"]`)
  sourceEdges.addClass('highlighted')
  sourceEdges.forEach((elem) => {
    let sourceNode = cy.elements(`node[id="${elem.data('source')}"]`)
    sourceNode.addClass('highlighted')
  })

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
})

/**
 * Function for applying opacity to unselected nodes.
 */
function fadeUnselected() {
  var allNodes = cy.nodes()
  var allEdges = cy.edges()

  allNodes.map((node) => {
    if(node.classes().length == 0) {
      node.addClass('faded')
      $( `#${node.data().id}` ).addClass( "opacity-25" );
    }
  })
  allEdges.map((edge) => {
    if(edge.classes().length == 0) {
      edge.addClass('faded')
    }
  })
}

/**
 * Function for removing the highlight effect in all nodes, and edges.
 */
function removeHighlighted() {
  cy.nodes().map((x) => {
    x.removeClass('highlighted')
  })
  cy.edges().map((x) => {
    x.removeClass('highlighted')
  })
}

/**
 * Function for removing the opacity effect in all nodes, and edges.
 */
function removeFaded() {
  cy.nodes().map((node) => {
    node.removeClass('faded')
    $( `#${node.data().id}` ).removeClass( "opacity-25" );
  })
  cy.edges().map((edge) => {
    edge.removeClass('faded')
  })
}

/**
 * Graph controls on the right side of the graph.
 */
$("#zoom-in").click(() => {
  let currentZoom = cy.zoom()
  cy.zoom(currentZoom + 0.050)
})
$("#zoom-out").click(() => {
  let currentZoom = cy.zoom()
  cy.zoom(currentZoom - 0.050)
})