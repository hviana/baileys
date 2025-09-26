https://github.com/WhiskeySockets/Baileys lib ported to jsr

```typescript
import baileys from "jsr:@hviana/baileys";
```

build

#requires Deno >= version 2.5.2 and Node with NPM

```bash
npm install baileys github:whiskeysockets/eslint-config github:WhiskeySockets/libsignal-node
rm -rf package.json package-lock.json
deno task build
```
