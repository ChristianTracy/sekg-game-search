## Modules

<dl>
<dt><a href="#module_controllers/games">controllers/games</a></dt>
<dd></dd>
<dt><a href="#module_controllers/health">controllers/health</a></dt>
<dd></dd>
<dt><a href="#module_controllers/unhealth">controllers/unhealth</a></dt>
<dd></dd>
<dt><a href="#module_middlewares/error">middlewares/error</a></dt>
<dd></dd>
<dt><a href="#module_services/games">services/games</a></dt>
<dd></dd>
<dt><a href="#module_utils/errorsHandler">utils/errorsHandler</a></dt>
<dd></dd>
<dt><a href="#module_services/httpClient">services/httpClient</a></dt>
<dd></dd>
</dl>

<a name="module_controllers/games"></a>

## controllers/games
<a name="module_controllers/games..search"></a>

### controllers/games~search(ctx)
Uses a service to look for a game and send the response
using Koa context

**Kind**: inner method of [<code>controllers/games</code>](#module_controllers/games)  
**Throws**:

- Will throw an error if the search query is null.


| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>Object</code> | Koa context |

<a name="module_controllers/health"></a>

## controllers/health
<a name="exp_module_controllers/health--module.exports"></a>

### module.exports(ctx) ⏏
Simple function that returns current date as request response

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>Object</code> | Koa context |

<a name="module_controllers/unhealth"></a>

## controllers/unhealth
<a name="exp_module_controllers/unhealth--module.exports"></a>

### module.exports(ctx) ⏏
Fake an error

**Kind**: Exported function  
**Throws**:

- Will throw an error


| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>Object</code> | Koa context |

<a name="module_middlewares/error"></a>

## middlewares/error
<a name="exp_module_middlewares/error--module.exports"></a>

### module.exports(ctx, next) ⏏
Error middleware to catch errores and emit them to the custom error handler

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>Object</code> | Koa context |
| next | <code>function</code> | Koa next |

<a name="module_services/games"></a>

## services/games

* [services/games](#module_services/games)
    * [~formatResults(results)](#module_services/games..formatResults) ⇒ <code>Array.&lt;object&gt;</code>
    * [~search(query)](#module_services/games..search) ⇒ <code>Promise.&lt;array&gt;</code>

<a name="module_services/games..formatResults"></a>

### services/games~formatResults(results) ⇒ <code>Array.&lt;object&gt;</code>
Format raw results into useful internal shape

**Kind**: inner method of [<code>services/games</code>](#module_services/games)  
**Returns**: <code>Array.&lt;object&gt;</code> - The data from the URL.  

| Param | Type | Description |
| --- | --- | --- |
| results | <code>Array</code> | Raw rawg results |

<a name="module_services/games..search"></a>

### services/games~search(query) ⇒ <code>Promise.&lt;array&gt;</code>
Calls rawg API to get a games list using a query string

**Kind**: inner method of [<code>services/games</code>](#module_services/games)  
**Returns**: <code>Promise.&lt;array&gt;</code> - The data from the URL.  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>String</code> | Koa context |

<a name="module_utils/errorsHandler"></a>

## utils/errorsHandler
<a name="exp_module_utils/errorsHandler--module.exports"></a>

### module.exports(errr, ctx) ⏏
Error handler, the error could be log, save into another platform
or wherever we needs to logs this information

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| errr | <code>Object</code> | Javascript error |
| ctx | <code>Object</code> | Koa context |

<a name="module_services/httpClient"></a>

## services/httpClient
<a name="module_services/httpClient..get"></a>

### services/httpClient~get(url, params)
Wrapper of axios get method

**Kind**: inner method of [<code>services/httpClient</code>](#module_services/httpClient)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | request url |
| params | <code>String</code> | query params |

