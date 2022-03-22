import { NextPage } from 'next';
import React from 'react';

import Title from './Title'
import Model from '../Data/Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelsSection, ModelsWrapper } from '../Model';

import styles from './index.module.css'

const Page: NextPage = () => {
    return (
        <div className={styles.container}>           
            <ModelsWrapper>
                <ModelsSection
                    key="10"
                    modelName="Title"
                    overlayNode={
                        <Title>Seja bem vindo ao nosso site</Title>
                    }
                />
                {Model.map((item, index) =>
                    <ModelsSection
                        style={{ backgroundImage: `url(${item.image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '15%' }}
                        key={index}
                        modelName={item.label}
                        overlayNode={
                            <DefaultOverlayContent
                                label={item.label}
                                description={item.description}
                                image={item.image}
                            />
                        }
                    />
                )}
            </ModelsWrapper>
        </div>
    );
}

export default Page;