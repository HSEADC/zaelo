import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, 'src')
const outDir = path.resolve(__dirname, 'docs')

const pages = {
  main: {
    file: 'index.html',
    chunks: ['/javascripts/allStyle.js', '/javascripts/animation.js']
  },
  test: {
    file: 'pages/test.html',
    chunks: ['/javascripts/allStyle.js']
  },
  mechanisms: {
    file: 'pages/mechanisms.html',
    chunks: ['/javascripts/allStyle.js']
  },
  habits: {
    file: 'pages/habits.html',
    chunks: ['/javascripts/allStyle.js']
  },
  about: {
    file: 'pages/about.html',
    chunks: ['/javascripts/allStyle.js', '/javascripts/animation.js']
  },
  'why-are-you-glued-to-the-phone': {
    file: 'pages/habits/why-are-you-glued-to-the-phone.html',
    chunks: ['/javascripts/allStyle.js', '/javascripts/animation.js']
  },
}

const chunksByFile = Object.fromEntries(
  Object.values(pages).map(({ file, chunks }) => [file, chunks])
)

function pageChunksPlugin() {
  return {
    name: 'page-chunks',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const relFile = path
          .relative(root, ctx.filename)
          .split(path.sep)
          .join('/')
        const chunks = chunksByFile[relFile]
        if (!chunks) return html

        return {
          html,
          tags: chunks.map((src) => ({
            tag: 'script',
            attrs: { type: 'module', src },
            injectTo: 'body'
          }))
        }
      }
    }
  }
}

export default defineConfig(({ command }) => ({
  root,
  base: command === 'build' ? '' : '', 
  plugins: [pageChunksPlugin()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(
        Object.entries(pages).map(([name, { file }]) => [
          name,
          path.resolve(root, file)
        ])
      )
    }
  },
  server: {
    open: true
  }
}))
