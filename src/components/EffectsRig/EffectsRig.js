import React from 'react';
import { useThree } from '@react-three/fiber';
import { EffectComposer, SSAO } from '@react-three/postprocessing';

const EffectsRig = props => {
    const { scene, camera } = useThree();
    return (
        <EffectComposer {...props}>
            <SSAO args={[scene, camera, 100, 100]} kernelRadius={1.2} kernelSize={0} />
        </EffectComposer>
    );
};

export default EffectsRig;
