import React, {useState, useEffect} from 'react';
import { Card, Input, Button, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import './CreatePost.css';

const { TextArea } = Input;

const CreatePost = props => {

    const [fileList, setFileList] = useState([]);
    
    const onChange = ({ fileList: newFileList }) => {
        console.log('New file list: ', newFileList);
        setFileList(newFileList);
    };
    
    const onPreview = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };

    return (
        <div className='cardContainer'>
            <Card
                hoverable
                className='createPost'
            >
                <ImgCrop rotate>
                    <Upload
                        // action={file => console.log('File: ', file)}
                        action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                        listType='picture-card'
                        fileList={fileList}
                        onChange={onChange}
                        onPreview={onPreview}
                    >
                        {fileList.length < 1 && '+ Upload Image'}
                    </Upload>
                </ImgCrop>
                <TextArea rows={3} placeholder='Enter Caption'/>
                <div className='buttonDiv'>
                    <Button type='primary' size='large' className='addPostButton' onClick={() => {}}>Add Post</Button>
                </div>
            </Card>
        </div>
    );
};

export default CreatePost;
