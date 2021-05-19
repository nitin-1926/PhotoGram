import React, {useState, useEffect} from 'react';
import { Card, Input, Button, Upload } from 'antd';
import { PlusCircleOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import { addNotification } from '../../../common/commonFunctions';
import { useHistory } from 'react-router-dom';
import './CreatePost.css';

const { TextArea } = Input;

const CreatePost = props => {

    const history = useHistory();

    const [fileList, setFileList] = useState([]);
    const [caption, setCaption] = useState(null);
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const addPost = imageUrl => {
        fetch('/createPost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                caption,
                imageUrl
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.message === 'successful') {
                    addNotification('postAdded', 'Post added successfully', 'Your post is added successfully. Hope you get maximum likes and comment on it ;)', 'success');
                    history.push('/');
                } else {
                    addNotification('postAddedFailed', 'Cannot add post', data.error, 'error');
                }
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    };

    const handleAddPost = () => {
        setIsLoading(true);
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'photogram');
        data.append('cloud_name', 'nitin-1926');

        if (caption) {
            fetch('https://api.cloudinary.com/v1_1/nitin-1926/image/upload', {
                method: 'POST',
                body: data
            }).then(res => res.json())
                .then(data => {
                    console.log('data: ', data);
                    addPost(data.secure_url);
                })
                .catch(err => console.log(err));
        } else {
            addNotification('createPostFailed', 'Cannot create post', 'Please enter all the fields to continue', 'error');
        }

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
                <TextArea value={caption} rows={2} placeholder='Enter Caption' style={{ marginTop: '4%' }} onChange={e => setCaption(e.target.value)}/>
                <div className='buttonDiv'>
                    <Button loading={isLoading} shape='round' type='primary' size='large' className='addPostButton' onClick={handleAddPost} icon={<AppstoreAddOutlined />}>Add Post</Button>
                </div>
            </Card>
        </div>
    );
};

export default CreatePost;
