var $iA2ta$reactjsxruntime = require("react/jsx-runtime");
require("react");
var $iA2ta$reactdomclient = require("react-dom/client");
var $iA2ta$graphology = require("graphology");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}






class $56faa263c1dba774$export$89a04ea6f8dc4711 {
    graph = [];
    paths = [];
    // Private
    #graph = new (0, ($parcel$interopDefault($iA2ta$graphology)))();
    generateGraph = ()=>{
        const currentGraph = this.#graph;
        this.graph.forEach(({ path: path  })=>{
            currentGraph.addNode(path);
        });
        this.paths = currentGraph.mapNodes((_, { path: path  })=>path);
    };
}


const $824079997eaf3a25$export$86fbec116b87613f = ()=>{
    const featureRouter = new (0, $56faa263c1dba774$export$89a04ea6f8dc4711)();
    featureRouter.graph = [
        {
            path: "1/1",
            component: null
        },
        {
            path: "3",
            component: null
        }, 
    ];
    console.log(featureRouter.paths);
    return /*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, $iA2ta$reactjsxruntime.Fragment), {
        children: "Test"
    });
};


const $9233cea927cb9637$var$root = document.getElementById("root");
if ($9233cea927cb9637$var$root) (0, $iA2ta$reactdomclient.createRoot)($9233cea927cb9637$var$root).render(/*#__PURE__*/ (0, $iA2ta$reactjsxruntime.jsx)((0, $824079997eaf3a25$export$86fbec116b87613f), {}));


//# sourceMappingURL=main.js.map
