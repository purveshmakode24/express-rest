## REST API with Node and Express

<table class="table table-hover table-dark text-center">
    <thead>
    <tr>
        <th scope="col">Operation</th>
        <th scope="col">HTTP Method</th>
        <th scope="col">URL</th>
        <th scope="col">URL params</th>
        <th scope="col">Request body</th>
        <th scope="col">Example</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <th scope="row">Create</th>
        <td>POST</td>
        <td>/api/posts/add</td>
        <td></td>
        <td>body: {...}</td>
        <td>POST /api/posts/add body: {...}</td>
    </tr>
    <tr>
        <th scope="row">Read One</th>
        <td>GET</td>
        <td>/api/posts/:id</td>
        <td>:id (item id)</td>
        <td></td>
        <td>GET /api/posts/123</td>
    </tr>
    <tr>
        <th scope="row">Read All</th>
        <td>GET</td>
        <td>/api/posts</td>
        <td></td>
        <td></td>
        <td>GET /api/posts</td>
    </tr>
    <tr>
        <th scope="row">Update</th>
        <td>PUT</td>
        <td>/api/posts/update/:id</td>
        <td>:id (item id)</td>
        <td>body: {...}</td>
        <td>PUT /api/posts/update/123 body:{...}</td>
    </tr>
    <tr>
        <th scope="row">Delete</th>
        <td>DELETE</td>
        <td>/api/posts/delete/:id</td>
        <td>:id (item id)</td>
        <td></td>
        <td>DELETE /api/posts/delete/123</td>
    </tr>
    </tbody>
</table>
<small id="Help" class="form-text text-muted"><code>To perform CRUD Operations locally, Refer above
        table</code></small>

---
<small id="Help" class="form-text text-muted">Go to <code>http://localhost:3000/api/posts</code> to get
    all data (in JSON).
</small>
