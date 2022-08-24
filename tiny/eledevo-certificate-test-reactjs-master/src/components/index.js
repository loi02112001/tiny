import React from "react";
import Tiny from './tiny'
class Items extends React.Component {
    state = {
        nameAdd: '',
        nameUpdate: '',
        id: '',
        nameSearch: '',
        content: '',
        listId:[],
        id2:''
    }
    render() {
        let listData = []
        let listButton = []
        for (let i = 1; i <= this.props.totalPage; i++) {
            listButton.push(i)
        }

        if (this.props.items) {
            listData = this.props.items.map((item, key) => {
                return (
                    <tr key={key}>
                        <th>{key + 1}</th>
                        <th>{item.title}</th>
                        <th style={{ display: this.state.id1 === item._id ? 'inline-block' : 'none' }} dangerouslySetInnerHTML={{ __html: item.content }}></th>
                        <th><button style={{visibility: this.state.id1!==item._id ? 'visible' : 'hidden' }} onClick={() => { this.setState({ id1: item._id }) }}>ReadMore</button></th>
                        <th><button style={{visibility: this.state.id1 === item._id ? 'visible' :'hidden' }} onClick={() => { this.setState({ id1: '' }) }}>ReadLess</button></th>
                        <th><button onClick={() => { this.props.delItem({ id: item._id }) }}>DELETE</button></th>
                        <th><button onClick={() => { this.setState({ id: item._id, content: item.content,title:item.title,id1:item._id}) }}>Choose</button></th>
                    </tr>
                )
            })
        }
        return (
            <div>
                <input onChange={(e) => { this.setState({ nameSearch: e.target.value }) }}></input>
                <button onClick={() => { this.props.searchPaginate({ nameSearch: this.state.nameSearch, activePage: 1 }) }}>Search</button>
                <table>
                    <tbody>
                        <tr>
                            <th>Id cua du lieu</th>
                            <th>Title</th>
                            <th>Images</th>
                        </tr>
                        {listData}
                    </tbody>
                </table>
                {listButton.map((item, key) => {
                    return (
                        <button key={key}
                            style={{ backgroundColor: this.props.activePage === item ? 'red' : 'white' }}
                            onClick={() => {
                                this.props.nameSearch ?
                                    this.props.searchPaginate({ nameSearch: this.props.nameSearch, activePage: item }) :
                                    this.props.paginateItem({ activePage: item })
                            }}>{item}</button>
                    )
                })}
                <Tiny addTiny={this.props.addItem}
                    updateTiny={this.props.updateItem}
                    id={this.state.id}
                    title1={this.state.title}
                    content={this.state.content}
                ></Tiny>
            </div>

        )
    }
}
export default Items