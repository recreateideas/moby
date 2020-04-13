import React, { useState } from 'react';
import propTypes from './propTypes';
import {
    Container, Group, Path, Div,
} from './styles';
import Actions from './Actions';
import { StatusIndicator } from '../../components';
import DetailsDrawer from './DetailsDrawer';

const ProjectSlot = (props) => {
    const { onYamlClick, path, yaml } = props;
    const [isExpanded, setIsExpanded] = useState(false);
    const { length: containersNo } = Object.keys(yaml.services);
    const displayPath = `${path.replace(/^\//, '')}/`;
    const handleAction = (action) => {
        switch (action) {
            case 'expand':
                setIsExpanded(!isExpanded);
                break;
            case 'yaml':
                onYamlClick();
                break;
            default: break;
        }
    };
    const statusActive = true;
    return (
        <>
            <Container className="project-slot">
                <Group className="left-group">
                    <Div className="status">
                        <StatusIndicator isActive={statusActive} />
                    </Div>
                    <Path>
                        {displayPath}
                    </Path>
                </Group>
                <Div>
                    {containersNo}
                </Div>
                <Div>
                    <Actions
                        onSelect={handleAction}
                        statusActive={statusActive}
                        isExpanded={isExpanded}
                    />
                </Div>
            </Container>
            <DetailsDrawer isExpanded={isExpanded} />
        </>
    );
};

ProjectSlot.propTypes = propTypes;

export default ProjectSlot;