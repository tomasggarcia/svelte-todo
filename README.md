npm init vite .


# change port

vite.config.ts :
```
export default defineConfig({
  plugins: [svelte()],
  server: {
    port: 3000
  }
})
```

npm run build

npm run dev

