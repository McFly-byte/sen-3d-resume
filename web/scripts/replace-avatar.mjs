import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import { copyToDocument, dedup, prune, unpartition } from '@gltf-transform/functions'

const [, , templatePath, avatarPath, outputPath] = process.argv

if (!templatePath || !avatarPath || !outputPath) {
  console.error('Usage: node scripts/replace-avatar.mjs <template.glb> <avatar.glb> <output.glb>')
  process.exit(1)
}

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS)
const template = await io.read(templatePath)
const avatar = await io.read(avatarPath)

const manNode = template.getRoot().listNodes().find((node) => node.getName() === 'man')
const avatarMesh = avatar.getRoot().listMeshes()[0]

if (!manNode) throw new Error('Template GLB is missing the "man" node.')
if (!avatarMesh) throw new Error('Avatar GLB does not contain a mesh.')

// The old character owns decorative stickers and separate eye meshes. They do not
// line up with a replacement avatar, while the focus-* anchors are still useful.
for (const child of [...manNode.listChildren()]) {
  if (!child.getName().startsWith('focus-')) child.dispose()
}

const oldMesh = manNode.getMesh()
const propertyMap = copyToDocument(template, avatar, [avatarMesh])
const importedMesh = propertyMap.get(avatarMesh)

if (!importedMesh) throw new Error('Failed to copy the avatar mesh into the template GLB.')

importedMesh.setName('LiuMingchengAvatar')
manNode.setMesh(importedMesh)
oldMesh?.dispose()

await template.transform(unpartition(), dedup(), prune())
await io.write(outputPath, template)

console.log(`Avatar replaced: ${outputPath}`)
