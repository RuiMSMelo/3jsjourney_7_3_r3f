import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Experience() {
    const cubeRef = useRef()
    const cubeSphereGroupRef = useRef()

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta
        // cubeSphereGroupRef.current.rotation.y += delta
    })

    return (
        <>
            <group ref={cubeSphereGroupRef}>
                <mesh ref={cubeRef} position={[1.5, 0, 0]}>
                    <boxGeometry />
                    <meshBasicMaterial color='mediumpurple' />
                </mesh>
                <mesh position={[-1.5, 0, 0]}>
                    <sphereGeometry />
                    <meshBasicMaterial color='orange' />
                </mesh>
            </group>
            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
                <planeGeometry />
                <meshBasicMaterial color='greenyellow' />
            </mesh>
        </>
    )
}
