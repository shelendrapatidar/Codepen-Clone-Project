import { useContext } from 'react';

//components
import Editor from './Editor';

import { styled } from '@mui/material';

import { DataContext } from '../context/DataProvider';

const Container = styled('div')`
    background-color: #060606;
    height: 55vh;
    width: 100%;
    display: flex;
`;

const EditorContainer = styled('div')`
    flex: 1;
    width:30%;
    height:10%;
    flex-wrap:wrap;
     /* This will make each editor take up equal space, i.e., 33% */
`;

const Code = () => {
    const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

    return (
        <Container>
            <EditorContainer>
                <Editor 
                    language="xml"
                    heading="HTML"
                    value={html}
                    onChange={setHtml}
                    icon='/'
                    color='#FF3C41'
                />
            </EditorContainer>
            <EditorContainer>
                <Editor 
                    language="css"
                    heading="CSS"
                    value={css}
                    onChange={setCss}
                    icon='*'
                    color='#0EBEFF'
                />
            </EditorContainer>
            <EditorContainer>
                <Editor 
                    language="javascript"
                    heading="JS"
                    value={js}
                    onChange={setJs}
                    icon='( )'
                    color='#FCD000'
                />
            </EditorContainer>
        </Container>
    );
};

export default Code;
