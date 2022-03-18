import { NextPage } from 'next';
import React, { useEffect, useRef } from 'react';
import useModel from '../useModel';

import styles from './index.module.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    modelName: string;
    overlayNode: React.ReactNode;
}

const ModelsSection: NextPage<Props> = ({ modelName, overlayNode, children, ...props }) => {
    const { registerModel } = useModel(modelName);

    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(sectionRef.current){
            registerModel({ modelName, overlayNode, sectionRef })
        }
    }, [])
    return (
        <div ref={sectionRef} className={styles.container} {...props}>
            {children}
        </div>
    );
}

export default ModelsSection;