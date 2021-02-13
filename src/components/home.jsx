ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={ShowPost} path="/"></Route>
        <Route component={AddPost} path="/addPost(/:id)"></Route>
        <Route component={ShowProfile} path="/showProfile"></Route>
    </Router>,
document.getElementById('app'));