import { extend, useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

extend({ OrbitControls: OrbitControls })

export default function Experience() {
    const { camera, gl } = useThree()
    const cubeRef = useRef()
    const cubeSphereGroupRef = useRef()

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta
        // cubeSphereGroupRef.current.rotation.y += delta
    })

    return (
        <>
            <orbitControls args={[camera, gl.domElement]} />

            <directionalLight position={[1, 2, 3]} intensity={3} />
            <ambientLight intensity={1} />

            <group ref={cubeSphereGroupRef}>
                <mesh ref={cubeRef} position={[1.5, 0, 0]}>
                    <boxGeometry />
                    <meshStandardMaterial color='mediumpurple' />
                </mesh>
                <mesh position={[-1.5, 0, 0]}>
                    <sphereGeometry />
                    <meshStandardMaterial color='orange' />
                </mesh>
            </group>
            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshStandardMaterial color='greenyellow' />
            </mesh>
        </>
    )
}
