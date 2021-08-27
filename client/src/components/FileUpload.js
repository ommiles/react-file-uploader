// import { useState } from 'react';
import { Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Dragger } = Upload;

const fileList = [
  {
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
];

const props = {
  name: 'file',
  multiple: true,
  listType: 'picture',
  //   defaultFileList: {[...fileList]},
  //   action: 'http://localhost:5000/upload',
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  onChange(info) {
    const { status } = info.file;
    const formData = new FormData();
    formData.append('file', info.file);

    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }

    try {
      const res = axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

export const FileUpload = () => {
  return (
    <Dragger {...props} defaultFileList={[...fileList]}>
      <p className='ant-upload-drag-icon'>
        <InboxOutlined />
      </p>
      <p className='ant-upload-text'>
        Click or drag file to this area to upload
      </p>
      <p className='ant-upload-hint'>
        Support for a single or bulk upload. Strictly prohibit from uploading
        company data or other band files
      </p>
    </Dragger>
  );
};
