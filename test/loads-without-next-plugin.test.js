import assert from 'node:assert/strict'
import configs from '../index.js'

assert.ok(Array.isArray(configs.recommended))
assert.ok(configs.recommended.length > 0)

assert.throws(
  () => configs.nextExtension,
  /@next\/eslint-plugin-next/
)
