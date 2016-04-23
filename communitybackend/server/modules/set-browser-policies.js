let setBrowserPolicies = () => {
    BrowserPolicy.content.allowOriginForAll( '*' );
}

Modules.server.setBrowserPolicies = setBrowserPolicies;