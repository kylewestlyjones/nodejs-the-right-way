import * as Handlebars from '../node_modules/handlebars/dist/handlebars.js'

export const main = Handlebars.compile(`
    <div class="container">
        <h1>B4 - Book Bundler</h1>
        <div class="b4-alerts"></div>
        <div class="b4-main"></div>
    <div>    
`)

export const welcome = Handlebars.compile(`
    <div class="h-100 p-5 bg-body-secondary border rounded-3">
        <h1>Welcome!</h1>
        <p>B4 is an application for creating book bundles.</p>
    </div>
`)

export const alert = Handlebars.compile(`
    <div class="alert alert-{{type}} alert-dismissible fade show" role="alert">
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        {{message}}
    </div>
`)

export const listBundles = Handlebars.compile(`
    <div class="border rounded-3">
        <div class="m-3">
            {{#if bundles.length}}
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Your Bundles</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>    
                <tbody>
                    {{#each bundles}}
                        <tr>
                            <td>
                                <a href="#view-bundle/{{id}}">{{name}}</a>
                            </td>
                            <td>
                                <button type="button" class="btn btn-outline-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    {{/each}}
                </tbody>
            </table>
            {{else}}
                <div class="card">
                    <p>None yet!</p>
                </div>
            {{/if}}
        </div>
    </div>
`)

export const addBundleForm = Handlebars.compile(`
    <div class="card mb-3">
        <div class="card-header">
            Create a new bundle
        </div>
        <div class="card-body">
            <form>
                <div class="mb-3">
                    <label for="bundleName" class="form-label">Bundle Name</label>
                    <input class="form-control" id="bundleName" aria-describedby="bundleName">     
                </div>
                <div class="mb-3">
                    
                        <button class="btn btn-outline-primary" type="submit">Create</button>
                    
                </div>        
            </form>
        </div>
    </div>
`)
