# contacts-plugin

Test Plugin Capacitor

## Install

```bash
npm install contacts-plugin
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`openChat(...)`](#openchat)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### openChat(...)

```typescript
openChat(options: { Url: string; OrganizationId: string; DeveloperName: string; }) => Promise<void>
```

| Param         | Type                                                                         |
| ------------- | ---------------------------------------------------------------------------- |
| **`options`** | <code>{ Url: string; OrganizationId: string; DeveloperName: string; }</code> |

--------------------

</docgen-api>
