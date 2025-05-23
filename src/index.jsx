import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas>
        <Experience />
    </Canvas>
)
