import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()

  const { nodes, materials } = useGLTF('./porto.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[2, -60, -0.01]} rotation={[-Math.PI / 2, 0, 0]} scale={0.1} >
        <group position={[0, -6.49, -0.18]}>
          <mesh geometry={nodes.Screen.geometry} material={materials.Allure} />
          <mesh geometry={nodes.Display_Body.geometry} material={materials.Body} />
          <mesh geometry={nodes.Pads.geometry} material={materials.Pads} position={[0, 6.49, 0.18]} />
          <mesh geometry={nodes['1000$_Stand'].geometry} material={materials.Body} />
          <mesh geometry={nodes.Joint.geometry} material={materials.Body} />
          <mesh geometry={nodes.Black_Frame.geometry} material={materials['Display Rim']} />
          <mesh geometry={nodes.Screws.geometry} material={materials.Screws} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./porto.glb')
