import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Scene from './Hero3D/Scene'

function Banner() {
  return (
    <div>
        <div></div>
        <div className="">
            <Suspense fallback={null}>
                <Canvas shadows flat linear>
                    <Scene />
                    <OrbitControls />
                </Canvas>
            </Suspense> 
        </div>
    </div>
  )
}

export default Banner