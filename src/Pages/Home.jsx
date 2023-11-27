import React,{ Suspense,useState} from 'react'
import {Canvas} from "@react-three/fiber"  //three js fiber is a react renderer for three js and also it is not slower than the normal three js
import Loader from '../Components/Loader'
import Island from '../Models/Island'
import Sky from '../Models/Sky'
import Plane from '../Models/Plane'

const Home = () => {
  const [isRotating,setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = ()=>{
    let screenScale  = null;
    let  screenPosition = [2, -13, -50];  // [x-axis,y-axis,z-axis]
    let rotation = [0.1,4,0]
   
    if (window.innerWidth < 768){
      screenScale = [0.04,0.04,0.04];
     
    }
    else{
      screenScale = [0.06,0.06,0.06];
     
    }
    return [screenScale,screenPosition,rotation]
  }

  const adjustPlaneForScreenSize = ()=>{
    let screenScale,screenPosition;
   
   
    if (window.innerWidth < 768){
      screenScale = [1,1,1];
      screenPosition = [0,-2,0];
     
    }
    else{
      screenScale = [3,3,3];
      screenPosition = [-6,-2,-4];
     
    }
    return [screenScale,screenPosition]
  }

  const [islandScale, islandPos, islandRotation] = adjustIslandForScreenSize()
  const [planescale,planePosition] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      {/* Start building the animations by using the canvas tag*/}
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}   camera={{near:0.1, far:1000}} >  
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor={"#000000"} intensity={1}/>
          
          <Sky isRotating={isRotating}/>
          
          <Island position={islandPos} rotation={islandRotation} scale={islandScale} isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage}/>
          <Plane position={planePosition} scale={planescale} isRotating={isRotating} rotation={[0,20,0]} />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home