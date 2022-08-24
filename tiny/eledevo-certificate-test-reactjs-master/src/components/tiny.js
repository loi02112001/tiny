import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

var arrImg = []
export default class Tiny extends React.Component {
    state = {
        content: '',
        id: '',
        title: '',
        title1: ''
    }

    componentDidUpdate() {
        if (this.state.id != this.props.id) {
            this.setState({
                id: this.props.id,
                content: this.props.content,
                title1: this.props.title1
            })
        }
    }

    render() {
        return (
            <div>
                <input className='input-add' onChange={(e) => { this.setState({ title: e.target.value }) }}></input>
                <button className='btn-add' onClick={() => {
                    this.props.addTiny({ content: this.state.content, arrImg: arrImg, title: this.state.title })
                    this.setState({ content: '' })
                }}>ADD</button>
                <input value={this.state.title1} onChange={(e) => { this.setState({ title1: e.target.value }) }}></input>
                <button onClick={() => { this.props.updateTiny({ id: this.state.id, content: this.state.content, title: this.state.title1 }) }}>Update</button>
                <Editor
                    onEditorChange={(value) => { this.setState({ content: value }) }}
                    value={this.state.content}
                    apiKey='0szh883h1tq2448dxm7x6mhm5xn1bo1gpqm1paatrzex5uxl'
                    initialValue="<p></p>"
                    init={{
                        height: 500,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount image'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help image',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                        images_upload_handler: async function (blobInfo, success, failure) {
                            var response
                            var form = new FormData()
                            var url = 'http://localhost:3001/item'
                            console.log(blobInfo,'day la blob');
                            form.append('img', blobInfo.blob())
                            try {
                                response = await fetch(url, {
                                    method: 'POST',
                                    body: form
                                })
                                const res = await response.json()
                                console.log(res,'day la ressssssssssss');
                                success(res.arrLink[0])
                                arrImg = (res.arrImg)
                            } catch (error) {
                                failure('Invalide JSON' + response)
                            }
                        }
                    }}
                />
                {/* <button onClick={log}>Log editor content</button> */}
            </div>
        );
    }
}
