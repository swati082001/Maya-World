import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import skyScene from "../assets/3d/sky.glb";
import animeSky from "../assets/3d/animesky.glb";
import { useFrame } from '@react-three/fiber';

const Sky = ({isRotating}) => {
    const sky = useGLTF(animeSky)
    const skyRef = useRef();

    useFrame((_,delta)=>{
        if(isRotating){
            skyRef.current.rotation.y += 0.15 * delta;
        }
    })
  return (
    <mesh ref={skyRef}>
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky