let setBrowserPolicies = () => {
    BrowserPolicy.content.allowOriginForAll( '*' );
    BrowserPolicy.content.allowEval();
}

Modules.server.setBrowserPolicies = setBrowserPolicies;