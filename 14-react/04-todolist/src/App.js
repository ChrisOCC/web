/*
* @Author: Chris
* @Date:   2019-10-23 09:40:06
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-24 21:59:59
*/
import React,{ Component } from 'react'
import Item from './Item.js'
import "./App.css"
class App extends Component{
	constructor(props){
		super(props)
		this.state = {
			list:["吃饭"],
			task:''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
	}
	handleAdd(){
		this.setState((preState)=>({
			list:[...preState.list,preState.task],
			task:''
		}),()=>{
			console.log('2::',this.ul.childNodes)
		})
		console.log('1::',this.ul.childNodes)
	}
	handleChange(ev){
		// console.log(this.input)
		// const task = ev.target.value
		const task = this.input.value
		this.setState(()=>({
			task:task
		}))
	}
	handleDel(index){
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState(()=>({
			list
		}))
	}
	getItems(){
		return this.state.list.map((item,index)=>{
			return <Item key={index} task={item} handleDel={this.handleDel.bind(this,index)} />
		})
	}
	render(){
		return(
		<div className="App">		
			<input onChange={this.handleChange} value={this.state.task} ref={(input)=>{this.input = input}} />
			<button onClick={this.handleAdd}>提交</button>
			<ul ref={(ur)=>{this.ul = ul}}>
				{
					this.getItems()
				}
			</ul>
		</div>
		)
	}
}
export default App