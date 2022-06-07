# Views
![View count](https://views.aliu.dev?page=https://github.com/mingchia-andy-liu/views&label=Page%20Views)

This is a simple project for me to track the number of visit on my site without a crazy GA setup. I just need something that track the page count for [my blog](https://blog.aliu.dev). Also, some of the analaytics tracking tools are blocked by ad-blockers or requires javascript enabled.

I want a tool that is easy and somewhat accurate. I use this as a practice to use durable object from Cloudflare.

The current production is powered by KV which is eventual consistent. I do not need a real-time view count. You can use Durable Object which is also supported by commenting out the KV section.

### 🚀 Usage

⚠️ The count does not reflect actual user visit, it just a number that keeps growing, use at your own risk!

html
```html
<img src="https://views.aliu.dev?page=https://github.com/mingchia-andy-liu/views&label=Views>
```

Markdown
```md
![View count](https://views.aliu.dev?page=https://github.com/mingchia-andy-liu/views&label=Views)
```

### 🛠 Options

| Option | Required | Type | Note |
|---|---|---|---|
| page | Yes | string | The target url to be tracked |
| style | No | '`text`' \| '`badge`' | Default `badge`. `text` will only how the count as plain text |
| label | No | string | The label text of the badge. By default, it will use the `page` value  |

### 📗 Stack

- [Durable Object](https://developers.cloudflare.com/workers/learning/using-durable-objects). Not in producation because it costs moeny.
    - see comments for how to use Durable Object
- [KV](https://developers.cloudflare.com/workers/runtime-apis/kv/) 
- [Wrangler (1.19.3+)](https://github.com/cloudflare/wrangler)
- TypeScript
- Rollup
