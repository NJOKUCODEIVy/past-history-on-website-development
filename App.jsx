import {Canvas , useFrame} from "@react-three/fiber";
import {OrbitControls, Sparkles} from "@react-three/drei";
import {useRef} from "react";

const RotatingCube = () => {
    const meshRef = useRef( null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01
            meshRef.current.rotation.x += 0.01

        }
    })

    return (
        <mesh ref={meshRef}>
         < dodecahedronGeometry args={[1, 1, 1]} />
          <meshLambertMaterial color="purple" emissive="lightgreen" />

            <Sparkles count={500} scale={160} size={60} speed={0.000002} noise={0.02} color={"white"}/>
        </mesh>
    )
}

const App = () => {
    return(
        <Canvas style={{ height: '100vh', width:'100vw' , display:'flex',  justifyContent:'center', alignItems: 'center'}}>
          <OrbitControls  enableZoom enablePan enableRotate/>

            <spotLight position={[1,1,1]} intensity={10} color={'yellow'}  />

            <color attach= "background" args={['black']}   />

            <RotatingCube />
        </Canvas>
    )
}
export default App;
