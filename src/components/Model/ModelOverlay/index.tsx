import { useTransform, motion } from 'framer-motion';

import { NextPage } from 'next';
import React from 'react';
import { useCallback } from 'react';
import { useLayoutEffect } from 'react';
import { useState } from 'react';

import { CarModel } from '../../../types/ModelsType';
import useWrapperScroll from '../useWrapperScroll';

import styles from './index.module.css';

interface Props {
    model: CarModel;
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

const ModelOverlay: NextPage<Props> = ({ model, children }) => {
    const getSectionDimensions = useCallback(() => {
        return {
            offsetTop: model.sectionRef.current?.offsetTop,
            offsetHeight: model.sectionRef.current?.offsetHeight
        } as SectionDimensions
    }, [model.sectionRef])

    const [dimensions, setDimensions] = useState<SectionDimensions>(getSectionDimensions());

    useLayoutEffect(() => {
        function onResize (){
            const data = getSectionDimensions()

            window.requestAnimationFrame(() => setDimensions(data));
        }

        window.addEventListener('resize', onResize);

        return () => window.removeEventListener('resize', onResize);
    }, [])

    const { scrollY } = useWrapperScroll();

    const sectionScrollProgress = useTransform(
        scrollY, y => 
        (y - dimensions.offsetTop) / dimensions.offsetHeight
    );

    const opacity = useTransform(
        sectionScrollProgress, 
        [-0.42, -0.05, 0.05, 0.42],
        [0, 1, 1, 0]
    )

    const pointerEvents = useTransform(opacity, value => (
        value > 0 ? 'auto' : 'none'
    ))

    return (
        <motion.div style={{ opacity, pointerEvents }} className={styles.container}>
            { children }
        </motion.div>
    );
}

export default ModelOverlay;