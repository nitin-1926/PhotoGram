import React, {useState, useEffect} from 'react';
import { Card, Input, Button, Upload } from 'antd';
import { PlusCircleOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import { addNotification } from '../../../common/commonFunctions';
import { useHistory } from 'react-router-dom';
import './CreatePost.css';

const { TextArea } = Input;

const CreatePost = props => {

    const history = useHistory();

    const [fileList, setFileList] = useState([]);
    const [caption, setCaption] = useState(null);
    const [image, setImage] = useState(null);

    const addPost = imageUrl => {
        fetch('/createPost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                caption,
                imageUrl
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.message === 'successful') {
                //     addNotification('loginSuccess', 'Login Successful', 'You are now logged in successfully. Hope to enjoy using our platform to the fullest', 'success');
                //     history.push('/');
                // } else {
                //     addNotification('loginFailed', data.message, data.error, 'error');
                // }
                // setIsLoading(false);
            })
            .catch(err => console.log(err));
    };

    const handleAddPost = () => {
        console.log('Inside add post');
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'photogram');
        data.append('cloud_name', 'nitin-1926');

        fetch('https://api.cloudinary.com/v1_1/nitin-1926/image/upload', {
            method: 'POST',
            body: data
        }).then(res => res.json())
            .then(data => {
                console.log('data: ', data);
                addPost(data.secure_url);
            })
            .catch(err => console.log(err));
    };
    
    // const onPreview = async file => {
    //     let src = file.url;
    //     if (!src) {
    //         src = await new Promise(resolve => {
    //             const reader = new FileReader();
    //             reader.readAsDataURL(file.originFileObj);
    //             reader.onload = () => resolve(reader.result);
    //         });
    //     }
    //     const image = new Image();
    //     image.src = src;
    //     const imgWindow = window.open(src);
    //     imgWindow.document.write(image.outerHTML);
    // };

    const uploadButton = (
        <div>
            <PlusCircleOutlined style={{fontSize: '18px'}} />
            <div style={{ marginTop: 8 }}>Upload Image</div>
        </div>
    );

    return (
        <div className='cardContainer'>
            <Card
                hoverable
                className='createPost'
            >
                <ImgCrop rotate>
                    <Upload
                        action={file => {
                            setImage(file);
                            setFileList([file]);
                        }}
                        listType='picture-card'
                        fileList={fileList}
                        // onPreview={onPreview}
                        onRemove={() => setFileList([])}
                    >
                        {fileList.length < 1 && uploadButton}
                    </Upload>
                </ImgCrop>
                <TextArea value={caption} rows={2} placeholder='Enter Caption' style={{ marginTop: '4%' }} onChange={e => setCaption(e.target.value)}/>
                <div className='buttonDiv'>
                    <Button shape='round' type='primary' size='large' className='addPostButton' onClick={handleAddPost} icon={<AppstoreAddOutlined />}>Add Post</Button>
                </div>
            </Card>
        </div>
    );
};

export default CreatePost;
