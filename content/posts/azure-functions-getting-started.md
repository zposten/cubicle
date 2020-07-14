---
title: How to get started with Azure Functions in Node.js
description: What I've learned from my confusing initial experience setting up Azure Functions in JavaScript
author: Zach Posten
date: 2020-7-13
tags: azure, nodejs, javascript, typescript
id: azure-functions-getting-started
imageFilename: azure-functions.png
---

I was asked to write several Azure Functions in JavaScript that modified a Cosmos DB via its Gremlin API. When I was asked to do that, I had only a vague idea of what an Azure Function was, I had never touched Cosmos DB before and I couldn't begin to imagine what the hell a Gremlin API was.

But after hours spent sorting through the confusing, incomplete assortment of Microsoft documentation on the topic, I did manage to produce some nice functions and gain an understanding of the various aspects of Azure Functions.

In this post, I hope to help your getting started experience move along faster than mine did.

> Note: There are [a number of different languages](https://docs.microsoft.com/en-us/azure/azure-functions/supported-languages) that you can write Azure Functions in, in this article I will only be referencing the JavaScript (and TypeScript) languages specifically.

### Why would you want to use an Azure Function?

[Jamstack](https://jamstack.org) is growing in popularity, and for good reason! Jamstack sites are [serverless](https://serverless.css-tricks.com). Instead of storing source files on a dedicated server, the source files are instead served over a CDN for better (potentially global) performance.

But if there's no server, then how do you interact with a database or any other backend service? That's where Azure Functions (or something like it) comes in.

The idea behind Azure Functions is to have a blob of code that you can push to the cloud, without having to worry about ecosystem in which it runs. You don't have to create (for example) an [express](https://expressjs.com) server and then figure out how to publish and run that server in the cloud. Instead, you just give Azure a blob of code and set some configuration options about when that code is run.

### A quick overview of how they work

There are 4 pieces that make up an Azure Function, as illustrated well by the Azure Portal:

1. Trigger
2. Inputs
3. The actual function code
4. Outputs

<img src="/static/images/blog/azure-funcs/azure-func-integration.png" width="100%" style="margin-top: 30px" />

#### Trigger

The function trigger is the condition that tells the function to run. [Azure supports a wide variety of triggers](https://docs.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings#supported-bindings); additions or mutations of Blob Storage, a change to a Cosmos DB, and an HTTP request to name a few.

The trigger is passed as the second argument to your function, the first being the context object.

```js
module.exports = async function(context, myTrigger, myInput, myOtherInput) { ... }
```

For HTTP triggers for example, the [HTTP request object](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node#request-object) will be passed.

#### Inputs

Inputs are passed as arguments to your function. The first input will be the third argument, the first being the context object and the second being the trigger.

There are [other ways](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node#inputs) to access the inputs too.

#### The actual function code

One confusing thing about the function is the first argument that's always passed to it, the `context` object.

The context is basically just an object jam-packed with everything that Microsoft wants to give your function access to.

For example you can call `context.log()` to write trace output to the console. You can also call `context.log.warn()`, `context.log.error()` and `context.log.verbose()`.

The context is also where you'll access the bindings you've configured via `context.bindings`. HTTP request triggers and HTTP response outputs are so common, that in addition to being able to access theme via `context.bindings.req` and `context.bindings.res` respectively, they also exist directly on the context object as `context.res` and `context.res`. That's in addition to the `req` being injected as the second argument to your function. They give you plenty of rope to hang yourself with here, but just pick your favorite and be consistent.

#### Outputs

Outputs are the side effects that your function produces, like creating or updating an entry in your database.

When the Microsoft documentation [talks about outputs](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node#outputs), they're exclusively referencing their [available](https://docs.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings#supported-bindings) output **bindings**.

A binding is basically a way of interacting with some other system that Microsoft has baked into the Azure function for you. But because you have access to NPM packages (I talk about how to install them below), you're not limited to just those bindings.

For example, Microsoft does [not currently support](https://github.com/Azure/azure-functions-python-worker/issues/413) binding to a Cosmos DB using the Gremlin API. To do this, I had to make use of the [gremlin](https://www.npmjs.com/package/gremlin) NPM package.

### Where to start

Before I talk about how to get started, I wanted to clarify something that confused me initially.

Your goal is to set up a Functions project (the Azure portal calls it a Function App), not a singular function. So if you use the portal to create a Function, you're creating one Function inside of a Functions project. If you use an IDE, you're creating the structure of the project first and then individual functions inside of that project.

#### Probably don't use the portal

It's possible to develop Azure Functions without ever leaving the Azure portal. But it sucks. Their online code editor is frustrating for even the simplest of changes, and while using the portal it's not possible to also use any NPM library.

Additionally, and perhaps most importantly, writing your Functions in the portal prevents you from storing them in version control! One accidental click and all the work you've done can be deleted.

Using the portal can be a nice way to just write _something_ up there and see it run quick, but even for that use case I think you would be better off...

#### Using VS Code

VS Code has an [Azure Functions extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions) that is incredibly easy to use and makes the whole process of setting up a Functions project much easier.

I would suggest just following the steps laid out on the extension's home page. They walk you through creating a project and creating your first Function. Keep in mind that if you've messed around on the portal, you can use the Function project that you've already created to save on paying for additional resources.

One other area you might deviate from their walkthough is in how you run your Function project locally. They suggest using the integrated VS Code debugger. You can definitely do that if you want to, but I prefer running scripts in my own terminal outside of VS Code.

To do so, from the root of the project run `npm start` in your terminal. This does the same thing that the VS Code integrated debugger would do; using the pre-installed `@azure/functions` NPM package to watch your code and restart the server when you make changes.

> When I used the VS Code native debugger, it would crash every time I made changes to the source files, forcing me to re-run it each time, which was really annoying. That bug could very well be fixed by the time you're reading this though.

#### Installing NPM packages

You can bolster the power of Azure Functions by installing and using libraries from NPM.

Doing so is as simple as running `npm install` in the root of the project (as you would expect) and then `require`ing or `import`ing them exactly as you normally would.

When you deploy your functions to azure, your `node_modules` directory will be deployed as well so that everything continues to run the same once deployed as it ran locally.

#### JavaScript vs TypeScript

When you use the VS Code extension to initialize your Functions project, you get to choose between JavaScript and TypeScript for your project.

This choice is largely preference based, but I feel that TypeScript has two big advantages here:

- Strong typing is extremely useful when you're working with a database.
  - It's just too easy to mess up your data-structure when writing a different query and then have to annoyingly go back and fix it.
- Using TypeScript also allows you to use the ES6 module syntax for imports and exports instead of NPM's `module.exports` syntax, which I strongly prefer.

The only disadvantage that I've found is that sourcemaps don't see seem to work, so your errors don't point to your original source code, but it's generally pretty easy to figure that out for yourself.

### Additional Resources

On the whole, I found Microsoft's documentation around Azure Functions rather confusing and disappointing. Perhaps they do have some great docs somewhere, but it's really hard to find the one you're looking for when you're not sure what that is.

The piece of documentation that helped me the most though (and the one that I linked to several times in this post) was definitely their [Azure Functions JavaScript developer guide](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node#dependency-management). It explains the nitty-gritty details of a lot of what I talked about in this post, and is a good place to reference when you're trying to do something specific that's not working.

If you're looking for more information on how to work with the Gremlin API of a Cosmos DB, I should have another post about that specifically coming soon!
