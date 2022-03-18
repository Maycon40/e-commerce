import { NextPage } from "next";
import React, { useCallback, useState } from "react";
import { useRef } from "react";
import { CarModel } from "../../../types/ModelsType";
import ModelOverlay from "../ModelOverlay";
import ModelsContext from "../ModelsContext";

import styles from './index.module.css';

const ModelsWrapper: NextPage = ({ children }) => {
    const wrapperRef = useRef<HTMLDivElement>(null)

    const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])

    const registerModel = useCallback((model: CarModel) => {
        setRegisteredModels(state => [...state, model])
    }, [])

    const unregisterModel = useCallback((modelName: string) => {
        setRegisteredModels(state => state.filter(model => model.modelName !== modelName))
    }, [])

    const getModelByName = useCallback((modelName: string) => {
        return registeredModels.find(model => model.modelName === modelName) || null;
    }, [registeredModels])

    return (
        <ModelsContext.Provider value={{
            wrapperRef, registeredModels, registerModel, unregisterModel,getModelByName
        }}>
            <div ref={wrapperRef} className={styles.container}>
                <div className={styles.overlayRoot}>
                    {registeredModels.map(item => (
                        <ModelOverlay key={item.modelName} model={item}>
                            {item.overlayNode}
                        </ModelOverlay>
                    ))}
                </div>
                {children}
            </div>
        </ModelsContext.Provider>
    );
}

export default ModelsWrapper;