/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/untitled.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/untitled.glb')
  return (
    <group {...props} dispose={null} scale={0.2}> {/* Scale down by 0.1 for example */}
      <mesh geometry={nodes.Cube_1.geometry} material={materials.Material} />
      <mesh geometry={nodes.Cube_2.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Cube_3.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.Cube_4.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Cube_5.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Cube_6.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.Cube_7.geometry} material={materials['Material.006']} />
    </group>
  )
}

useGLTF.preload('/untitled.glb')
