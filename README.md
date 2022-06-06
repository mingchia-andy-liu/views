# Views

This is a simple project for me to track the number of visit on my site without a crazy GA setup. I just need something that track the count and return to me the total. Also, some of the analaytics tracking tool are blocked by ad-blockers or requires javascript enabled.

I want a tool that is easy and somewhat accurate. I use durable object to see what it can do as I've used other tech from Cloudflare before.

![View count](https://views.aliu.dev?page=https://github.com/mingchia-andy-liu/views&label=Views")


### 🚀 Usage

⚠️ The count does not reflect actual user visit, it just a number that keeps growing, use at your own risk!

html
```html
<img src="https://views.aliu.dev?page=https://github.com/mingchia-andy-liu/views&label=Views>
```

Markdown
```md
![View count](https://views.aliu.dev?page=https://github.com/mingchia-andy-liu/views&label=Views")
```


### 🛠 Options

| Option | Required | Type | Note |
|---|---|---|---|
| page | Yes | string | The target url to be tracked |
| style | No | 'text' \| 'badge' | Default `badge`. `text` will only how the count as plain text |
| label | No | string | The label text of the badge. By default it will use the `page` value  |

### 📗 Stack

- [Durable Object](https://developers.cloudflare.com/workers/learning/using-durable-objects)
- [Wrangler (1.19.3+)](https://github.com/cloudflare/wrangler)
- TypeScript
- Rollup
